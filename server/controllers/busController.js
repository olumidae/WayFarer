/* eslint-disable camelcase */
import uuid from 'uuid';
import pool from '../models/db/db';
import authenticateBus from '../helpers/authenticateBus';


const Bus = {

  async createBus(req, res) {
    const { error } = authenticateBus(req.body);
    if (error) return res.status(400).json({ status: 400, error: error.details[0].message });

    const queryText = `INSERT INTO bus(id, number_plate, manufacturer, model, year, capacity) VALUES($1, $2, $3, $4, $5, $6)
    RETURNING *`;
    const id = uuid.v1();
    const { number_plate, manufacturer, model, year, capacity } = req.body;
    const values = [id, number_plate, manufacturer, model, year, capacity];
    const existingPlate = 'SELECT * FROM bus WHERE number_plate = $1';
    const { rows } = await pool.query(existingPlate, [number_plate]);

    if (rows.length > 0) return res.status(400).json({ status: 'error', error: 'Number plate already exists' });

    try {
      const { rows: rowsInsert } = await pool.query(queryText, values);
      return res.status(200).json({
        status: 'success',
        data: {
          rowsInsert,
        },
      });
    } catch (e) {
      return res.status(500).json({ status: 'error', error: 'Internal server error' });
    }
  },
};

export default Bus;
