var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function ImageWrapper (props) {
  return (
    <div className='col-sm-4 panel panel-default text-center'>    
      {props.children}
    </div>
  )
}

// UserDetailsWrapper.header = {
//   header: PropTypes.string.isRequired,
// }

module.exports = ImageWrapper;