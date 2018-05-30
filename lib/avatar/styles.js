import { StyleSheet } from 'react-native';

export default (size = 48, type = 'circle', color) => (
  StyleSheet.create({
    container: {
      width: size,
      height: size,
      backgroundColor: color,
      borderRadius: type === 'circle' ? 50 : 0,
      overflow: 'hidden'
    },
    image: {
      width: size,
      height: size
    },
    text: {
      lineHeight: size,
      textAlign: 'center'
    }
  })
);
