import { StyleSheet } from 'react-native';
import getContainerStyles from '../styles';

export default (colors, align) => (
  StyleSheet.create({
    container: getContainerStyles(colors, align),
    image: {
      marginBottom: 8,
      borderRadius: 4
    }
  })
);
