/* eslint-disable camelcase */
import pool from '../models/db/db';

const book = {

  async makeBooking(req, res) {
    try {
      const { email, id } = req.user;
      const { trip_id } = req.body;
      let { seat_number } = req.body;
      if (!seat_number) {
        seat_number = Math.floor(Math.random() * 18) + 1;
      }
      const checkUser = 'SELECT * FROM users WHERE email = $1';
      const { rows } = await pool.query(checkUser, [email]);

      if (!rows[0]) res.status(401).json({ status: 401, error: 'Please sign up' });
      if (rows[0].is_loggedin === false) res.status(401).json({ status: 401, error: 'You must be logged in to book a trip' });

      const status = 'active';
      const checkTrip = {
        text: 'SELECT * FROM trip where id = $1 AND status = $2',
        values: [trip_id, status],
      };
      const { rows: trip } = await pool.query(checkTrip);
      if (!trip[0]) {
        return res.status(404).json({
          status: 404,
          error: 'trip not available',
        });
      }

      const checkSeat = {
        text: 'SELECT * FROM booking where trip_id = $1 AND seat_number = $2',
        values: [trip_id, seat_number],
      };
      const { rows: seat } = await pool.query(checkSeat);
      if (seat[0]) return res.status(409).json({ status: 409, error: 'Seat number already taken' });

      const createQuery = {
        text: 'INSERT INTO booking(trip_id, user_id, seat_number) VALUES($1, $2, $3) RETURNING *',
        values: [trip_id, id, seat_number],
      };
      const { rows: booking } = await pool.query(createQuery);
      return res.status(201).json({
        status: 'success',
        data: {
          user_id: rows[0].user_id,
          trip_id: trip[0].id,
          bus_id: trip[0].bus_id,
          trip_date: trip[0].trip_date,
          seat_number: booking[0].seat_number,
          first_name: rows[0].first_name,
          last_name: rows[0].last_name,
          email: rows[0].email,
        },
      });
    } catch (error) {
      return res.status(500).json({ status: 500, error: 'Internal server error' });
    }
  },

  async getbookings(req, res) {
    try {
      const { is_admin, id } = req.user;
      if (is_admin === Boolean(true)) {
        const checkBookings = {
          text: `SELECT 
        booking.id AS booking_id,booking.user_id, booking.seat_number, booking.trip_id, 
        trip.bus_id, trip.origin, trip.destination, trip.trip_date, trip.status,
        users.first_name, users.last_name, users.email
        FROM booking JOIN trip ON (booking.trip_id = trip.id) JOIN users ON (booking.user_id = users.id)`,
        };
        const { rows } = await pool.query(checkBookings);
        console.log(rows[0]);
        if (!rows[0]) {
          return res.status(404).json({
            status: 404,
            error: 'No booking found',
          });
        }
        return res.status(200).json({
          status: 'success',
          data: rows,
        });
      }
      const checkBookings = {
        text: `SELECT 
      booking.id AS booking_id,booking.user_id, booking.seat_number, booking.trip_id, 
      trip.bus_id, trip.origin, trip.destination, trip.trip_date, trip.status,
      users.first_name, users.last_name, users.email
      FROM booking JOIN trip ON (booking.trip_id = trip.id) JOIN users ON (booking.user_id = users.id) WHERE user_id = $1`,
        values: [id],
      };
      const { rows } = await pool.query(checkBookings);
      if (!rows[0]) {
        return res.status(404).json({
          status: 404,
          error: 'No booking found',
        });
      }
      return res.status(200).json({
        status: 'success',
        data: rows,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: `Internal server error ${error.message}`,
      });
    }
  },

};

export default book;
