import './property-app.less';

import React from 'react/addons';

import AppActions from '../../../js/actions/app-actions';
import PropertyStore from '../../../js/stores/property-store';

import Header from '../../molecules/header/header.jsx';
import PropertyList from '../../organisms/property-list/property-list.jsx';


const PropertyApp = React.createClass({
  getInitialState: function() {
   // console.log("getInitialState");
    return ({ 
      properties: PropertyStore.getAll(),
      showLoader: PropertyStore.getLoader(),
      noRecord: PropertyStore.getNoRecord()
     });
  },

  componentDidMount: function() {
    //console.log("componentDidMount"+this.state.showLoader);
    PropertyStore.addChangeListener(this._onChange);
    
    // fetch the initial list of properties from the server
    AppActions.getProperties();
  },

  componentWillUnmount: function() {
     //console.log("componentWillUnmount");
    PropertyStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
     //console.log("_onChange loader before "+this.state.showLoader);
     //console.log("_onChange norecord before "+this.state.noRecord);
    this.setState({ 
      properties: PropertyStore.getAll(),
      showLoader: PropertyStore.getLoader(),
      noRecord: PropertyStore.getNoRecord()
    });
    //console.log("checking_onChange loader after "+this.state.showLoader);
   // console.log("checking_onChange norecord after "+this.state.noRecord);
  },

  render: function() {
    return (
      <div className="propertyApp">
        <Header headerText='OneRent' />
        <div className="main">
          <PropertyList noRecord={this.state.noRecord} showLoader={this.state.showLoader} properties={this.state.properties} />
        </div>
      </div>
    );
  }
});

export default PropertyApp;
