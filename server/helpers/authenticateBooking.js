import jo from 'joi';

const bookingValidator = (book) => {
  const bookingFormat = {
    trip_id: jo.string().trim().required(),
    user_id: jo.string(),
    seat_number: jo.number().required(),
    createdOn: jo.date(),
  };
  return jo.validate(book, bookingFormat);
};


export default { bookingValidator }
