import { StyleSheet } from 'react-native';

export default colors => (
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: colors.lighterGray,
      flexDirection: 'row',
      alignItems: 'flex-end'
    },
    input: {
      marginTop: 6.5,
      marginBottom: 6.5,
      marginLeft: 8,
      marginRight: 8,
      borderWidth: 0.5,
      borderColor: colors.lightGray,
      borderRadius: 16,
      paddingLeft: 8.5,
      paddingRight: 8.5,
      paddingBottom: 6,
      paddingTop: 6,
      flex: 1,
      backgroundColor: colors.white,
      maxHeight: 95
    },
    leftIcon: {
      marginTop: 8.5,
      marginBottom: 8.5,
      marginLeft: 8
    },
    rightIcon: {
      marginTop: 8.5,
      marginBottom: 8.5,
      marginRight: 8
    }
  })
);