'use strict';
var React = require('react/addons');

var TempController = React.createClass({
  render: function() {
    return (
      <li className="temp-controller auto-controller">
        <label id={this.props.id + 'Label'} htmlFor={this.props.id}>Temperature:</label>
        <input id={this.props.id} type="text" placeholder="Temperature" value={this.props.data.temperature} width="3"/>
      </li>
    )
  }
});

module.exports = TempController;