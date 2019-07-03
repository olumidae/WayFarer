import jo from 'joi';

const busValidator = (bus) => {
  const busFormat = {
    number_plate: jo.string().required(),
    manufacturer: jo.string().required(),
    model: jo.string().required(),
    year: jo.string().required(),
    capacity: jo.number().required(),
  };
  return jo.validate(bus, busFormat);
};

export default busValidator;
