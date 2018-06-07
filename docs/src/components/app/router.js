import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home';
import StyleGuide from '../style-guide';
import ListItem from '../list-item';
import Button from '../button';
import TextInput from '../text-input';
import MessageInput from '../message-input';
import Header from '../header';
import MessageHighlight from '../message-highlight';
import ContextMenu from '../context-menu';

const Router = () => (
  <Switch>
    <Route exact path="/style-guide" component={StyleGuide} />
    <Route exact path="/button" component={Button} />
    <Route exact path="/list-item" component={ListItem} />
    <Route exact path="/text-input" component={TextInput} />
    <Route exact path="/message-input" component={MessageInput} />
    <Route exact path="/header" component={Header} />
    <Route exact path="/message-highlight" component={MessageHighlight} />
    <Route exact path="/context-menu" component={ContextMenu} />
    <Route exact path="/" component={Home} />
    <Redirect to={{ state: { notFound: true } }} />
  </Switch>
);

export default Router;
