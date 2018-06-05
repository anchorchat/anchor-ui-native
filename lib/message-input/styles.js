import { StyleSheet } from 'react-native';
import { getSafeArea } from '../config/platform';

export default (colors, orientation) => {
  const safeArea = getSafeArea(orientation);

  return StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: colors.lighterGray,
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingBottom: safeArea.bottom,
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
      paddingLeft: 8.5,
      paddingRight: 8.5,
      paddingBottom: 6,
      paddingTop: 6,
      flex: 1,
      backgroundColor: colors.white,
      maxHeight: 95,
      overflow: 'hidden'
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
}
