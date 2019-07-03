import uuid from 'uuid';
import moment from 'moment';

class Trip {
  constructor() {
    this.tripData = [];
  }

  createTrip(info) {
    const newTrip = {
      id: uuid.v1(),
      origin: info.origin,
      destination: info.destination,
      trip_date: moment().format('LLL'),
      fare: parseFloat(info.fare),
      status: 'active',
    };
    this.tripData.push(newTrip);
    return newTrip;
  }
}

export default new Trip();
