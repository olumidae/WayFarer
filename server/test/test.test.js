import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import pool from '../models/db/db';

const { expect } = chai;
chai.use(chaiHttp);
let token = '';
let userToken = '';
const firstname = 'test';

describe('Register new user', () => {
  before((done) => {
    const deleteText = `DELETE FROM users WHERE first_name=${firstname}`;
    pool.query(deleteText, () => {
      done();
    }).catch(() => {
      console.log('');
    });
  });

  // it('Lets a new user register', (done) => {
  //   chai
  //     .request(app)
  //     .post('/api/v1/auth/signup')
  //     .send({
  //       first_name: 'test',
  //       last_name: 'user',
  //       email: 'testuser@gmail.com',
  //       password: 'password@123',
  //     }).end((err, res) => {
  //       expect(res.status).to.be.equal(201);
  //       expect(res.body.status).to.equal('success');
  //       expect(res.body).to.have.property('status');
  //       expect(res.body).to.have.property('data');
  //       expect(res.body.data).to.have.property('user_id');
  //       expect(res.body.data).to.have.property('token');
  //       expect(res.body.data).to.have.property('is_admin');
  //       expect(res.body).to.be.an('object');
  //       done();
  //     });
  // });

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
        userToken = res.body.data.token;
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
});

describe('Create new trip', () => {
  before((done) => {
    const queryText = 'DELETE FROM trip';
    pool.query(queryText, () => {
      const deleteText = 'DELETE FROM users';
      pool.query(deleteText, () => {
        const createAdmin = `INSERT INTO users (
             id, email, first_name, last_name, password, is_admin, is_loggedin
            ) VALUES
            ('2', 'oomitiran@gmail.com', 'Olumide', 'Omitiran', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'true', 'false')`;
        pool.query(createAdmin, () => {
          chai
            .request(app)
            .post('/api/v1/auth/signin')
            .send({
              email: 'oomitiran@gmail.com',
              password: 'password@123',
            }).end((err, res) => {
              expect(res.status).to.equal(200);
              token = res.body.data.token;
              done();
            });
        }).catch(() => {
          console.log('');
        });
      }).catch(() => {
        console.log('');
      });
    }).catch(() => {
      console.log('');
    });
  });

  it('lets Admin create new trip', (done) => {
    chai
      .request(app)
      .post('/api/v1/trips')
      .set('token', token)
      .send({
        bus_id: '1',
        origin: 'Lagos',
        destination: 'Warri',
        trip_date: '2019-07-02',
        fare: 5000,
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.status).to.have.equal('success');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.have.property('bus_id');
        expect(res.body.data).to.have.property('origin');
        expect(res.body.data).to.have.property('destination');
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
        is_admin: 'false',
        origin: 'Ibadan',
        destination: 'Warri',
        trip_date: '2019-05-02',
        fare: 5000,
      })
      .end((err, res) => {
        expect(res.status).be.equal(400);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('error');
        done();
      });
  });

  it('it lets both and user get all trip', (done) => {
    chai
      .request(app)
      .get('/api/v1/trips')
      .set('token', token)
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
});

describe('Users Booking Trips', () => {
  it('post booking success', (done) => {
    const user = {
      trip_id: '4',
      seat_number: '3',
    };
    chai.request(app)
      .post('/api/v1/bookings')
      .send(user)
      .set('token', userToken)
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
      trip_id: '4',
      seat_number: '3',
    };
    chai.request(app)
      .post('/api/v1/bookings')
      .send(user)
      .set('token', userToken)
      .end((err, res) => {
        expect(res.body.status).to.equal(409);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('error');
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

describe('User Get trips', () => {
  it('Get User bookings', (done) => {
    const user = {
      trip_id: '1',
      seat_number: '5',
    };
    chai.request(app)
      .get('/api/v1/bookings')
      .send(user)
      .set('token', userToken)
      .end((err, res) => {
        console.log(res.body);
        console.log(userToken);
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
    chai.request(app)
      .get('/api/v1/bookings')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('error');
        done();
      });
  });

  it('Get Admin bookings', (done) => {
    const user = {
      trip_id: '4',
      seat_number: '2',
    };
    chai.request(app)
      .get('/api/v1/bookings')
      .send(user)
      .set('token', token)
      .end((err, res) => {
        console.log('>>>>>>> admin body :', res.body);
        console.log(token);
        expect(res.status).to.be.equal(200);
        expect(res.body).be.an('object');
        expect(res.body.status).be.a('string');
        expect(res.body.data).be.an('array');
        done();
      });
  });
});
