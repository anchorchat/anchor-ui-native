import { StyleSheet } from 'react-native';
import getContainerStyles from '../styles';

export default (colors, align) => (
  StyleSheet.create({
    container: {
      ...getContainerStyles(colors, align),
      paddingTop: 2,
      paddingLeft: 2,
      paddingBottom: 2,
      paddingRight: 2,
      position: 'relative'
    },
    image: {
      borderRadius: 4
    },
    time: {
      position: 'absolute',
      right: 6,
      bottom: 6,
      paddingTop: 1.5,
      paddingBottom: 1.5,
      paddingLeft: 6,
      paddingRight: 6,
      borderRadius: 10,
      backgroundColor: `${colors.black}60`
    },
    timeWithBody: {
      marginBottom: 6,
      marginRight: 6
    },
    bodyText: {
      marginTop: 8,
      marginLeft: 6,
      marginRight: 6
    }
  })
);
