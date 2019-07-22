"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../../app"));

var _db = _interopRequireDefault(require("../models/db/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var expect = _chai["default"].expect;

_chai["default"].use(_chaiHttp["default"]);

var admintoken = '';
var token = '';
describe('User Authentication', function () {
  before(function (done) {
    var createAdmin = "INSERT INTO users (\n        id, email, first_name, last_name, password, is_admin, is_loggedin\n        ) VALUES\n         ('2', 'oomitiran@gmail.com', 'Olumide', 'Omitiran', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'true', 'false')";
    var deleteBooking = 'DELETE FROM users';
    var deleteText = 'DELETE FROM users;';

    _db["default"].query(deleteBooking, function () {
      _db["default"].query(createAdmin, function () {
        done();
      })["catch"](function () {
        console.log('');
      });
    })["catch"](function () {
      console.log('');
    });
  });
  it('Lets a new user register', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/auth/signup').send({
      first_name: 'test',
      last_name: 'user',
      email: 'testuser@gmail.com',
      password: 'password@123'
    }).end(function (err, res) {
      expect(res.status).to.be.equal(201);
      expect(res.body.status).to.equal('success');
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('data');
      expect(res.body.data).to.have.property('user_id');
      expect(res.body.data).to.have.property('token');
      expect(res.body.data).to.have.property('is_admin');
      expect(res.body).to.be.an('object');
      done();
    });
  });
  it('is_admin property should be a boolean', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/auth/signup').send({
      isAdmin: 'admin'
    }).end(function (err, res) {
      expect(res.body.status).to.equal(400);
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('error');
      expect(res.body).to.be.an('object');
      done();
    });
  });
  it('All input fields are required', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/auth/signup').send({
      first_name: '',
      last_name: '',
      email: '',
      address: '',
      password: ''
    }).end(function (err, res) {
      expect(res.body.status).to.equal(400);
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('error');
      expect(res.body).to.be.an('object');
      done();
    });
  });
  it('Checks if email exists', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/auth/signup').set('Content-type', 'application/json').set('Accept', 'application/json').send({
      first_name: 'test',
      last_name: 'user',
      email: 'testuser@gmail.com',
      password: 'password@123'
    }).end(function (err, res) {
      expect(res.body.status).to.equal('error');
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('error');
      expect(res.body).to.be.an('object');
      done();
    });
  });
  it('Lets new and existing users login', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/auth/signin').send({
      email: 'testuser@gmail.com',
      password: 'password@123'
    }).end(function (err, res) {
      expect(res.status).to.be.equal(200);
      expect(res.body.status).to.equal('success');
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('data');
      expect(res.body.data).to.have.property('user_id');
      expect(res.body.data).to.have.property('token');
      expect(res.body).to.be.an('object');
      token = res.body.data.token;
      done();
    });
  });
  it('All fields are required', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/auth/signin').send({
      email: '',
      password: ''
    }).end(function (err, res) {
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('error');
      expect(res.body).to.be.an('object');
      done();
    });
  });
  it('Incorrect Password', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/auth/signin').send({
      email: 'testuser@gmail.com',
      password: 'secret'
    }).end(function (err, res) {
      expect(res.status).to.be.equal(401);
      expect(res.body.status).to.equal('error');
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('error');
      expect(res.body).to.be.an('object');
      done();
    });
  });
  it('Lets admin login', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/auth/signin').send({
      email: 'oomitiran@gmail.com',
      password: 'password@123'
    }).end(function (err, res) {
      expect(res.status).to.be.equal(200);
      expect(res.body.status).to.equal('success');
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('data');
      expect(res.body.data).to.have.property('user_id');
      expect(res.body.data).to.have.property('token');
      expect(res.body).to.be.an('object');
      admintoken = res.body.data.token;
      done();
    });
  });
  it('lets Admin create a bus', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/bus').set('token', admintoken).send({
      number_plate: 'FB030AAA',
      manufacturer: 'Toyota',
      model: 'Hiace',
      year: '2019',
      capacity: '18'
    }).end(function (err, res) {
      expect(res.body.status).to.have.equal('success');
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('data');
      expect(res.body).to.be.an('object');
      done();
    });
  });
  it('lets Admin create new trip', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/trips').set('token', admintoken).send({
      bus_id: '1',
      origin: 'Lagos',
      destination: 'Ondo',
      trip_date: '2019-07-02',
      fare: '4000'
    }).end(function (err, res) {
      expect(res.body.status).to.have.equal('success');
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('data');
      expect(res.body.data).to.have.property('fare');
      expect(res.body).to.be.an('object');
      done();
    });
  });
  it('lets ONLY admin create trip', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/trips').set('token', token).send({
      bus_id: '1',
      origin: 'Ibadan',
      destination: 'Warri',
      trip_date: '2019-05-02',
      fare: '6000'
    }).end(function (err, res) {
      expect(res.status).be.equal(403);
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('error');
      done();
    });
  });
  it('Admin Books a trip', function (done) {
    var user = {
      trip_id: '1',
      seat_number: '4'
    };

    _chai["default"].request(_app["default"]).post('/api/v1/bookings').send(user).set('token', admintoken).end(function (err, res) {
      expect(res.status).to.be.equal(201);
      expect(res.body).be.an('object');
      expect(res.body.status).be.a('string');
      expect(res.body.data).be.an('object');
      done();
    });
  });
  it('Get Admin bookings', function (done) {
    var user = {
      trip_id: '1',
      seat_number: '4'
    };

    _chai["default"].request(_app["default"]).get('/api/v1/bookings').send(user).set('token', admintoken).end(function (err, res) {
      expect(res.status).to.be.equal(200);
      expect(res.body).be.an('object');
      expect(res.body.status).be.a('string');
      expect(res.body.data).be.an('array');
      done();
    });
  });
  it('User Books a trip', function (done) {
    var user = {
      trip_id: '1',
      seat_number: '5'
    };

    _chai["default"].request(_app["default"]).post('/api/v1/bookings').send(user).set('token', token).end(function (err, res) {
      expect(res.status).to.be.equal(201);
      expect(res.body).be.an('object');
      expect(res.body.status).be.a('string');
      expect(res.body.data).be.an('object');
      done();
    });
  });
  it('doesnt allow seat number to booked twice', function (done) {
    var user = {
      trip_id: '1',
      seat_number: '5'
    };

    _chai["default"].request(_app["default"]).post('/api/v1/bookings').send(user).set('token', token).end(function (err, res) {
      expect(res.body.status).to.equal(409);
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('error');
      expect(res.body).to.be.an('object');
      done();
    });
  });
  it('Get User bookings', function (done) {
    var user = {
      trip_id: '1',
      seat_number: '5'
    };

    _chai["default"].request(_app["default"]).get('/api/v1/bookings').send(user).set('token', token).end(function (err, res) {
      expect(res.status).to.be.equal(200);
      expect(res.body).be.an('object');
      expect(res.body.status).be.a('string');
      expect(res.body.data).be.an('array');
      done();
    });
  });
  it('Requires Token To Get bookings', function (done) {
    var user = {
      trip_id: '1',
      seat_number: '5'
    };

    _chai["default"].request(_app["default"]).get('/api/v1/bookings').send(user).end(function (err, res) {
      expect(res.status).to.be.equal(400);
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('error');
      done();
    });
  });
  it('lets User delete a Booking', function (done) {
    _chai["default"].request(_app["default"])["delete"]('/api/v1/bookings/2').set('token', token).end(function (err, res) {
      expect(res.status).to.be.equal(200);
      expect(res.body).be.an('object');
      expect(res.body.status).be.a('string');
      expect(res.body.data).be.an('object');
      expect(res.body.status).to.equal('success');
      done();
    });
  });
  it('No booking found', function (done) {
    _chai["default"].request(_app["default"])["delete"]('/api/v1/bookings/0').set('token', token).end(function (err, res) {
      expect(res.status).to.be.equal(400);
      expect(res.body).be.an('object');
      done();
    });
  });
  it('it lets both and user get all trip', function (done) {
    _chai["default"].request(_app["default"]).get('/api/v1/trips').set('token', admintoken).send({// user_id: '1',
      // is_admin: 'true',
    }).end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('data');
      expect(res.body).to.be.an('object');
      done();
    });
  });
  it('let admin Cancels trip', function (done) {
    _chai["default"].request(_app["default"]).patch('/api/v1/trips/1').set('token', admintoken).end(function (err, res) {
      expect(res.status).to.be.equal(200);
      expect(res.body).be.an('object');
      expect(res.body.status).be.a('string');
      expect(res.body.data).be.an('object');
      done();
    });
  });
  it('revokes users rights to cancel trip', function (done) {
    _chai["default"].request(_app["default"]).patch('/api/v1/trips/1').set('token', token).end(function (err, res) {
      expect(res.status).to.be.equal(403);
      expect(res.body).be.an('object');
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('error');
      done();
    });
  });
  it('cannot cancel an already cancelled Not trip', function (done) {
    _chai["default"].request(_app["default"]).patch('/api/v1/trips/1').set('token', admintoken).end(function (err, res) {
      expect(res.status).to.equal(400);
      expect(res.body).be.an('object');
      expect(res.body.status).be.a('number');
      done();
    });
  });
});
//# sourceMappingURL=test.test.js.map