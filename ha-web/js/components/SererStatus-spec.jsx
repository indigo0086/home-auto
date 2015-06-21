'use strict';
var chai = require('chai');
var React = require('react/addons');
chai.should();

describe('ServerStatus', function() {
  var ServerStatus = require('./ServerStatus.jsx');
  var utils = React.addons.TestUtils;

  it('it is a success label when online', function() {
    var testControl = utils.renderIntoDocument(
      <ServerStatus status='online'/>
    );

    var span = utils.findRenderedDOMComponentWithTag(testControl, 'span');
    span.props.className.should.equal('success round label');
  });

  it('it is an alert label when offline', function() {
    var testControl = utils.renderIntoDocument(
      <ServerStatus status='offline'/>
    );

    var span = utils.findRenderedDOMComponentWithTag(testControl, 'span');
    span.props.className.should.equal('alert round label');
  });
});
