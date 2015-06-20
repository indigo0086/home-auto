var React = require('react');
console.log(React);
var TempController = require('./components/tempController.jsx');

React.render(
  <TempController />,
  document.getElementById('controllerCotainer')
);

