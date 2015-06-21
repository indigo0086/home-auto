'use strict';
var chai = require('chai');
var React = require('react/addons');
chai.should();

describe('TempController', function() {

  it('changes display and temperature when edited', function() {
    var TempController = require('./tempController.jsx');
    var utils = React.addons.TestUtils;

    var testData = {
      temperature: 12
    };
    var testControl = utils.renderIntoDocument(
      <TempController id="test" data={testData} />
    );

    var label = utils.findRenderedDOMComponentWithTag(testControl, 'label');
    label.props.id.should.equal('testLabel');
    label.props.htmlFor.should.equal('test');

    var textBox = utils.findRenderedDOMComponentWithTag(testControl, 'input');
    textBox.props.id.should.equal('test');
    textBox.props.value.should.equal(12);
  });
});
