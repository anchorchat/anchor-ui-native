import { StyleSheet, Platform } from 'react-native';

export default (colors, safeArea) => (
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: colors.lighterGray,
      paddingBottom: safeArea.bottom,
      paddingLeft: safeArea.left,
      paddingRight: safeArea.right,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingLeft: safeArea.left,
      paddingRight: safeArea.right,
    },
    input: {
      marginTop: 6.5,
      marginBottom: 6.5,
      marginLeft: 8,
      marginRight: 8,
      borderWidth: 0.5,
      borderColor: colors.lightGray,
      borderRadius: 16,
      paddingLeft: 8,
      paddingRight: 8,
      paddingBottom: Platform.OS === 'android' ? 1.5 : 5.5,
      paddingTop: Platform.OS === 'android' ? 1.5 : 5.5,
      flex: 1,
      backgroundColor: colors.white,
      maxHeight: 95,
      overflow: 'hidden',
      lineHeight: 20
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
