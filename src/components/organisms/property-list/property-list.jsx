import './property-list.less';

import React from 'react/addons';

import Card from '../../molecules/card/card.jsx';
import PropertyItem from '../../molecules/property-item/property-item.jsx';
import PropertySearchForm from '../../molecules/property-search-form/property-search-form.jsx';
import Loader from '../../molecules/loader/loader.jsx';
import NoRecord from '../../molecules/no-property-found/no-property-found.jsx';

var CSSTransitionGroup = React.addons.CSSTransitionGroup;

const PropertyList = React.createClass({

  propTypes: {
     properties: React.PropTypes.object,
     showLoader : React.PropTypes.string
   },

  getDefaultProps: function() {
     return {
       properties: {},
       showLoader : ''
     };
   },

  render: function() {
    let properties = Object.keys(this.props.properties).map(property_id => {
      let property = this.props.properties[property_id];
      return (
        <div className="property-block" key={property.id}>
        <Card>
          <PropertyItem property={property} />
        </Card>
        </div>
      );
    });
    return (
    <div>
      <CSSTransitionGroup transitionName="card" className="todoList" component="div">
        <PropertySearchForm />
        <Loader showLoader={this.props.showLoader}/>
        <NoRecord noRecord={this.props.noRecord}/>
        <div className="property-container">
        {properties}
        </div>
      </CSSTransitionGroup>

      </div>
    );

  }
});

export default PropertyList;
