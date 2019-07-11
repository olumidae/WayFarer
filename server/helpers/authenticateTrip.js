import jo from 'joi';

const tripGetter = (trip) => {
  const tripGetterFormat = jo.object().keys({
    user_id: jo.string(),
    is_admin: jo.boolean().valid('true', 'false'),
  }).with('email', 'password');
  return jo.validate(trip, tripGetterFormat);
};

const tripValidator = (trip) => {
  const tripFormat = {
    bus_id: jo.string().required(),
    origin: jo.string().required(),
    destination: jo.string().required(),
    trip_date: jo.date().required(),
    fare: jo.number().required(),
    status: jo.string().valid('active', 'cancelled'),
  };
  return jo.validate(trip, tripFormat);
};

export default {
  tripValidator,
  tripGetter,
};
