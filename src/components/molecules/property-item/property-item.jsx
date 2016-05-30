import './property-item.less';

import React from 'react/addons';
import AppActions from '../../../js/actions/app-actions';
import Card from '../../molecules/card/card.jsx';

//import Button from '../../atoms/button/button.jsx';

const PropertyItem = React.createClass({

  propTypes: {
    property: React.PropTypes.object,
  },

  // handleCompleted: function() {
  //   let property = this.props.property;
  //   AppActions.updateTodo(property, { completed: !todo.completed });
  // },

  // handleDelete: function() {
  //   AppActions.removeTodo(this.props.todo);
  // },

  render: function() {
    let property = this.props.property;

    let defaultImage = this.props.property.defaultImage;
    let propertyImage = defaultImage ? this.props.property.defaultImage.medium : './images/comingsoon.png';
    let propertyBgImage = {
                backgroundImage     : "url("+propertyImage+")"
          };  
    //let cx = React.addons.classSet;
    // let componentClasses = cx({
    //   'todoItem': true,
    //   'completed': todo.completed,
    // });
    // let completedButtonClasses = cx({
    //   'completed-button': true,
    //   'complted': todo.completed,
    //   });
    return (
      <div >
      <a href="#"><div className="property-image" style={propertyBgImage}></div></a>
        <div className='price strip'>Rent : {property.targetRent}</div>
        <div className="h-seperator"></div>
        <div className='address strip'>{property.address}, {property.city}, {property.state}</div>
         <div className="h-seperator"></div>
        <div className='address strip'>{property.numberBedrooms} bed, {property.numberBathrooms} bath · {property.totalArea} sqft · {property.minimumCreditScore} credit</div>
      </div>
    );
  }
});

export default PropertyItem;
