import React from 'react';
import ReactDOM from 'react-dom';
import { AppRegistry } from 'react-native';
import './index.css';
import App from './App';

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});
