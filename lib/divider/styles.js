import { StyleSheet } from 'react-native';

export default colors => (
  StyleSheet.create({
    line: {
      backgroundColor: colors.divider,
      height: 0.5,
      width: '100%'
    },
    text: {
      width: '100%',
      backgroundColor: colors.lighterGray,
      paddingTop: 2,
      paddingRight: 8,
      paddingBottom: 2,
      paddingLeft: 8,
      height: 24
    }
  })
);
