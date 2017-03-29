var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;
var ChartWidget = require('./ChartWidget');
var MainContainer = require('./MainContainer')


var Chart = React.createClass({
	render: function(props){
		return(
			<MainContainer>
				<ChartWidget/>
			</MainContainer>
    	
		)
	}

});

module.exports = Chart;