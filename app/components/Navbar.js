var React = require('react');
var ReactRouter = require('react-router');
var textcolorblack = require('../styles').textcolorblack;
var bloglink = require('../styles').bloglink;
var Link = ReactRouter.Link;

var Navbar =  React.createClass({

  getInitialState: function () {
    return {
      navCollapsed: true
    }
  },

  _onToggleNav : function() {
    this.setState({ navCollapsed: !this.state.navCollapsed })
  },

  render: function() {

    const {navCollapsed} = this.state

    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" 
                  className="navbar-toggle collapsed" 
                  data-toggle="collapse"
                  onClick={this._onToggleNav}
                  data-target="#bs-example-navbar-collapse-1" 
                  aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <p className="navbar-brand" style={textcolorblack} >SenseHat Dashboard</p>
            </div>
            <div id="bs-example-navbar-collapse-1"  className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'} >
              <ul className="nav navbar-nav">
                <li>
                  <Link to='/'>Ambient<span className="sr-only">(current)</span></Link>
                </li>
                <li>
                  <Link to='/control'>Control</Link>
                </li>
                <li>
                  <Link to='/chart'>Chart</Link>
                </li>
              </ul>
            </div>
              
            
            </div>
        </nav>
  )}

});




module.exports = Navbar;
