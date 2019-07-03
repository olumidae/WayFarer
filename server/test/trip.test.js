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
});
