import AppDispatcher from '../dispatcher/app-dispatcher';
import AppConstants from '../constants/app-constants';
import {EventEmitter} from 'events';
// polyfill since 6to5 does not currently support Object.assign
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

let _properties = {};
let _loader = 'show';
let _noRecord = 'hide';
let _filteredProperties = {};

// Our client-side CRUD methods for Todos:
function create (property) {
   //console.log("create");
  property.synced = false;
  _properties[property.id] = property;
}

function createAll (properties) {
   //console.log("createAll");
  _properties = {};
  properties.forEach( (property) => {
     property.synced = true;
    _properties[property.id] = property;
  });
  _loader = 'hide';
  resetFilter();
}
function resetFilter() {
  _filteredProperties=_properties;
  setNoRecord();
}
function setNoRecord() {
  //console.log("property Count" + Object.keys(_filteredProperties).length);
  if(Object.keys(_filteredProperties).length==0 && _loader=="hide") {
     _noRecord = 'show';
    //console.log("I am inside Property Count 0 : " + Object.keys(_filteredProperties).length) 
  } else {
     _noRecord = 'hide';
  }
}
function filterProperties (searchObject) {
  //console.log("searchObject ");
  //console.log(searchObject);
  //console.log(_properties);
  _filteredProperties = {};
    let searchTextArray = [];
    let propertyLabels = [];
    let defaultImage ='';
    let imageLabels ='';
    let foundProperty =false;
    let keywordMatched = '';
    let searchText = searchObject.searchText.toLowerCase();
    if(searchText !='') {
      searchText = searchText.replace(/,/g , '').replace(/^\s\s*/, '').replace(/\s\s*$/, '').replace(/[\s,]+/g, ',');
      searchTextArray=searchText.split(',');
      //console.log(searchTextArray);
      Object.keys(_properties).forEach( (property) => {
          propertyLabels = [];
          foundProperty =false;
          //console.log("inside for forEach - ");
          //console.log(property);
          defaultImage = _properties[property].defaultImage;
          propertyLabels = defaultImage ? defaultImage.labels : '';
          if(propertyLabels!='') {
            searchTextArray.forEach((searchKeyword) => {
              //console.log(searchKeyword);
              keywordMatched = Object.keys(propertyLabels).indexOf(searchKeyword);

              if (keywordMatched>0) {
                  //console.log("I am in seachLabel");
                    _filteredProperties[property] = _properties[property];
                     foundProperty = true;
                     //break;
                   }
             });
              // if(foundProperty===true) {
              //    continue;
              //  }
          }

        });
     }
     setNoRecord();
     //console.log("after filter apply");
     //console.log(_filteredProperties);
}

function destroy (id) {
   //console.log("destroy");
  delete _properties[id];
}

function update (id, props, synced) {
  //console.log("update");
  let property = _properties[id];
  /* This is a simplistic way of tracking whether Todo's state is currently
  synced with the server and should probably be replaced with a more
  sophisticated method for production, but for our demo purposes it's fine */
  _properties[id] = assign(property, props, { synced: synced });
}

/* The store only needs to allow components to register/unregister listeners,
and emit change events. Since we have just one top-level component managing
state for all components interested in Todos, the only other method necessary
is one for getting all the Todos */
const PropertyStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    //console.log('PropertyStore Change Event Emitted');
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
     //console.log('PropertyStore addChangeListener');
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
     //console.log('PropertyStore CremoveChangeListener');
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAll: function() {
    // console.log("function : getAll");
    // console.log("_properties");
    // console.log(_properties);
    // console.log("_filteredProperties");
    // console.log(_filteredProperties);
    return _filteredProperties;
  },
  getLoader: function() {
    return  _loader;
  },
  getNoRecord: function () {
     return  _noRecord;
  }
});

/* Register with the App Dispatcher, and declare how the store handles various
actions. This should be the sole way in which a client side model gets updated */
AppDispatcher.register( (payload) => {
  let action = payload.action;

  switch(action.actionType) {

     case AppConstants.GET_PROPERTIES:
     //console.log("GET_PROPERTIES");

      resetFilter();
      PropertyStore.emitChange();
      break;

    case AppConstants.GET_PROPERTIES_SUCCESS:
    //console.log("GET_PROPERTIES_SUCCESS");

      createAll(action.properties);
      PropertyStore.emitChange();
      break;

    case AppConstants.SEARCH_PROPERTIES:
    //console.log("SEARCH_PROPERTIES");
      filterProperties(action.searchText);
      PropertyStore.emitChange();
    break;  

    default:
      // no op
  }
});

export default PropertyStore;
