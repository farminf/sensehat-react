var React = require('react');
var styles = require('../styles');

function MainContainer (props) {
  return (
    <div className="col-sm-12 text-center" >
      {props.children}
    </div>
  )
}

module.exports = MainContainer;