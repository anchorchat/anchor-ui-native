import { StyleSheet, Platform } from 'react-native';

export default colors => (
  StyleSheet.create({
    container: {
      alignSelf: 'center',
      margin: 8,
      backgroundColor: `${colors.black}50`,
      borderRadius: 10,
      height: 20,
      paddingTop: Platform.OS === 'android' ? 2 : 1,
      paddingLeft: 12,
      paddingRight: 12
    }
  })
);
