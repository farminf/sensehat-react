var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function PanelWrapper (props) {
  return (
    <div className='col-sm-4'>
      <div className='panel panel-default text-center' >
    		<div className=" panel-heading">
      		<h3 className="panel-title">{props.header}</h3>
    		</div>
    		<div className="panel-body">
        		{props.children}
        </div>
      </div>
    </div>
  )
}

// UserDetailsWrapper.header = {
//   header: PropTypes.string.isRequired,
// }

module.exports = PanelWrapper;