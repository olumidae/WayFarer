import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

const secretKey = process.env.SECRET_KEY;

const expirationTime = 86400;


const auth = () => {
  const { secret } = process.env;
  return jwt({ secret });
};

const generateToken = ({ id, isadmin }) => jwt.sign({ id, isadmin }, secretKey,
  {
    expiresIn: expirationTime,
  });


const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export default { auth, hashPassword, generateToken };
