import { StyleSheet, Platform } from 'react-native';

export default (size = 48, type = 'circle', color) => (
  StyleSheet.create({
    container: {
      width: size,
      height: size,
      backgroundColor: color,
      borderRadius: type === 'circle' ? 50 : 0,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    gradientContainer: {
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'relative'
    },
    gradient: {
      position: 'absolute',
      top: 0,
      left: 0
    },
    image: {
      width: size,
      height: size
    },
    text: {
      marginTop: Platform.OS === 'ios' ? 1 : 0,
      textAlign: 'center'
    }
  })
);
