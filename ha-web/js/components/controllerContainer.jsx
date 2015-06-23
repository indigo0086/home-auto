'use strict';

var request = require('then-request');
var React = require('react/addons');
var TempController = require('./tempController.jsx');
var LightsController = require('./lightsController.jsx');
var ServerStatus = require('./ServerStatus.jsx');

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
          thermostat: {temperature: 0},
          lights: {
            kitchen: true,
            bathroom: false,
            livingRoom: true
          }
        }
      }
    }
  },
  componentDidMount: function() {
    this.loadServerData();
    //setInterval(this.loadServerData, this.props.pollInterval);
  },
  render: function() {
    var data = this.state.data;
    var devices = data.devices;
    return (
      <div>
        <h1><ServerStatus status={data.status}/></h1>

        <div className="small-block-grid-3">
          <TempController id="thermostat" data={devices.thermostat}/>
          <LightsController id="kitchenLights" room="Kitchen" status={devices.kitchenLights}/>
          <LightsController id="bathroomLights" room="Bathroom" status={devices.bathroomLights}/>
          <LightsController id="livingRoomLights" room="Living-Room" status={devices.livingRoomLights}/>
        </div>
      </div>
    )
  }
});

module.exports = ControllerContainer;
