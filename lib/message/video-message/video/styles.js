import { StyleSheet } from 'react-native';

export default colors => (
  StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      position: 'relative',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center'
    },
    video: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    playButton: {
      backgroundColor: colors.lighterGray,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
);
