import { StyleSheet } from 'react-native';

export default (colors, safeArea) => (
  StyleSheet.create({
    root: {
      flex: 1,
      position: 'relative',
      backgroundColor: colors.black
    },
    header: {
      backgroundColor: 'rgba(0,0,0,0.75)',
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
    },
    imageContainer: {
      flexDirection: 'row',
      flex: 1
    },
    image: {
      flex: 1,
      width: null,
      height: null
    },
    textContainer: {
      paddingLeft: 90,
      paddingRight: 90,
      flex: 1,
      height: '100%',
      justifyContent: 'center',
      display: 'flex'
    },
    footer: {
      width: '100%',
      paddingBottom: safeArea.bottom,
      backgroundColor: 'rgba(0,0,0,0.75)',
      position: 'absolute',
      bottom: 0,
      left: 0,
      zIndex: 1
    },
    footerContainer: {
      width: '100%',
      height: 45,
      paddingLeft: safeArea.left,
      paddingRight: safeArea.left,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative'
    },
    primaryFooterText: {
      textAlign: 'center',
      color: colors.white
    },
    secondaryFooterText: {
      textAlign: 'center',
      color: colors.lighterGray
    },
    leftFooterButton: {
      position: 'absolute',
      left: 0 + safeArea.left,
      height: '100%',
      justifyContent: 'center'
    },
    rightFooterButton: {
      position: 'absolute',
      right: 0 + safeArea.right,
      height: '100%',
      justifyContent: 'center'
    },
    footerDescription: {
      paddingTop: 8,
      paddingLeft: 17 + safeArea.left,
      paddingRight: 17 + safeArea.right
    }
  })
);
