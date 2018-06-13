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
    containerLandscape: {
      height: '100%',
      padding: 10,
      opacity: 0
    },
    containerPortait: {
      paddingHorizontal: 10,
      justifyContent: 'center'
    },
    letter: {
      fontSize: 11,
      fontFamily: 'nunito-semibold',
      textAlign: 'center'
    }
  })
);
