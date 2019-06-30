import express from 'express';
// import User from '../controllers/userController';
import User from '../models/db/controller/user';

const router = express.Router();

// router.post('/auth/signup', User.signUp);
router.post('/auth/signup', User.signUpUser);


export default router;
