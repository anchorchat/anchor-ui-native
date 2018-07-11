/* eslint global-require: [0] */
import { Platform } from 'react-native';

export default Platform.select({
  ios: require('./fonts.ios'),
  android: require('./fonts.android')
});
