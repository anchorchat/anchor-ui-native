import { StyleSheet } from 'react-native';

export default colors => (
  StyleSheet.create({
    border: {
      width: 21,
      height: 21,
      borderWidth: 1,
      borderColor: colors.white,
      borderRadius: 10.5,
      overflow: 'hidden'
    },
    background: {
      width: 19,
      height: 19,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
);
