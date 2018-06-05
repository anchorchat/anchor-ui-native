import { StyleSheet } from 'react-native';
import { getSafeArea } from '../config/platform';

export default (colors, orientation) => {
  const safeArea = getSafeArea(orientation);

  return StyleSheet.create({
    statusBar: {
      width: '100%',
      paddingTop: safeArea.top,
      backgroundColor: colors.lighterGray
    },
    container: {
      width: '100%',
      height: 45,
      paddingLeft: 17 + safeArea.left,
      paddingRight: 17 + safeArea.left,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: colors.lightGray,
      borderBottomWidth: 0.5
    },
    textContainer: {
      flex: 1,
      height: '100%',
      justifyContent: 'center',
      display: 'flex'
    },
    primaryText: {
      flex: 1,
      textAlign: 'center'
    },
    secondaryText: {
      flex: 1,
      textAlign: 'center'
    }
  });
};
