import React from 'react/addons';
import ImageZoomer from '../../atoms/image-zoomer/image-zoomer.jsx';
var PropertyImage = React.createClass({
  render: function() {
    return (
      <ImageZoomer 
        src={this.props.thumbImage}
        zoomSrc={this.props.bigImage}/>
    )
  }
});
export default PropertyImage;