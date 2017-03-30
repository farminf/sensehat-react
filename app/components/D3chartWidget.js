var React = require('react')
var LineChart = require('react-d3-basic').LineChart;
var core = require('react-d3-core');


var D3chartWidget = React.createClass({
 
	updateChart: function(){
		console.log("ds")
		this.setState({
			chartData : this.state.chartData.concat([{
											    BMI: this.getRandomInt(10,20),
											    date: new Date()
											  }])
		})
	},
	getRandomInt: function(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	getInitialState : function() {
		console.log(this.props.sensor)
    	return {
    		chartData : []
    	};
  	},
	componentDidMount: function ()  {
	    this.intervalId = setInterval(() => this.updateChart(), 1000);
	    this.setState({intervalId: this.intervalId});
	},
	componentWillUnmount: function() {
	    clearInterval(this.state.intervalId)
	},
	render: function(){

		var width = 600
	    var height = 300
	    var margins = {left: 20, right: 20, top: 20, bottom: 60}
	    var title = "Title"
	    var parseDate = d3.time.format("%YM%m").parse;
	    xDomain = d3.extent(this.state.chartData, function(d){ return x(d) })
	    xRange = [0, width - margins.left - margins.right]
	    xScale = 'time',
	    xLabel = "Time";
	    //xAxis= {{tickValues: this.state.xScale.ticks(d3.time.day, 2), tickFormat: d3.time.format("%m/%d")}}

	    // chart series,
	    // field: is what field your data want to be selected
	    // name: the name of the field that display in legend
	    // color: what color is the line
	    chartSeries = [
	      {
	        field: 'BMI',
	        name: this.props.sensor,
	        color: '#ff7f0e'
	        
	      }
	    ]
	    // your x accessor
	    x = function(d) {
	    	return d.date;
	    	// date = d.date;
	    	// return date.toISOString();
	    	//return d3.time.format("%YM%m").parse;
	    	// console.log(new Date().toISOString())
	    	// return d.date;
	    }
		
		return(
			

			    <LineChart
			        margins= {margins}
			        title={title}
			        data={this.state.chartData}
			        width={width}
			        height={height}
			        chartSeries={chartSeries}
			        x={x}
			        xScale= {xScale}
			        xLabel= {xLabel}
			        xDomain= {xDomain}
        			xRange = {xRange}
        			showXGrid= {true}
        			showYGrid= {false}
	  			/>
		)
	}

});

module.exports = D3chartWidget;