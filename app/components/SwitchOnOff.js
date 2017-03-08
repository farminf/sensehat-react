var React = require('react')

function SwitchOnOff(props) {
		return (
			<button type="button"  className={props.button_type} >{props.button_label}</button>			
		)
}

module.exports = SwitchOnOff;