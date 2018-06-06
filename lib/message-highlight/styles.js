import { StyleSheet } from 'react-native';

export default colors => (
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: colors.lighterGray,
      borderLeftWidth: 2,
      borderLeftColor: colors.primary,
      position: 'relative'
    },
    header: {
      marginTop: 8,
      marginBottom: 2,
      marginLeft: 8,
      marginRight: 30
    },
    body: {
      marginBottom: 8,
      marginLeft: 8,
      marginRight: 8
    },
    closeIcon: {
      position: 'absolute',
      top: 8,
      right: 8
    }
  })
);
