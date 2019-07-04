import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

const { expect } = chai;
chai.use(chaiHttp);

describe('Register new user', () => {
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
});

describe('Login', () => {
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
