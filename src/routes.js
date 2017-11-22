import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import Sources from './components/dashboard/Dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/sources" component={Sources} />
  </Switch>
);

export default Routes;