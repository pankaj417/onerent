import AppConstants from '../constants/app-constants';
import AppDispatcher from '../dispatcher/app-dispatcher';
import PropertyApi from '../apis/property-api';

/* Actions here perform two purposes: to send the appropriate action on to the
dispatcher (which routes in on to the store), and to interface with the Api */
const AppActions = {
  getProperties: function() {
       //console.log('getProperties');
    AppDispatcher.handleViewAction({
      actionType: AppConstants.GET_PROPERTIES
    });

    PropertyApi.getAll( (properties) => {
      AppDispatcher.handleServerAction({
        actionType: AppConstants.GET_PROPERTIES_SUCCESS,
        properties: properties
      });
    }, (error) => {
      AppDispatcher.handleServerAction({
        actionType: AppConstants.GET_PROPERTIES_FAIL,
        error: error
      });
    });
  },
  searchProperties: function(searchObject) {
    //console.log('searchProperties');
    if(searchObject.searchText=='') {
      AppDispatcher.handleViewAction({
         actionType: AppConstants.GET_PROPERTIES
      });
    }
    if(searchObject.searchText!=='') {
      AppDispatcher.handleViewAction({
        actionType: AppConstants.SEARCH_PROPERTIES,
        searchText: searchObject
      });
   }
  }
};

export default AppActions;
