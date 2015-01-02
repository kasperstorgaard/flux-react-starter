var React            = require('react');

var Router           = require('react-router');
var RouteConstants   = require('./constants/route-constants');

var Home             = require('./views/pages/home');
var NotFound         = require('./views/pages/not-found');
var ExamplePage      = require('./views/pages/example-page');

var App              = require('./views/app');
var Footer           = require('./views/elements/footer');

var Route            = Router.Route,
    DefaultRoute     = Router.DefaultRoute,
    NotFoundRoute    = Router.NotFoundRoute,
    RouteHandler     = Router.RouteHandler;

var config = require('../../gulp/config.json').html;

window.React = React;

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute name={RouteConstants.HOME} handler={Home} />
    <Route name={RouteConstants.EXAMPLE} path="/example" handler={ExamplePage} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById(config.mainContainer));
  React.render(<Footer />, document.getElementById(config.footerContainer));
});
