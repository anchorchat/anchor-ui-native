import { StyleSheet } from 'react-native';
import getContainerStyles from '../style';

export default (colors, align) => (
  StyleSheet.create({
    container: {
      ...getContainerStyles(colors, align),
      flexDirection: 'row',
      alignItems: 'center'
    },
    textContainer: {
      marginLeft: 8
    }
  })
);
