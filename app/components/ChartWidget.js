var React = require('react')
var RTChart = require('react-rt-chart')

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
				      temperature: this.getRandomInt(10,20),
				      humidity: this.getRandomInt(50,60)
				    };
		return(
			<RTChart
            fields={['temperature','humidity']}
            data={data} />
		)
	}

});

module.exports = ChartWidget;