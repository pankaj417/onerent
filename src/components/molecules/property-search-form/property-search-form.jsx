import './property-search-form.less';

import React from 'react/addons';

import AppActions from '../../../js/actions/app-actions';

import InputText from '../../atoms/input-text/input-text.jsx';
import InputSubmit from '../../atoms/input-submit/input-submit.jsx';

const PropertySearchForm = React.createClass({
  getInitialState: function() {
    return {
      searchText: this.props.searchText || '',
    };
  },

  handleSubmit: function(event) {
    event.preventDefault();
    AppActions.searchProperties({
      searchText: this.state.searchText
    });
  },

  _onChange: function(event) {
    this.setState({
      searchText: event.target.value
    });
  },

  // generateUUID: function() {
  //   var d = new Date().getTime();
  //   var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  //       var r = (d + Math.random()*16)%16 | 0;
  //       d = Math.floor(d/16);
  //       return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  //   });
  //   return uuid;
  // },

  render: function() {
    return (
      <div className="propertyForm">
        <form action="" onSubmit={this.handleSubmit}>
        <span className="filter">Filter</span>
          <InputText name="searchText" value={this.state.searchText}
            placeholder="What do you want in your new home. eg - Hardwood floor, Dishwasher, etc." onChange={this._onChange} />
          <InputSubmit className="input-submit-text" value="Search" />
        </form>
      </div>
    );
  }
});

export default PropertySearchForm;
