import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import pool from '../models/db/db';

const { expect } = chai;
chai.use(chaiHttp);
let token = '';
let userToken = '';
const admintoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJvb21pdGlyYW5AZ21haWwuY29tIiwiaWF0IjoxNTYzMzY4MTczLCJleHAiOjE1NjcwNTQ1NzN9.IYf7ecqShTslEjj4Uqg_VWumSSUAwWK2oYojwOHauto';
const usertoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtaWNoYWVsc21pdGhAZ21haWwuY29tIiwiaWF0IjoxNTYzMzY4MDYzLCJleHAiOjE1NjcwNTQ0NjN9.6byX8D91rqYiXBOoVMlkEe60_bIA_bRnDmxiNF0xkIc';

describe('Register new user', () => {
  before((done) => {
    const deleteText = `DELETE FROM users WHERE first_name=test`;
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
  // before((done) => {
  //   const queryText = 'DELETE FROM trip';
  //   pool.query(queryText, () => {
  //     const deleteText = 'DELETE FROM users';
  //     pool.query(deleteText, () => {
  //       const createAdmin = `INSERT INTO users (
  //            id, email, first_name, last_name, password, is_admin, is_loggedin
  //           ) VALUES
  //           ('2', 'oomitiran@gmail.com', 'Olumide', 'Omitiran', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'true', 'false')`;
  //       pool.query(createAdmin, () => {
  //         chai
  //           .request(app)
  //           .post('/api/v1/auth/signin')
  //           .send({
  //             email: 'oomitiran@gmail.com',
  //             password: 'password@123',
  //           }).end((err, res) => {
  //             expect(res.status).to.equal(200);
  //             token = res.body.data.token;
  //             done();
  //           });
  //       }).catch(() => {
  //         console.log('');
  //       });
  //     }).catch(() => {
  //       console.log('');
  //     });
  //   }).catch(() => {
  //     console.log('');
  //   });
  // });

  it('lets Admin create new trip', (done) => {
    chai
      .request(app)
      .post('/api/v1/trips')
      .set('token', admintoken)
      .send({
        bus_id: '1',
        origin: 'Lagos',
        destination: 'Saki',
        trip_date: '2019-07-02',
        fare: '4000',
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
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
      .set('token', usertoken)
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

  it('it lets both and user get all trip', (done) => {
    chai
      .request(app)
      .get('/api/v1/trips')
      .set('token', usertoken)
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
  it('Create booked trip', (done) => {
    const user = {
      trip_id: '4',
      seat_number: '4',
    };
    chai.request(app)
      .post('/api/v1/bookings')
      .send(user)
      .set('token', usertoken)
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
      seat_number: '4',
    };
    chai.request(app)
      .post('/api/v1/bookings')
      .send(user)
      .set('token', usertoken)
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
      .set('token', usertoken)
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
      .set('token', admintoken)
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).be.an('object');
        expect(res.body.status).be.a('string');
        expect(res.body.data).be.an('array');
        done();
      });
  });
});

describe('Delete Book Trips', () => {
  it('lets User delete a book trip', (done) => {
    chai.request(app)
      .delete('/api/v1/bookings/36')
      .set('token', usertoken)
      .end((err, res) => {
        console.log(res.body);
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
      .set('token', userToken)
      .end((err, res) => {
        expect(res.status).to.be.equal(404);
        expect(res.body).be.an('object');
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
      .set('token', usertoken)
      .end((err, res) => {
        expect(res.status).to.be.equal(403);
        expect(res.body).be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('error');
        done();
      });
  });

  it('cannot cancel an already candelled Not trip', (done) => {
    chai.request(app)
      .patch('/api/v1/trips/10y')
      .set('token', admintoken)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body).be.an('object');
        expect(res.body.status).be.a('number');
        expect(res.body.error).to.equal('Not an active trip');
        done();
      });
  });
});
