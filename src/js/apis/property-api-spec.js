import PropertyApi from './property-api';
import jQuery from 'jquery';

describe('Client-Side Property API', () => {
  let server, successFn, failureFn;

  beforeEach( () => {
    failureFn = sinon.spy();
    successFn = sinon.spy();
  });

  before(() => {
    server = sinon.fakeServer.create();
  });

  after(() => {
    server.restore();
  });

  describe ('#getAll', () => {

    // create a switch to allow get all request to succeed or fail
    let requestSuccess = true;

    before(() => {
      server.respondWith("GET", "/api/properties/", (req) => {
          if (requestSuccess) {
            req.respond(200, {}, JSON.stringify([todo]));
          } else {
            req.respond(500, {}, '');
          }
      });
    });

    it('sends a GET request', () => {
      sinon.stub(jQuery, 'ajax');
      PropertyApi.getAll(successFn, failureFn);

      expect(jQuery.ajax).to.have.been.calledWithMatch({
        url: '/api/properties/',
        type: 'GET',
        dataType: 'json',
      });

      jQuery.ajax.restore();
    });
  });
});