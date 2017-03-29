var React = require('react');
var styles = require('../styles');
var SensehatHelper = require('../utils/SensehatHelper')


function InputWidget(props) {
	this.state = {
		inputValue : ""
	}
	updateInputValue = function(evt) {
	    
	      this.state.inputValue=  evt.target.value
	    
  	}
	handleClick = function () {
	    console.log(this.state.inputValue)
	    SensehatHelper.setLEDMessage(this.state.inputValue)
	}
	return (
	    <div className="input-group">
	      <input type="text" className="form-control" placeholder={props.placeholder}  onChange={this.updateInputValue} />
	      <span className="input-group-btn">
	        <button className="btn btn-default" type="submit" onClick={this.handleClick} >{props.button_name}</button>
	      </span>
	    </div>
  )
}

module.exports = InputWidget;

