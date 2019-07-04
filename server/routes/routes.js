import express from 'express';
// import User from '../controllers/userController';
import User from '../models/db/controller/user';
import Bus from '../models/db/controller/bus';
import Trip from '../models/db/controller/trip';

const router = express.Router();

// router.post('/auth/signup', User.signUp);
router.post('/auth/signup', User.signUpUser);
router.post('/auth/signin', User.logInUser);

router.post('/bus', Bus.createBus);

router.post('/trips', Trip.createTrip);
router.get('/trips', Trip.getAllTrips);

export default router;
