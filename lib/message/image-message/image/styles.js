import { StyleSheet } from 'react-native';

export default colors => (
  StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      position: 'relative',
      overflow: 'hidden'
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    placeholder: {
      width: '100%',
      height: '100%',
      backgroundColor: colors.gray
    }
  })
);
