import { StyleSheet } from 'react-native';

export default (colors, safeArea) => (
  StyleSheet.create({
    statusBar: {
      width: '100%',
      paddingTop: safeArea.top,
      backgroundColor: colors.lighterGray
    },
    container: {
      width: '100%',
      height: 45,
      paddingLeft: safeArea.left,
      paddingRight: safeArea.left,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: colors.lightGray,
      borderBottomWidth: 0.5,
      position: 'relative'
    },
    textContainer: {
      paddingLeft: 90,
      paddingRight: 90,
      flex: 1,
      height: '100%',
      justifyContent: 'center',
      display: 'flex'
    },
    primaryText: {
      textAlign: 'center'
    },
    secondaryText: {
      textAlign: 'center'
    },
    leftButton: {
      position: 'absolute',
      left: 0 + safeArea.left,
      height: '100%',
      justifyContent: 'center'
    },
    rightButton: {
      position: 'absolute',
      right: 0 + safeArea.right,
      height: '100%',
      justifyContent: 'center'
    }
  })
);
