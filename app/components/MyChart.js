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
					<D3chartWidget sensor='temperature'/>
				</ChartFrameContainer>
				<ChartFrameContainer>
					<D3chartWidget sensor='humidity'/>
				</ChartFrameContainer>
				<ChartFrameContainer>
					<D3chartWidget sensor='pressure'/>
				</ChartFrameContainer>
			</MainContainer>
		)
	}

});

module.exports = MyChart;