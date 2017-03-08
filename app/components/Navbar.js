var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


function Navbar(){
  return (
    <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" 
                  className="navbar-toggle collapsed" 
                  data-toggle="collapse" 
                  data-target="#bs-example-navbar-collapse-1" 
                  aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" >SenseHat Dashboard</a>
            </div>
            <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse" >
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
            <ul className="nav navbar-nav navbar-right">
                <li><a target="_blank" href="https://iotdemos.wordpress.com">Blog</a></li>
              </ul>
            </div>
            </div>
        </nav>
  )
}
module.exports = Navbar;
