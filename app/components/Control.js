var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;

var Control = React.createClass({
	render: function(){
		return(
			<div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      			<h1>Control</h1>		
    	</div>
		)
	}

});

module.exports = Control;