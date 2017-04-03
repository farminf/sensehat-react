var React = require('react');
var MyChart = require('../components/MyChart');
var SensehatHelper = require('../utils/SensehatHelper')

var ChartContainer = React.createClass({
	getInitialState: function () {
		return {
		  isLoading: true,
		  temperature: 0 ,
		  humidity: 0 ,
		  pressure: 0 
		}
	},
	componentDidMount: function() {
		SensehatHelper.getAmbientValues()
	    	.then(function(result){
	    		this.setState({
	    			isLoading : false,
	    			temperature: result.data.temperature,
	    			humidity: result.data.humidity,
	    			pressure: result.data.pressure	
	    		})
	    	}.bind(this))
	},
	render: function() {
		return (

			<MyChart
				isLoading={this.state.isLoading}
				temperature={this.state.temperature}
				humidity={this.state.humidity}
				pressure={this.state.pressure}
			/>

		);
	}
});

module.exports = ChartContainer;