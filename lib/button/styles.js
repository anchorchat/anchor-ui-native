import { StyleSheet } from 'react-native';

export default colors => (
  StyleSheet.create({
    touchableHighlight: {
      borderRadius: 5
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
    }
  })
);
