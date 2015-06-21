var React = require('react');
console.log(React);
var ControllerContainer = require('./components/controllerContainer.jsx');

React.render(
  <ControllerContainer source='monitor.json'/>,
  document.getElementById('controllerContainer')
);
