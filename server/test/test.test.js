import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import pool from '../models/db/db';

const { expect } = chai;
chai.use(chaiHttp);
let admintoken = '';
let token = '';
describe('User Authentication', () => {
  before((done) => {
    const createAdmin = `INSERT INTO users (
        id, email, first_name, last_name, password, is_admin, is_loggedin
        ) VALUES
         ('2', 'oomitiran@gmail.com', 'Olumide', 'Omitiran', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'true', 'false')`;
    const deleteBooking = 'DELETE FROM users';
    const deleteText = 'DELETE FROM users;';
    pool.query(deleteBooking, () => {
      pool.query(createAdmin, () => {
        done();
      }).catch(() => {
        console.log('');
      });
    }).catch(() => {
      console.log('');
    });
  });

  it('Lets a new user register', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send({
        first_name: 'test',
        last_name: 'user',
        email: 'testuser@gmail.com',
        password: 'password@123',
      }).end((err, res) => {
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

  it('is_admin property should be a boolean', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({

        isAdmin: 'admin',
      })
      .end((err, res) => {
        expect(res.body.status).to.equal(400);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('error');
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('All input fields are required', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        password: '',
      })
      .end((err, res) => {
        expect(res.body.status).to.equal(400);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('error');
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Checks if email exists', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Content-type', 'application/json')
      .set('Accept', 'application/json')
      .send({
        first_name: 'test',
        last_name: 'user',
        email: 'testuser@gmail.com',
        password: 'password@123',
      })
      .end((err, res) => {
        expect(res.body.status).to.equal('error');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('error');
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Lets new and existing users login', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'testuser@gmail.com',
        password: 'password@123',
      })
      .end((err, res) => {
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

  it('All fields are required', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: '',
        password: '',
      })
      .end((err, res) => {
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('error');
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Incorrect Password', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'testuser@gmail.com',
        password: 'secret',
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(401);
        expect(res.body.status).to.equal('error');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('error');
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Lets admin login', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'oomitiran@gmail.com',
        password: 'password@123',
      })
      .end((err, res) => {
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

  it('lets Admin create a bus', (done) => {
    chai
      .request(app)
      .post('/api/v1/bus')
      .set('token', admintoken)
      .send({
        number_plate: 'FB030AAA',
        manufacturer: 'Toyota',
        model: 'Hiace',
        year: '2019',
        capacity: '18',
      })
      .end((err, res) => {
        expect(res.body.status).to.have.equal('success');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('data');
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('lets Admin create new trip', (done) => {
    chai
      .request(app)
      .post('/api/v1/trips')
      .set('token', admintoken)
      .send({
        bus_id: '1',
        origin: 'Lagos',
        destination: 'Ondo',
        trip_date: '2019-07-02',
        fare: '4000',
      })
      .end((err, res) => {
        expect(res.body.status).to.have.equal('success');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.have.property('fare');
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('lets ONLY admin create trip', (done) => {
    chai
      .request(app)
      .post('/api/v1/trips')
      .set('token', token)
      .send({
        bus_id: '1',
        origin: 'Ibadan',
        destination: 'Warri',
        trip_date: '2019-05-02',
        fare: '6000',
      })
      .end((err, res) => {
        expect(res.status).be.equal(403);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('error');
        done();
      });
  });

  it('Admin Books a trip', (done) => {
    const user = {
      trip_id: '1',
      seat_number: '4',
    };
    chai
      .request(app)
      .post('/api/v1/bookings')
      .send(user)
      .set('token', admintoken)
      .end((err, res) => {
        expect(res.status).to.be.equal(201);
        expect(res.body).be.an('object');
        expect(res.body.status).be.a('string');
        expect(res.body.data).be.an('object');
        done();
      });
  });

  it('Get Admin bookings', (done) => {
    const user = {
      trip_id: '1',
      seat_number: '4',
    };
    chai
      .request(app)
      .get('/api/v1/bookings')
      .send(user)
      .set('token', admintoken)
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).be.an('object');
        expect(res.body.status).be.a('string');
        expect(res.body.data).be.an('array');
        done();
      });
  });

  it('User Books a trip', (done) => {
    const user = {
      trip_id: '1',
      seat_number: '5',
    };
    chai
      .request(app)
      .post('/api/v1/bookings')
      .send(user)
      .set('token', token)
      .end((err, res) => {
        expect(res.status).to.be.equal(201);
        expect(res.body).be.an('object');
        expect(res.body.status).be.a('string');
        expect(res.body.data).be.an('object');
        done();
      });
  });

  it('doesnt allow seat number to booked twice', (done) => {
    const user = {
      trip_id: '1',
      seat_number: '5',
    };
    chai
      .request(app)
      .post('/api/v1/bookings')
      .send(user)
      .set('token', token)
      .end((err, res) => {
        expect(res.body.status).to.equal(409);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('error');
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Get User bookings', (done) => {
    const user = {
      trip_id: '1',
      seat_number: '5',
    };
    chai
      .request(app)
      .get('/api/v1/bookings')
      .send(user)
      .set('token', token)
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).be.an('object');
        expect(res.body.status).be.a('string');
        expect(res.body.data).be.an('array');
        done();
      });
  });

  it('Requires Token To Get bookings', (done) => {
    const user = {
      trip_id: '1',
      seat_number: '5',
    };
    chai
      .request(app)
      .get('/api/v1/bookings')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('error');
        done();
      });
  });

  it('lets User delete a Booking', (done) => {
    chai.request(app)
      .delete('/api/v1/bookings/2')
      .set('token', token)
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).be.an('object');
        expect(res.body.status).be.a('string');
        expect(res.body.data).be.an('object');
        expect(res.body.status).to.equal('success');
        done();
      });
  });

  it('No booking found', (done) => {
    chai.request(app)
      .delete('/api/v1/bookings/0')
      .set('token', token)
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body).be.an('object');
        done();
      });
  });

  it('it lets both and user get all trip', (done) => {
    chai
      .request(app)
      .get('/api/v1/trips')
      .set('token', admintoken)
      .send({
        // user_id: '1',
        // is_admin: 'true',
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('data');
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('let admin Cancels trip', (done) => {
    chai
      .request(app)
      .patch('/api/v1/trips/1')
      .set('token', admintoken)
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).be.an('object');
        expect(res.body.status).be.a('string');
        expect(res.body.data).be.an('object');
        done();
      });
  });

  it('revokes users rights to cancel trip', (done) => {
    chai
      .request(app)
      .patch('/api/v1/trips/1')
      .set('token', token)
      .end((err, res) => {
        expect(res.status).to.be.equal(403);
        expect(res.body).be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('error');
        done();
      });
  });

  it('cannot cancel an already cancelled Not trip', (done) => {
    chai.request(app)
      .patch('/api/v1/trips/1')
      .set('token', admintoken)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body).be.an('object');
        expect(res.body.status).be.a('number');
        done();
      });
  });

});