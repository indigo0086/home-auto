var React = require('react/addons');

module.exports = React.createClass({
  render: function() {
    var status = this.props.status;
    var className;
    if(status === 'online') {
       className='success round label';
    }
    else {
      className='alert round label'
    }

    return (
      <span className={className}>Server is currently {status}</span>
    )
  }
});