import { StyleSheet } from 'react-native';
import getContainerStyles from '../styles';

export default (colors, align) => (
  StyleSheet.create({
    container: getContainerStyles(colors, align),
    header: {
      marginBottom: 4
    }
  })
);
