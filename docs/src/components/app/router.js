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
import ContextMenu from '../context-menu';
import Text from '../text';
import Avatar from '../avatar';
import ContentItem from '../content-item';
import Divider from '../divider';
import ThemeProvider from '../theme-provider';
import WithTheme from '../with-theme';
import WithSafeArea from '../with-safe-area';
import Lightbox from '../lightbox';
import AlphabetPicker from '../alphabet-picker';
import ContactList from '../contact-list';
import Icons from '../icons';
import Picker from '../picker';

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
    <Route exact path="/context-menu" component={ContextMenu} />
    <Route exact path="/text" component={Text} />
    <Route exact path="/avatar" component={Avatar} />
    <Route exact path="/content-item" component={ContentItem} />
    <Route exact path="/divider" component={Divider} />
    <Route exact path="/theme-provider" component={ThemeProvider} />
    <Route exact path="/with-theme" component={WithTheme} />
    <Route exact path="/with-safe-area" component={WithSafeArea} />
    <Route exact path="/lightbox" component={Lightbox} />
    <Route exact path="/alphabet-picker" component={AlphabetPicker} />
    <Route exact path="/contact-list" component={ContactList} />
    <Route exact path="/icons" component={Icons} />
    <Route exact path="/picker" component={Picker} />
    <Route exact path="/" component={Home} />
    <Redirect to={{ state: { notFound: true } }} />
  </Switch>
);

export default Router;
