import { StyleSheet } from 'react-native';

export default (safeArea, colors, fonts) => (
  StyleSheet.create({
    pickerContainer: {
      flex: 1,
      width: '100%',
      justifyContent: 'flex-end',
      paddingBottom: safeArea.bottom
    },
    item: fonts.regular,
    pickerAndroid: {
      height: 44,
      width: '100%'
    },
    pickerIos: {
      width: '100%',
      paddingLeft: safeArea.left,
      paddingRight: safeArea.right,
      backgroundColor: colors.white
    },
    pickerHeader: {
      paddingTop: 11,
      paddingBottom: 11,
      paddingLeft: 17 + safeArea.left,
      paddingRight: 17 + safeArea.right,
      backgroundColor: colors.lighterGray,
      justifyContent: 'flex-end',
      flexDirection: 'row'
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 11,
      paddingLeft: 17,
      paddingRight: 11,
      paddingBottom: 11
    },
    button: {
      fontSize: 17,
      lineHeight: 22,
      ...fonts.bold
    },
    touchable: {
      flex: 1
    }
  })
);
