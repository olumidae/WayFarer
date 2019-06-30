import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
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
  
  async logIn(req, res) {
    // Validating
    const { error } = authenticateUser.UserLoginValidator(req.body);

    if (error) {
      return res.status(400).json({ status: 400, error: error.details[0].message.slice(0, 70) });
    }
    const queryText = 'SELECT * FROM users WHERE email = $1';
    const updateText = 'UPDATE users SET isloggedin = true WHERE email=$1 RETURNING *';
    const { email, password } = req.body;


    try {
      // Select all user record where email is equal to the email in the db
      const { rows } = await db.query(queryText, [email]);


      // check if user exist in database
      if (!rows[0].email) {
        res.status(400).json({ status: 400, error: 'Email and/or password is incorrect' });
      }


      const comparePassword = bcrypt.compareSync(password, rows[0].password);

      if (!comparePassword) {
        return res.status(401).json({
          status: 401,
          error: 'Password incorrect',
        });
      }

      const { rows: rowsUpdate } = await db.query(updateText, [email]);

      const token = webtoken.sign({
        id: rows[0].id,
        email,
      }, secret);

      //rowsUpdate[0].isloggedin = true;
      return res
        .status(200)
        .json({
          status: 200,
          message: 'Logged In Successfully',
          data: {
            token,
            id: rows[0].id,
            firstName: rowsUpdate[0].firstname,
            lastName: rowsUpdate[0].lastname,
            email: rowsUpdate[0].email,
            address: rowsUpdate[0].address,
            status: rowsUpdate[0].status,
            isLoggedIn: rowsUpdate[0].isloggedin,
            isAdmin: rowsUpdate[0].isadmin,
          },
        });
    } catch (e) {
      return res.status(500).json({
        status: 500,
        error: 'Internal server error',
      });
    }
  }



};

export default User;
