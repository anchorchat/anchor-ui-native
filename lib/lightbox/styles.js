import { StyleSheet } from 'react-native';

export default (colors) => (
  StyleSheet.create({
    root: {
      flex: 1,
      position: 'relative'
    },
    header: {
      backgroundColor: 'rgba(0,0,0,0.6)',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1
    },
    headerContainer: {
      borderBottomWidth: 0
    },
    primaryHeaderText: {
      color: colors.white
    }
  })
);
