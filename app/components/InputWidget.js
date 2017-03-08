var React = require('react');
var styles = require('../styles');

function InputWidget(props) {
  return (
    
	    <div className="input-group">
	      <input type="text" className="form-control" placeholder={props.placeholder} />
	      <span className="input-group-btn">
	        <button className="btn btn-default" type="button">{props.button_name}</button>
	      </span>
	    </div>
	
  )
}

module.exports = InputWidget;

