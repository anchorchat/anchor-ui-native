import { StyleSheet, Platform } from 'react-native';

export default (colors, offset, offsetColor) => (
  StyleSheet.create({
    container: {
      width: '100%',
      height: 0.5,
      flexDirection: 'row'
    },
    line: {
      backgroundColor: colors.divider,
      flex: 1
    },
    offset: {
      width: offset,
      flexShrink: 0,
      backgroundColor: offsetColor || colors.white
    },
    text: {
      width: '100%',
      backgroundColor: colors.lighterGray,
      paddingTop: Platform.OS === 'android' ? 4 : 2,
      paddingRight: 8,
      paddingBottom: 2,
      paddingLeft: 8,
      height: 24
    }
  })
);
