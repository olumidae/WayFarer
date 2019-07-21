import express from 'express';
import User from '../controllers/userController';
import { registerValidator, loginValidator, tokenValidator, booktripValidate, editBookedSeatValidate, validateTrip } from '../middlewares/auth';
import Bus from '../controllers/busController';
import Trip from '../controllers/tripController';
import Book from '../controllers/bookController';


const router = express.Router();

router.post('/auth/signup', registerValidator, User.signUpUser);
router.post('/auth/signin', loginValidator, User.logInUser);
router.post('/bus', tokenValidator.validateAdminToken, Bus.createBus);
router.post('/trips', tokenValidator.validateAdminToken, validateTrip, Trip.createTrip);
router.get('/trips', tokenValidator.validateToken, Trip.getAllTrips);
router.post('/bookings', tokenValidator.validateToken, booktripValidate, Book.makeBooking);
router.get('/bookings', tokenValidator.validateToken, Book.getbookings);
router.delete('/bookings/:bookingId', tokenValidator.validateToken, Book.deleteBooking);
router.patch('/trips/:tripId', tokenValidator.validateAdminToken, Trip.cancelTrip);
router.patch('/bookings/:bookingId', tokenValidator.validateToken, editBookedSeatValidate, Book.changeSeats);
export default router;
