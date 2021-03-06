var React = require('react');
var Control = require('../components/Control');
var SensehatHelper = require('../utils/SensehatHelper')

var ControlContainer = React.createClass({
	getInitialState: function () {
		return {
		  isLoading: true 
		}
	},
	componentDidMount: function() {
		
	},
	render: function() {
		return (
			<Control
				isLoading={this.state.isLoading}
				 />
		);
	}
});

module.exports = ControlContainer;