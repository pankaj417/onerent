import AppActions from './app-actions';
import AppDispatcher from '../dispatcher/app-dispatcher';
import PropertyApi from '../apis/property-api';

describe('AppActions', () => {

  beforeEach(() => {
    sinon.stub(AppDispatcher, 'handleViewAction');
    sinon.stub(PropertyApi);
  });

  afterEach(() => {
    AppDispatcher.handleViewAction.restore();
    for (var key in PropertyApi) {
      if (PropertyApi.hasOwnProperty(key)) {
        PropertyApi[key].restore();
      }
    }
  });
  describe('#getProperties', () => {
    it('Sends an action to the Dispatcher', () => {
      AppActions.getProperties();

      expect(AppDispatcher.handleViewAction).to.have.been.called;
    });

    it('Calls on the PropertyApi to get the properties', () => {
      AppActions.getProperties();

      expect(PropertyApi.getAll).to.have.been.called;
    });
  });

});