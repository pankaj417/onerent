import './input-submit.less';

import React from 'react/addons';

const InputSubmit = React.createClass({

  propTypes: {
    value: React.PropTypes.string,
    className: React.PropTypes.string //input-submit
  },

  render: function() {
    return (
      <input type='submit' className={this.props.className} value={this.props.value} />
    );
  }
});

export default InputSubmit;
