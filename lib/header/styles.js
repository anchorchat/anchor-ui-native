import { StyleSheet, Platform } from 'react-native';

export default (colors, safeArea, inModal) => (
  StyleSheet.create({
    statusBar: {
      width: '100%',
      paddingTop: inModal && Platform.OS === 'android' ? 0 : safeArea.top,
      backgroundColor: Platform.OS === 'android' ? colors.primary : colors.lighterGray,
      ...Platform.OS === 'android'
        ? { elevation: 2 }
        : {
          borderBottomColor: colors.lightGray,
          borderBottomWidth: StyleSheet.hairlineWidth
        }
    },
    container: {
      width: '100%',
      height: 45,
      paddingLeft: safeArea.left,
      paddingRight: safeArea.left,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
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
    },
    icon: {
      height: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
);
