var React = require('react')
var RTChart = require('react-rt-chart')
var React = require('react');
var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;

var ChartWidget = React.createClass({

	getRandomInt: function(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	getInitialState : function() {
    	return {};
  	},
	componentDidMount: function ()  {
	    this.intervalId = setInterval(() => this.forceUpdate(), 1000);
	    this.setState({intervalId: this.intervalId});
	},
	componentWillUnmount: function() {
	    clearInterval(this.state.intervalId)
	},
	render: function(){
		var data = {
				      date: new Date(),
				      temp: this.getRandomInt(10,20),
				      hum: this.getRandomInt(50,60)
				    };
		return(
			<RTChart
            fields={['temp','hum']}
            data={data} />
		)
	}

});

module.exports = ChartWidget;