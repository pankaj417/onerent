import React from 'react/addons';
import Router from 'react-router';
import App from '../components/app.jsx';
import TodoApp from '../components/templates/todo-app/todo-app.jsx';
import About from '../components/templates/about/about.jsx';
import PropertyApp from '../components/templates/property-app/property-app.jsx';

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute name='property-app' handler={PropertyApp} />
    <Route name='property-app' path='/property' handler={PropertyApp} />
    <NotFoundRoute handler={PropertyApp} />
  </Route>
);

export default routes;
