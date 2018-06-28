import { StyleSheet } from 'react-native';
import getContainerStyles from '../styles';

export default (colors, align) => (
  StyleSheet.create({
    container: {
      ...getContainerStyles(colors, align),
      maxWidth: '100%'
    },
    image: {
      marginBottom: 8,
      borderRadius: 4
    }
  })
);
