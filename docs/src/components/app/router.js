import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home';
import StyleGuide from '../style-guide';
import ListItem from '../list-item';

const Router = () => (
  <Switch>
    <Route exact path="/style-guide" component={StyleGuide} />
    <Route exact path="/list-item" component={ListItem} />
    <Route exact path="/" component={Home} />
    <Redirect to={{ state: { notFound: true } }} />
  </Switch>
);

export default Router;
