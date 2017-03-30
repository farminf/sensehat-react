var React = require('react');
var MyChart = require('../components/MyChart');
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

			<MyChart
				isLoading={this.state.isLoading}
			/>

		);
	}
});

module.exports = ChartContainer;