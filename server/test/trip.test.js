import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

const { expect } = chai;
chai.use(chaiHttp);

describe('Create new trip', () => {
  it('lets Admin create new trip', (done) => {
    chai
      .request(app)
      .post('/api/v1/trips')
      .send({
        user_id: 'a1804758-c0ab-471e-9c06-75f8031a7e75',
        bus_id: '7876ecf0-9c74-11e9-a359-8921eecedef0',
        is_admin: 'true',
        origin: 'Lagos',
        destination: 'Warri',
        trip_date: '2019-04-02',
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
        user_id: '13a2122e-7247-458e-996b-8b9bd0df2929',
        bus_id: '7876ecf0-9c74-11e9-a359-8921eecedef0',
        is_admin: 'false',
        origin: 'Lagos',
        destination: 'Warri',
        trip_date: '2019-04-02',
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
      .send({
        user_id: 'a1804758-c0ab-471e-9c06-75f8031a7e75',
        is_admin: 'true',
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
