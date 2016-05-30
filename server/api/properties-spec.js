import request from 'supertest';
import server from '../server';
import todos from './properties';

var app;

// fn for generating IDs, since our API requires UUIDs to be used
function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
}

describe('Properties API /api/properties', () => {
  beforeEach((done) => {
    // listen on a different port from out app, so test watch mode doesn't conflict
    app = server.listen(9000);
  });

  afterEach( () => {
    app.close();
  });

  describe('GET /api/properties/', () => {
    it('responds with status 200 when Todo is valid', (done) => {
      request(app)
        .get('/api/properties/')
        .send({
          id: generateUUID(),
          completed: false,
          name: 'foo'
        })
        .expect(200, done);
    });

    // it('responds with a status 400 when required fields are missing', (done) => {
    //   request(app)
    //     .post('/api/properties/')
    //     .send({
    //       id: generateUUID()
    //     })
    //     .expect(400, done);
    // });

    // it('responds with a status 400 when id is not valid', (done) => {
    //   request(app)
    //     .post('/api/properties/')
    //     .send({
    //       id: '1',
    //       name: 'foo',
    //       completed: false
    //     })
    //     .expect(400, done);
    // });
  });


});

