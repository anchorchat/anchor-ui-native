import { StyleSheet } from 'react-native';

export default colors => (
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: colors.lighterGray,
      flexDirection: 'row',
      alignItems: 'center'
    },
    containerMultiline: {
      alignItems: 'flex-end'
    },
    input: {
      marginTop: 6.5,
      marginBottom: 6.5,
      marginLeft: 8,
      marginRight: 8,
      borderWidth: 0.5,
      borderColor: colors.lightGray,
      borderRadius: 50,
      paddingLeft: 7.5,
      paddingRight: 7.5,
      paddingBottom: 7.5,
      paddingTop: 7.5,
      flex: 1,
      backgroundColor: colors.white,
      lineHeight: 16
    },
    inputMultiline: {
      borderRadius: 4
    },
    leftIcon: {
      marginTop: 8,
      marginBottom: 8,
      marginLeft: 8
    },
    rightIcon: {
      marginTop: 8,
      marginBottom: 8,
      marginRight: 8
    }
  })
);
