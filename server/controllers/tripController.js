/* eslint-disable indent */
/* eslint-disable camelcase */
import uuid from 'uuid';
import moment from 'moment';
import pool from '../models/db/db';
import authenticateTrip from '../helpers/authenticateTrip';

const Trip = {

  async createTrip(req, res) {
    const { error } = authenticateTrip.tripValidator(req.body);
    if (error) return res.status(400).json({ status: 400, error: error.details[0].message });

    const createTrip = `INSERT INTO trip (id, bus_id, origin, destination, trip_date, fare) VALUES($1, $2, $3, $4, $5, $6)
    RETURNING *`;
    const id = uuid.v1();
    const { is_admin, user_id, bus_id, origin, destination, trip_date, fare } = req.body;
    const formatted_date = moment(trip_date).format('lll');
    const values = [id, bus_id, origin, destination, formatted_date, fare];
    const selectText = 'SELECT * FROM users where id = $1';
    const { rows } = await pool.query(selectText, [user_id]);

    if (rows[0].is_admin === false) return res.status(400).json({ status: 'error', error: 'Only admin can create trips' });

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

    const getTrip = 'SELECT * FROM trip';
    try {
      const { rows } = await pool.query(getTrip);
      return res.status(200).json({
        status: 'success',
        data: {
          rows,
        },
      });
    } catch (e) {
      return res.status(500).json({ status: 'error', error: 'Internal server error' });
    }
  },
};


export default Trip;
