import { StyleSheet } from 'react-native';
import getContainerStyles from '../styles';

export default (colors, align, imageSize) => (
  StyleSheet.create({
    container: {
      ...getContainerStyles(colors, align),
      paddingTop: 2,
      paddingLeft: 2,
      paddingBottom: 2,
      paddingRight: 2,
      position: 'relative',
      backgroundColor: 'transparent'
    },
    image: {
      marginBottom: 10,
      width: imageSize,
      height: imageSize
    },
    time: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      paddingTop: 1.5,
      paddingBottom: 1.5,
      paddingLeft: 6,
      paddingRight: 6,
      borderRadius: 10,
      backgroundColor: `${colors.black}60`
    }
  })
);
