var React = require('react');

var TempController = React.createClass({
  render: function () {
    return (
      <div class="tempController">
        <label>Temperature:</label>
        <input type="text" placeholder="Temperature"/>
      </div>
    )
  }
});

module.exports = TempController;