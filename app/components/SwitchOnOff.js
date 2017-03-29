var React = require('react')
var SensehatHelper = require('../utils/SensehatHelper')


function SwitchOnOff(props) {
		handleClick = function () {
		    console.log(props.button_label)
		    SensehatHelper.setLEDRGB(props.button_label.toLowerCase())
		}
		return (
			<button type="button"  className={props.button_type} onClick={this.handleClick} >{props.button_label}</button>			
		)
}

module.exports = SwitchOnOff;