import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import Sources from './components/dashboard/Dashboard';
import NewsHeadlines from './components/news-headlines/news-headlines';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/sources" component={Sources} />
    <Route path="/news-headlines" component={NewsHeadlines} />
  </Switch>
);

export default Routes;