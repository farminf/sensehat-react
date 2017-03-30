var React = require('react');
var styles = require('../styles');

function ChartFrameContainer (props) {
  return (
    <div className="col-sm-6" >
      {props.children}
    </div>
  )
}

module.exports = ChartFrameContainer;