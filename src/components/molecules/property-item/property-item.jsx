import './property-item.less';

import React from 'react/addons';
import AppActions from '../../../js/actions/app-actions';
import Card from '../../molecules/card/card.jsx';
import PropertyImage from '../../molecules/property-image/property-image.jsx';

//import Button from '../../atoms/button/button.jsx';

const PropertyItem = React.createClass({

  propTypes: {
    property: React.PropTypes.object,
  },

  render: function() {
    let property = this.props.property;

    let defaultImage = this.props.property.defaultImage;
    let propertyImage = defaultImage ? this.props.property.defaultImage.medium : 'http://c3.staticflickr.com/8/7559/27093512850_a870ceb393.jpg;';
    let largeImage = defaultImage ? this.props.property.defaultImage.large : 'http://c3.staticflickr.com/8/7559/27093512850_a870ceb393.jpg;';
    let propertyBgImage = {
                backgroundImage     : "url("+propertyImage+")"
          };  
    return (
      <div >
       <a href={largeImage} target="_blank"><div className="property-image" style={propertyBgImage}></div></a>
        <div className='price strip'>Rent : ${property.targetRent}</div>
        <div className="h-seperator"></div>
        <div className='address strip'><a href={largeImage} target="_blank">{property.address}, {property.city}, {property.state}</a></div>
         <div className="h-seperator"></div>
        <div className='address strip'>{property.numberBedrooms} bed, {property.numberBathrooms} bath · {property.totalArea} sqft · {property.minimumCreditScore} credit</div>
      </div>
    );
  }
});

export default PropertyItem;
