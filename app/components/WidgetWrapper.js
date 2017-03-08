var React = require('react');
var PropTypes = React.PropTypes;

function WidgetWrapper (props) {
  return (
    <div className='col-sm-4'>
      {props.children}
    </div>
  )
}

// UserDetailsWrapper.header = {
//   header: PropTypes.string.isRequired,
// }

module.exports = WidgetWrapper;