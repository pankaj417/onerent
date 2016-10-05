import './loader.less';

import React from 'react/addons';
import {Link} from 'react-router';

var Loader = React.createClass({

  render: function() {
    return (
      <div className={this.props.showLoader}>
      <div className="blink">
       <p className="saving">Loading<span>.</span><span>.</span><span>.</span></p>
      </div>
      </div>
    );
  }
});

export default Loader;
