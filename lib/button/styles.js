import { StyleSheet, Platform } from 'react-native';

export default colors => (
  StyleSheet.create({
    root: {
      borderRadius: 5,
      overflow: 'hidden'
    },
    container: {
      height: 38,
      paddingLeft: 24,
      paddingRight: 24,
      borderRadius: 5,
      backgroundColor: colors.lightPrimary,
      alignItems: 'center',
      flexDirection: 'row'
    },
    icon: {
      marginRight: 4
    },
    text: {
      marginTop: Platform.OS === 'android' ? 2 : 0
    }
  })
);
