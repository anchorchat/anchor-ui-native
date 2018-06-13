import { StyleSheet } from 'react-native';

export default () => (
  StyleSheet.create({
    container: {
      position: 'absolute',
      backgroundColor: 'transparent',
      top: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    alphabetWrapper: {
      padding: 10,
      backgroundColor: '#000',
      justifyContent: 'center'
    },
    letter: {
      fontSize: 11,
      fontFamily: 'nunito-semibold',
      textAlign: 'center'
    }
  })
);
