var React = require('react');
var MonitorWidget = require('./MonitorWidget')
var Widgetwrapper = require('./Widgetwrapper')
var MainContainer = require('./MainContainer')

function Ambient(){
		return(
			<MainContainer>
				<Widgetwrapper >
					<MonitorWidget panel_tile='Temperature' panel_content='content1' />
				</Widgetwrapper>
				<Widgetwrapper>
					<MonitorWidget panel_tile='Humidity' panel_content='content2' />
				</Widgetwrapper>
				<Widgetwrapper>
					<MonitorWidget panel_tile='Pressure' panel_content='content3' />
				</Widgetwrapper>
			</MainContainer>
		)
}



module.exports = Ambient;