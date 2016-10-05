import request from 'supertest';
import server from '../server';
import properties from './properties';

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
    return done();
  });
  afterEach( () => {
    app.close();
  });


  describe('GET /api/properties/', () => {
    let allProperties = [];
    it('responds with all of the properties', (done) => {
      request(app)
      .get('/api/properties/')
      .expect(200, done);
    }).timeout(10000);

  });


});

