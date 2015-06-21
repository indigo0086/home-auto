var React = require('react');

var TempController = React.createClass({
  getInitialState: function() {
    return {temp: 0}
  },
  render: function() {
    return (
      <div className="small-4 column tempController">
        <label id={this.props.id + 'label'} htmlFor={this.props.id}>Temperature:</label>
        <input id={this.props.id} type="text" placeholder="Temperature" value={this.state.temp}/>
      </div>
    )
  }
});

module.exports = TempController;