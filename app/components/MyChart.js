var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;
var ChartWidget = require('./ChartWidget');
var D3chartWidget = require('./D3chartWidget');
var ChartFrameContainer = require('./ChartFrameContainer')
var MainContainer = require('./MainContainer')





function MyChart (props){
		return(
			
			<MainContainer>
				<ChartFrameContainer>
					<D3chartWidget sensor='temperature' color='orange' sensor_value={props.temperature}/>
				</ChartFrameContainer>
				<ChartFrameContainer>
					<D3chartWidget sensor='humidity' color='blue' sensor_value={props.humidity}/>
				</ChartFrameContainer>
				<ChartFrameContainer>
					<D3chartWidget sensor='pressure' color='red' sensor_value={props.pressure}/>
				</ChartFrameContainer>
			</MainContainer>
		)
	}



module.exports = MyChart;