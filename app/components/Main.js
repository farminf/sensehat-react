var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Navbar = require('./Navbar');


//var headerImage = require('../images/headerImage.png');


var Main = React.createClass({
	render: function(){
		return(
			<div className='main-container'>
				<Navbar></Navbar>
				{this.props.children}
			</div>
		)
	}

});

module.exports = Main;