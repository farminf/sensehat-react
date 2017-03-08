var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;

var Chart = React.createClass({
	render: function(){
		return(
			<div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      			<h1>Chart</h1>		
    	</div>
		)
	}

});

module.exports = Chart;