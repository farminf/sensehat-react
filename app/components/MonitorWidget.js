var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;

function MonitorWidget(props){
	return(
		<div className="jumbotron col-sm-12 text-center" style={transparentBg}>
  			<div className="panel panel-default ">
		  		<div className="panel-heading">
		    		<h3 className="panel-title">{props.panel_tile}</h3>
		  		</div>
	  			<div className="panel-body">
		    		{props.panel_content}
		  		</div>
			</div>		
		</div>
	)
}



module.exports = MonitorWidget;