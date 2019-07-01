import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import uuid from 'uuid';
import pool from '../db';
import authenticateUser from '../../../helpers/authenticateUser';


dotenv.config();

const { secret } = process.env;

const User = {
  async signUpUser(req, res) {
    const { error } = authenticateUser.signupValidator(req.body);
    if (error) {
      return res.status(400).json({ status: 400, error: error.details[0].message });
    }

    const queryText = `INSERT INTO 
        users(id, first_name, last_name, email, password) 
        VALUES($1, $2, $3, $4, $5) 
        RETURNING *`;

    const id = uuid.v4();
    // eslint-disable-next-line camelcase
    const { first_name, last_name, email, password } = req.body;

    const hashPassword = bcrypt.hashSync(password, 10);

    // eslint-disable-next-line camelcase
    const values = [id, first_name, last_name, email, hashPassword];

    const existingEmail = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await pool.query(existingEmail, [email]);

    if (rows.length > 0) {
      return res.status(400).json({ status: 'error', error: 'User already exists' });
    }

    try {
      const { rows: rowsInsert } = await pool.query(queryText, values);

      const token = jwt.sign({ email }, secret, { expiresIn: '10h' });

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
    // Validating
    const { error } = authenticateUser.UserLoginValidator(req.body);

    if (error) {
      return res.status(400).json({ status: 400, error: error.details[0].message.slice(0, 70) });
    }
    const queryText = 'SELECT * FROM users WHERE email = $1';

    const { email, password } = req.body;


    try {
      // Select all user record where email is equal to the email in the db
      const { rows } = await pool.query(queryText, [email]);

      // console.log(rows);
      // check if user exist in database
      if (!rows[0].email) {
        return res.status(401).json({ status: 'error', error: 'Email and/or password is incorrect' });
      }


      const comparePassword = bcrypt.compareSync(password, rows[0].password);

      if (!comparePassword) {
        return res.status(401).json({
          status: 'error',
          error: 'Password incorrect',
        });
      }


      const token = jwt.sign({
        id: rows[0].id,
        email,
      }, secret);

      return res.status(200).json({
        status: 'success',
        data: {
          user_id: rows[0].id,
          is_admin: rows[0].is_admin,
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
