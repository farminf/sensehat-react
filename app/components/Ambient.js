var React = require('react');
var MonitorWidget = require('./MonitorWidget')
var Widgetwrapper = require('./WidgetWrapper')
var MainContainer = require('./MainContainer')

function Ambient(props){
		return(
			<MainContainer>
				<Widgetwrapper >
					<MonitorWidget panel_tile='Temperature' panel_content={props.temperature} panel_icon='thermometer' unit='°C' />
				</Widgetwrapper>
				<Widgetwrapper>
					<MonitorWidget panel_tile='Humidity' panel_content={props.humidity} panel_icon='tint' unit='%' />
				</Widgetwrapper>
				<Widgetwrapper>
					<MonitorWidget panel_tile='Pressure' panel_content={props.pressure} panel_icon='tachometer' unit='hPa' />
				</Widgetwrapper>
			</MainContainer>
		)
}



module.exports = Ambient;