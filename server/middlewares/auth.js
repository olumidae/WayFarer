import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import authenticateUser from '../helpers/authenticateUser';
import authenticateTrip from '../helpers/authenticateTrip';
import pool from '../models/db/db';


dotenv.config();
const { secret } = process.env;

const secretKey = process.env.SECRET_KEY;

const expirationTime = '10h';


// export const auth = () => {
//   const { secret } = process.env;
//   return jwt({ secret });
// };

async function queryUser(decoded) {
  const queryText = 'SELECT * FROM users WHERE id=$1';
  const { rows } = await pool.query(queryText, [decoded.id]);
  return rows;
}

export const tokenValidator = {

  async validateToken(req, res, next) {
    const { token } = req.headers;
    if (token) {
      jwt.verify(token, secret, async (err, decoded) => {
        if (err) return res.status(401).json({ status: 'error', error: 'Failed to authenticate token' });

        const rows = await queryUser(decoded);

        if (rows[0]) {
          req.user = rows[0];
          req.decoded = decoded;
          return next();
        }
        return res.status(401).json({ status: 'error', error: 'Not a valid user' });
      });
    } else {
      return res.status(400).json({ status: 'error', error: 'token not valid' });
    }
  },

  async validateAdminToken (req, res, next) {
    const { token } = req.headers;
    if (token) {
      jwt.verify(token, secret, async (err, decoded) => {
        if (err) return res.status(401).json({ status: 'error', error: 'Failed to authenticate token' });
        const rows = await queryUser(decoded);

        if (rows[0] && rows[0].is_admin) {
          req.user = rows[0];

          req.decoded = decoded;
          return next();
        }
        return res.status(401).json({ status: 'error', error: 'Not an admin user' });
      });
    } else {
      return res.status(400).json({ status: 'error', error: 'token not valid' });
    }
  },
};


export const generateToken = ({ id, email }) => {
  jwt.sign({ id, email }, secretKey,
    {
      expiresIn: expirationTime,
    });
};

export const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

// eslint-disable-next-line consistent-return
export const registerValidator = (req, res, next) => {
  const { error } = authenticateUser.signupValidator(req.body);
  if (error) return res.status(400).json({ status: 400, error: error.details[0].message });
  return next();
};

export const loginValidator = (req, res, next) => {
  const { error } = authenticateUser.UserLoginValidator(req.body);
  if (error) return res.status(400).json({ status: 400, error: error.details[0].message });
  return next();
};


export const validateTrip = (req, res, next) => {
  const { error } = authenticateTrip.tripValidator(req.body);
  if (error) return res.status(400).json({ status: 400, error: error.details[0].message });
  return next();
};
