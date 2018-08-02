import { StyleSheet, Platform } from 'react-native';
import fade from '../config/fade';

export default colors => (
  StyleSheet.create({
    container: {
      alignItems: 'center'
    },
    textContainer: {
      flexDirection: 'row',
      backgroundColor: fade(colors.black, 0.25),
      borderRadius: 4
    },
    item: {
      padding: 8
    },
    itemBorder: {
      borderRightWidth: 1,
      borderRightColor: fade(colors.black, 0.75)
    },
    notch: {
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderLeftWidth: 7,
      borderRightWidth: 7,
      borderTopWidth: 7,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: fade(colors.black, 0.25)
    },
    text: {
      marginTop: Platform.OS === 'android' ? 0 : -1
    }
  })
);
