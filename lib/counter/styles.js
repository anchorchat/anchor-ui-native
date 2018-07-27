import { StyleSheet } from 'react-native';

export default colors => (
  StyleSheet.create({
    border: {
      width: 21,
      height: 21,
      backgroundColor: colors.white,
      borderRadius: 10.5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    background: {
      width: 19,
      height: 19,
      borderRadius: 9.5,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
);
