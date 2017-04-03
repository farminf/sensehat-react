var React = require('react');
var transparentBg = require('../styles').transparentBg;
var FontAwesome = require('react-fontawesome');



function MonitorWidget(props){
	var inverse = true
	var value = props.panel_content.toFixed(1);
	return(
		<div className="jumbotron col-sm-12 text-center" style={transparentBg}>

	  				
		            <div className="circle">
			  				
			  			<p>
			  				<FontAwesome 
			  					name={props.panel_icon} 
			  					size='4x'
			  					 />
			  					
				    		<h2>{value} {props.unit}</h2>
				    	</p>

		            </div>
					        
		</div>
	)
}



module.exports = MonitorWidget;