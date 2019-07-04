import express from 'express';
import User from '../controllers/userController';
import Bus from '../controllers/busController';
import Trip from '../controllers/tripController';

const router = express.Router();

router.post('/auth/signup', User.signUpUser);

router.post('/auth/signin', User.logInUser);

router.post('/bus', Bus.createBus);

router.post('/trips', Trip.createTrip);
router.get('/trips', Trip.getAllTrips);

export default router;
