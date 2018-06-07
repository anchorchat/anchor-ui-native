import { StyleSheet } from 'react-native';
import getContainerStyles from '../style';

export default (colors, align) => (
  StyleSheet.create({
    container: getContainerStyles(colors, align),
    image: {
      marginBottom: 8,
      borderRadius: 4
    }
  })
);
