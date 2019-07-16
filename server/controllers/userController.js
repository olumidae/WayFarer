import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../models/db/db';


dotenv.config();
const { secret } = process.env;

const User = {
  async signUpUser(req, res) {
    const existingEmail = 'SELECT * FROM users WHERE email = $1';
    const queryText = 'INSERT INTO users(first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *';

    // eslint-disable-next-line camelcase
    const { id, first_name, last_name, email, password } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    // eslint-disable-next-line camelcase
    const values = [first_name, last_name, email, hashPassword];
    const { rows } = await pool.query(existingEmail, [email]);

    if (rows.length > 0) return res.status(400).json({ status: 'error', error: 'User already exists' });

    try {
      const { rows: rowsInsert } = await pool.query(queryText, values);
      const token = jwt.sign({ id, email }, secret, { expiresIn: '10h' });
      return res.status(201).json({
        status: 'success',
        data: {
          user_id: rowsInsert[0].id,
          is_admin: rowsInsert[0].is_admin,
          token,
        },
      });
    } catch (e) {
      return res.status(500).json({ status: 'error', error: 'Server error' });
    }
  },

  async logInUser(req, res) {
    const { email, password } = req.body;
    const queryText = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await pool.query(queryText, [email]);
    // check if user exist in database
    if (!rows[0].email) return res.status(401).json({ status: 'error', error: 'Email and/or password is incorrect' });
    const comparePassword = bcrypt.compareSync(password, rows[0].password);
    if (!comparePassword) return res.status(401).json({ status: 'error', error: 'Password incorrect' });

    try {
      const updateText = 'UPDATE users SET is_loggedin = true WHERE email=$1 RETURNING *';
      const { rows: rowsUpdate } = await pool.query(updateText, [email]);
      const token = jwt.sign({ id: rows[0].id, email }, secret, { expiresIn: '10h' });

      return res.status(200).json({
        status: 'success',
        data: {
          user_id: rowsUpdate[0].id,
          is_admin: rowsUpdate[0].is_admin,
          is_loggedin: rowsUpdate[0].is_loggedin,
          token,
        },
      });
    } catch (e) {
      return res.status(500).json({
        status: '500',
        error: 'Internal server error',
      });
    }
  },

};

export default User;
