import './currency-format.less';

import React from 'react/addons';
var ReactGlobalize = require("react-globalize");
var Globalize = require("globalize");
var FormatCurrency = ReactGlobalize.FormatCurrency;
 
// Initialize Globalize and load your CLDR data
// See https://github.com/jquery/globalize for details on Globalize usage
 
Globalize.locale("en");

var CurrencyFormat = React.createClass({

  render: function() {
    return (
        <FormatCurrency currency="USD">{this.props.currency}</FormatCurrency>
    );
  }
});

export default CurrencyFormat;
