import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import pool from '../models/db/db';

const { expect } = chai;
chai.use(chaiHttp);
let token = '';

describe('Create new trip', () => {
  before((done) => {
    const queryText = 'DELETE FROM trip WHERE destination=Warri';
    pool.query(queryText, () => {
      const deleteText = 'DELETE FROM users';
      pool.query(deleteText, () => {
        const createAdmin = `INSERT INTO users (
          id, email, first_name, last_name, password, is_admin, is_loggedin
        ) VALUES
        ('4447e3bc-b5a0-4624-bc92-d6be48c7c306', 'oomitiran@gmail.com', 'Olumide', 'Omitiran', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'true', 'false')`;
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
        bus_id: '17241280-a03d-11e9-8d34-91223ef6e4bf',
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
      .send({
        bus_id: '17241280-a03d-11e9-8d34-91223ef6e4bf',
        is_admin: 'false',
        origin: 'Ibadan',
        destination: 'Warri',
        trip_date: '2019-05-02',
        fare: 5000,
      }).end((err, res) => {
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
        // user_id: '9682bbdb-b8d2-456f-bb88-7248ff10ad91',
        // is_admin: 'true',
      })
      .end((err, res) => {
        // console.log(res);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('data');
        expect(res.body).to.be.an('object');
        done();
      });
  });

});
