'use strict';

var request = require('then-request');
var React = require('react/addons');
var TempController = require('./tempController.jsx');
var LightsController = require('./lightsController.jsx');
var ServerStatus = require('./ServerStatus.jsx');

var ControllerContainer = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  loadServerData: function() {
    var self = this;
    request('GET', this.props.url)
      .done(function(res) {
        if(res.statusCode !== 0)
        {
          var body = res.getBody();
          self.setState(JSON.parse(body));
          return;
        }
        self.setState({status: 'offline'});
      });
  },
  getInitialState: function() {
    return {
        thermostat: 0,
        kitchenLights: false,
        bathroomLights: false,
        livingRoomLights: true
    }
  },
  componentDidMount: function() {
    //this.loadServerData();
    setInterval(this.loadServerData, this.props.pollInterval);
  },
  componentDidUpdate(props, state) {

  },
  render: function() {
    return (
      <div>
        <h1><ServerStatus status={this.state.status}/></h1>

        <div className="small-block-grid-3">
          <TempController id="thermostat" valueLink={this.linkState('thermostat')}/>
          <LightsController id="kitchenLights" room="Kitchen" checkedLink={this.linkState('kitchenLights')}/>
          <LightsController id="bathroomLights" room="Bathroom" checkedLink={this.linkState('bathroomLights')}/>
          <LightsController id="livingRoomLights" room="Living-Room" checkedLink={this.linkState('livingRoomLights')}/>
        </div>
      </div>
    )
  }
});

module.exports = ControllerContainer;
