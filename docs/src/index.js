/* global document */
import { AppRegistry } from 'react-native';
import './css/meyer-reset.css';
import './css/index.css';
import App from './components/app';

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});
