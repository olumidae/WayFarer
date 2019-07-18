/* eslint-disable indent */
/* eslint-disable camelcase */
import moment from 'moment';
import pool from '../models/db/db';
import authenticateTrip from '../helpers/authenticateTrip';

const Trip = {

  async createTrip(req, res) {
    const { error } = authenticateTrip.tripValidator(req.body);
    if (error) return res.status(400).json({ status: 400, error: error.details[0].message });

    const createTrip = `INSERT INTO trip ( bus_id, origin, destination, trip_date, fare) VALUES($1, $2, $3, $4, $5)
    RETURNING *`;
    const { bus_id, origin, destination, trip_date, fare } = req.body;
    const formatted_date = moment(trip_date).format('lll');
    const values = [bus_id, origin, destination, formatted_date, fare];
    const checkbus = {
      text: 'SELECT * FROM bus WHERE id = $1',
      values: [bus_id],
    };
    const { rows } = await pool.query(checkbus);
    if (!rows[0]) {
      return res.status(404).json({
        status: 404,
        error: 'Not an available bus',
      });
    }
    try {
      const { rows: rowsInsert } = await pool.query(createTrip, values);
      return res.status(200).json({
        status: 'success',
        data: {
          trip_id: rowsInsert[0].id,
          bus_id: rowsInsert[0].bus_id,
          origin: rowsInsert[0].origin,
          destination: rowsInsert[0].destination,
          trip_date: rowsInsert[0].formatted_date,
          fare: rowsInsert[0].fare,
          status: rowsInsert[0].status,
        },
      });
    } catch (e) {
      return res.status(500).json({ status: 'error', error: 'Internal server error' });
    }
  },

  async getAllTrips(req, res) {
    const { error } = authenticateTrip.tripGetter(req.body);
    if (error) return res.status(400).json({ status: 400, error: error.details[0].message });

    try {
      const { origin, destination } = req.query;
      if (origin) {
        const getOrigin = {
          text: 'SELECT * FROM trip WHERE origin = $1',
          values: [origin],
        };
        const { rows: orijin } = await pool.query(getOrigin);
        if (!orijin[0]) {
          return res.status(404).json({
            status: 404,
            error: 'No available trip',
          });
        }
        return res.status(200).json({
          status: 'success',
          data: orijin,
        });
      }
      if (destination) {
        const getDestination = {
          text: 'SELECT * FROM trip WHERE destination = $1',
          values: [destination],
        };
        const { rows: destine } = await pool.query(getDestination);
        if (!destine[0]) {
          return res.status(404).json({
            status: 404,
            error: 'No available trip',
          });
        }
        return res.status(200).json({
          status: 'success',
          data: destine,
        });
      }
      const getTrips = { text: 'SELECT * FROM trip' };
      const { rows } = await pool.query(getTrips);
      if (!rows[0]) {
        return res.status(404).json({
          status: 404,
          error: 'No available trip',
        });
      }
      return res.status(200).json({
        status: 'success',
        data: rows,
      });
    } catch (e) {
      return res.status(500).json({
        status: 500,
        error: `Internal server error ${error.message}`,
      });
    }
  },

  async cancelTrip(req, res) {
    try {
      const { tripId } = req.params;
      console.log(tripId);
      const checkTrip = {
        text: 'SELECT * FROM trip WHERE id = $1 and status = $2',
        values: [tripId, 'active'],
      };
      const { rows } = await pool.query(checkTrip);
      if (!rows[0]) {
        return res.status(400).json({
          status: 400,
          error: 'Not an active trip',
        });
      }
      const updateTrip = {
        text: "UPDATE trip SET status = 'cancelled' WHERE id = $1",
        values: [tripId],
      };
      await pool.query(updateTrip);
      return res.status(200).json({
        status: 'success',
        data: {
          message: 'Trip cancelled successfully',
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: `Internal server error ${error.message}`,
      });
    }
  },

};


export default Trip;
