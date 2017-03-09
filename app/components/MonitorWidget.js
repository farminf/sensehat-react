var React = require('react');
var transparentBg = require('../styles').transparentBg;
var FontAwesomeImage = require('./FontAwesomeImage')


function MonitorWidget(props){
	return(
		<div className="jumbotron col-sm-12 text-center" style={transparentBg}>
  			<div className="panel panel-default ">
		  		<div className="panel-heading">
		    		<h3 className="panel-title">{props.panel_tile}</h3>
		  		</div>
	  			<div className="panel-body">
	  				<FontAwesomeImage panel_icon={props.panel_icon}/>
		    		{props.panel_content}
		  		</div>
			</div>		
		</div>
	)
}



module.exports = MonitorWidget;