import './no-property-found.less';

import React from 'react/addons';
import {Link} from 'react-router';

var NoPropertyBlock = React.createClass({

  render: function() {
    return (
      <div className={this.props.noRecord}>
	      <div className="no-record">
	       	No property found!
	      </div>
      </div>
    );
  }
});

export default NoPropertyBlock;
