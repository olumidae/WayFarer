import jo from 'joi';

const UserLoginValidator = (user) => {
  const loginformat = jo.object().keys({
    email: jo.string().email().required(),
    password: jo.string().min(6).required(),
  }).with('email', 'password');
  return jo.validate(user, loginformat);
};

const pattern = /^[a-zA-Z0-9!@#$%&*]{3,25}$/;
const signupValidator = (user) => {
  const signupFormat = {
    first_name: jo.string().min(3).trim().required(),
    last_name: jo.string().min(3).required(),
    email: jo.string().email().required(),
    password: jo.string().regex(pattern).min(4).required(),
    is_admin: jo.boolean().valid('true', 'false'),
  };
  return jo.validate(user, signupFormat);
};


export default {
  signupValidator,
  UserLoginValidator,
};
