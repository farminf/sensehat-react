var React = require('react');
var Chart = require('../components/Chart');
var SensehatHelper = require('../utils/SensehatHelper')

var ChartContainer = React.createClass({
	getInitialState: function () {
		return {
		  isLoading: true 
		}
	},
	componentDidMount: function() {
		
	},
	render: function() {
		return (
			<Chart
				isLoading={this.state.isLoading}
				 />
		);
	}
});

module.exports = ChartContainer;