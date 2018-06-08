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
import Message from '../message';
import FullWidthImage from '../full-width-image';
import Text from '../text';
import Avatar from '../avatar';

const Router = () => (
  <Switch>
    <Route exact path="/style-guide" component={StyleGuide} />
    <Route exact path="/button" component={Button} />
    <Route exact path="/list-item" component={ListItem} />
    <Route exact path="/text-input" component={TextInput} />
    <Route exact path="/message-input" component={MessageInput} />
    <Route exact path="/header" component={Header} />
    <Route exact path="/message-highlight" component={MessageHighlight} />
    <Route exact path="/message" component={Message} />
    <Route exact path="/full-width-image" component={FullWidthImage} />
    <Route exact path="/text" component={Text} />
    <Route exact path="/avatar" component={Avatar} />
    <Route exact path="/" component={Home} />
    <Redirect to={{ state: { notFound: true } }} />
  </Switch>
);

export default Router;
