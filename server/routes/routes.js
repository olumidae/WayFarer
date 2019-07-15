import express from 'express';
import User from '../controllers/userController';
import { registerValidator, loginValidator, tokenValidator } from '../middlewares/auth';
import Bus from '../controllers/busController';
import Trip from '../controllers/tripController';


const router = express.Router();

router.post('/auth/signup', registerValidator, User.signUpUser);

router.post('/auth/signin', loginValidator, User.logInUser);

router.post('/bus', tokenValidator.validateAdminToken, Bus.createBus);

router.post('/trips', tokenValidator.validateAdminToken, Trip.createTrip);
router.get('/trips', tokenValidator.validateToken, Trip.getAllTrips);

export default router;
