'use strict';
var React = require('react/addons');

var TempController = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  render: function() {
    return (
      <li className="temp-controller auto-controller">
        <label id={this.props.id + 'Label'} htmlFor={this.props.id}>Temperature:</label>
        <input id={this.props.id} type="text" placeholder="Temperature" valueLink={this.props.valueLink} width="3"/>
      </li>
    )
  }
});

module.exports = TempController;