var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;
var ChartWidget = require('./ChartWidget');
var D3chartWidget = require('./D3chartWidget');
var ChartFrameContainer = require('./ChartFrameContainer')
var MainContainer = require('./MainContainer')





var MyChart = React.createClass({
	render: function(props){
		return(
			
			<MainContainer>
				<ChartFrameContainer>
					<D3chartWidget sensor='temperature' color='orange'/>
				</ChartFrameContainer>
				<ChartFrameContainer>
					<D3chartWidget sensor='humidity' color='blue'/>
				</ChartFrameContainer>
				<ChartFrameContainer>
					<D3chartWidget sensor='pressure' color='red'/>
				</ChartFrameContainer>
			</MainContainer>
		)
	}

});

module.exports = MyChart;