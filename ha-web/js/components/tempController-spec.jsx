'use strict';
var chai = require('chai');
var React = require('react/addons');
chai.should();

describe('TempController', function() {

  it('changes display and temperature when edited', function() {
    var TempController = require('./tempController.jsx');
    var utils = React.addons.TestUtils;

    var tempController = utils.renderIntoDocument(
      <TempController id="test"/>
    );

    var label = utils.findRenderedDOMComponentWithTag(tempController, 'label');
    label.props.id.should.equal('testLabel');
    label.props.htmlFor.should.equal('test');

    var textBox = utils.findRenderedDOMComponentWithTag(tempController, 'input');
    textBox.props.id.should.equal('test');
  })
});
