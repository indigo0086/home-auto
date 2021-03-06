'use strict';

var React = require('react/addons');
var ControllerContainer = require('./components/controllerContainer.jsx');

function run(){
  React.render(
    <ControllerContainer url='http://localhost:8088/values' pollInterval={2000}/>,
    document.getElementById('controllerContainer')
  );
}

if(window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
