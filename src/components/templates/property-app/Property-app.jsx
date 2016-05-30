import './property-app.less';

import React from 'react/addons';

import AppActions from '../../../js/actions/app-actions';
import PropertyStore from '../../../js/stores/property-store';

import Header from '../../molecules/header/header.jsx';
import PropertyList from '../../organisms/property-list/property-list.jsx';

const PropertyApp = React.createClass({
  getInitialState: function() {
    console.log("getInitialState");
    return ({ properties: PropertyStore.getAll() });
  },

  componentDidMount: function() {
    console.log("componentDidMount");
    PropertyStore.addChangeListener(this._onChange);

    // fetch the initial list of properties from the server
    AppActions.getProperties();
  },

  componentWillUnmount: function() {
     console.log("componentWillUnmount");
    PropertyStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
     console.log("_onChange");
    this.setState({ properties: PropertyStore.getAll() });
  },

  render: function() {
    return (
      <div className="propertyApp">
        <Header headerText='OneRent' />
        <div className="main">
        <PropertyList properties={this.state.properties} />
        </div>
      </div>
    );
  }
});

export default PropertyApp;
