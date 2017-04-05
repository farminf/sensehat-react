var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Navbar = require('./Navbar');
var Footer = require ('./Footer')


//var headerImage = require('../images/headerImage.png');


var Main = React.createClass({
	render: function(){
		return(
			<div className='main-container'>
				<Navbar></Navbar>
					<div>
						{this.props.children}
					</div>
				<Footer/>
			</div>

		)
	}

});

module.exports = Main;