var React = require('react');
var transparentBg = require('../styles').transparentBg;
var FontAwesome = require('react-fontawesome');

var FontAwesomeImage = React.createClass({
	render: function(){
		return(
			<FontAwesome
				        name={this.props.panel_icon}
			/>
		)
	}

});

module.exports = FontAwesomeImage;