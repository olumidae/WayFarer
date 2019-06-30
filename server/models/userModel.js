import bcrypt from 'bcrypt';
import uuid from 'uuid';

class User {
  constructor() {
    this.UserData = [];
  }

  signUp(info) {
    const newUser = {
      id: uuid.v4(),
      first_name: info.firstName,
      last_name: info.lastName,
      email: info.email,
      password: bcrypt.hashSync(info.password, 5),
      is_admin: false,
    };
    this.UserData.push(newUser);
    return newUser;
  }
}

export default new User();
