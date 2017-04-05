var React = require('react');
var ReactRouter = require('react-router');
var textcolorblack = require('../styles').textcolorblack;
var bloglink = require('../styles').bloglink;

var Footer =  React.createClass({

 
  render: function() {


    return (
        <footer className="footer">
          <div className="container">
            <p className="text-muted">There is no Copyright for this. Checkout <a  target="_blank" href="https://iotdemos.wordpress.com"> My Blog </a></p>             
          </div>
        </footer>
  )}

});




module.exports = Footer;