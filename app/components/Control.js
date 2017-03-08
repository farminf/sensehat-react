var React = require('react');
var transparentBg = require('../styles').transparentBg;
var MainContainer = require('./MainContainer')
var PanelWrapper = require('./PanelWrapper')
var ImageWrapper = require('./ImageWrapper')
var SwitchOnOff = require('./SwitchOnOff')
var sensehatImage = require('../images/sensehat2.png')
var InputWidget = require('./InputWidget')

var Control = React.createClass({
	render: function(){
		return(
			<MainContainer>
				<PanelWrapper header='SenseHat LED Board'>
					<SwitchOnOff button_label='Clear' button_type='btn btn-lg btn-default btn-block'/>
					<SwitchOnOff button_label='Red' button_type='btn btn-lg btn-danger btn-block'/>
					<SwitchOnOff button_label='Green' button_type='btn btn-lg btn-success btn-block'/>
					<SwitchOnOff button_label='Blue' button_type='btn btn-lg btn-primary btn-block'/>
				</PanelWrapper>
				<ImageWrapper>
					<img src={sensehatImage} className="img-responsive center-block" />
				</ImageWrapper>
				<PanelWrapper header='Write on LED'>
				<InputWidget placeholder='write a word...' button_name='Send' />
				</PanelWrapper>
			</MainContainer>
		)
	}

});

module.exports = Control;