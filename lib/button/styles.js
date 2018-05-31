import { StyleSheet } from 'react-native';

export default colors => (
  StyleSheet.create({
    container: {
      borderRadius: 5,
      padding: 8,
      backgroundColor: colors.lightPrimary,
      alignItems: 'center',
      flexDirection: 'row'
    },
    icon: {
      marginRight: 4
    }
  })
);
