'use strict';

var request = require('then-request');
var React = require('react/addons');
var TempController = require('./tempController.jsx');
var ServerStatus = require('./ServerStatus.jsx')

var ControllerContainer = React.createClass({
  loadServerData: function() {
    var self = this;
    request('GET', this.props.url)
      .done(function(res) {
        var body = res.getBody();
        self.setState({data: JSON.parse(body)});
      });
  },
  getInitialState: function() {
    return {
      data: {
        status: 'offline',
        devices: {
          thermostat: {temperature: 0}
        }
      }
    }
  },
  componentDidMount: function() {
    this.loadServerData();
    setInterval(this.loadServerData, this.props.pollInterval);
  },
  render: function() {
    var data = this.state.data;
    var devices = data.devices;
    return (
      <div>
        <h1><ServerStatus status={data.status}/></h1>
        <div className="small-block-grid-3">
          <TempController id="controller1" data={devices.thermostat}/>
        </div>
      </div>
    )
  }
});

module.exports = ControllerContainer;
