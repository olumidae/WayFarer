import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import pool from '../models/db/db';
import userModel from '../models/userModel';
import authenticateUser from '../helpers/authenticateUser';

dotenv.config();
const { secret } = process.env;

const User = {
  getAllUsers: (req, res) => {
    if (!userModel.UserData.length) {
      return res.status(404).json({ status: 404, error: 'No user found' });
    }

    return res.status(200).json({ status: 200, data: userModel.UserData });
  },

  signUp: (req, res) => {
    const { error } = authenticateUser.signupValidator(req.body);

    if (error) {
      return res.status(400).json({ status: 400, error: error.details[0].message });
    }

    let signUpUser = userModel.UserData.find(user => user.email === req.body.email);

    if (signUpUser) {
      return res.status(400).json({ status: 400, error: 'This email has been registered' });
    }

    signUpUser = userModel.UserData;

    const token = jwt.sign({ sub: signUpUser.email }, secret, {
      expiresIn: '10h',
    });
    return res.status(201).json({
      status: 'success',
      data: {
        user_id: signUpUser.id,
        is_admin: signUpUser.is_admin,
        token,
      },

    });
  },

  async logInUser(req, res) {
    // Validating
    const { error } = authenticateUser.UserLoginValidator(req.body);

    if (error) return res.status(400).json({ status: 400, error: error.details[0].message });

    const queryText = 'SELECT * FROM users WHERE email = $1';

    const { email, password } = req.body;

    try {
      // Select all user record where email is equal to the email in the db
      const { rows } = await pool.query(queryText, [email]);

      if (!rows[0].email) return res.status(401).json({ status: 'error', error: 'Email and/or password is incorrect' });

      const comparePassword = bcrypt.compareSync(password, rows[0].password);

      if (!comparePassword) return res.status(401).json({ status: 'error', error: 'Password incorrect' });

      const token = jwt.sign({ id: rows[0].id, email }, secret);

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
