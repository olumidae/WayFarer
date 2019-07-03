import uuid from 'uuid';

class Bus {
  constructor() {
    this.BusData = [];
  }

  createBus(info) {
    const newBus = {
      id: uuid.v1(),
      number_plate: info.numberPlate,
      manufacturer: info.manufacturer,
      model: info.model,
      year: info.year,
      capacity: parseInt(info.capacity),
    };
    this.BusData.push(newBus);
    return newBus;
  }
}

export default new Bus();
