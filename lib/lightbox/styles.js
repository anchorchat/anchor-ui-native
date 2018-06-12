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
    },
    headerContainer: {
      borderBottomWidth: 0
    },
    headerAnimated: {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1
    },
    primaryHeaderText: {
      color: colors.white
    },
    imageContainer: {
      flexDirection: 'row',
      flex: 1
    },
    image: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    },
    footer: {
      width: '100%',
      paddingBottom: safeArea.bottom,
      backgroundColor: 'rgba(0,0,0,0.75)',
      position: 'absolute',
      bottom: 0,
      left: 0,
      zIndex: 1
    }
  })
);
