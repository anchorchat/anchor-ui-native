import { StyleSheet } from 'react-native';
import getContainerStyles from '../styles';

export default (colors, align) => (
  StyleSheet.create({
    container: {
      ...getContainerStyles(colors, align),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    textContainer: {
      marginLeft: 8
    }
  })
);
