var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
// var hasHistory = ReactRouter.hasHistory;
// var createMemoryHistory = ReactRouter.createMemoryHistory;


var Main = require('../components/Main');
var Ambient = require('../components/Ambient');
var Control = require('../components/Control');
var Chart = require('../components/Chart');
var AmbientContainer = require('../containers/AmbientContainer');


var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main} >
 			<IndexRoute component={AmbientContainer} />
 			<Route path='ambient' header='Ambient' component={AmbientContainer} />
 			<Route path='control' header='Control' component={Control} />
      		<Route path='chart' header='Chart' component={Chart} />
		</Route>
	</Router>
);

module.exports = routes;