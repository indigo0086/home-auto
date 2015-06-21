'use strict';

var React = require('react/addons');
var TempController = require('./tempController.jsx');

var ControllerContainer = React.createClass({
  render: function() {
    return (
      <div className="small-block-grid-3">
        <TempController id="controller1"/>
        <TempController id="controller2"/>
        <TempController id="controller3"/>
      </div>
    )
  }
});

module.exports = ControllerContainer;
