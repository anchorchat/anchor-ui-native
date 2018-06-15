import { StyleSheet } from 'react-native';

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
    image: {
      width: size,
      height: size
    },
    text: {
      marginTop: 2,
      textAlign: 'center'
    }
  })
);
