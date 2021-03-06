var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
// var hasHistory = ReactRouter.hasHistory;
// var createMemoryHistory = ReactRouter.createMemoryHistory;


var Main = require('../components/Main');
var AmbientContainer = require('../containers/AmbientContainer');
var ControlContainer = require('../containers/ControlContainer');
var ChartContainer = require('../containers/ChartContainer');



var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main} >
 			<IndexRoute component={AmbientContainer} />
 			<Route path='ambient' header='Ambient' component={AmbientContainer} />
 			<Route path='control' header='Control' component={ControlContainer} />
      		<Route path='chart' header='Chart' component={ChartContainer} />
		</Route>
	</Router>
);

module.exports = routes;