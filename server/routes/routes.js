import express from 'express';
import User from '../controllers/userController';
import { registerValidator, loginValidator, tokenValidator, booktripValidate } from '../middlewares/auth';
import Bus from '../controllers/busController';
import Trip from '../controllers/tripController';
import Book from '../controllers/bookController';
import pool from '../models/db/db';


const router = express.Router();

router.post('/auth/signup', registerValidator, User.signUpUser);
router.post('/auth/signin', loginValidator, User.logInUser);
router.post('/bus', tokenValidator.validateAdminToken, Bus.createBus);
router.post('/trips', tokenValidator.validateAdminToken, Trip.createTrip);
router.get('/trips', tokenValidator.validateToken, Trip.getAllTrips);
router.post('/bookings', tokenValidator.validateToken, booktripValidate, Book.makeBooking);
router.get('/bookings', tokenValidator.validateToken, booktripValidate, Book.getbookings);
router.delete('/bookings/:bookingId', tokenValidator.validateToken, Book.deleteBooking);


export default router;
