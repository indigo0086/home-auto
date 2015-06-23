'use strict';

var React = require('react/addons');

var LightsController = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  render: function() {
    return (
      <li className='lights-controller auto-controller'>
        <label>{this.props.room.replace('-', ' ')} Lights</label>

        <div className="switch large radius">
          <input id={this.props.id} type="checkbox" checkedLink={this.props.checkedLink}/>
          <label htmlFor={this.props.id}></label>
        </div>
      </li>
    )
  }
});

module.exports = LightsController;