import { StyleSheet } from 'react-native';

export default (colors, safeArea) => (
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: colors.white
    },
    listItem: {
      paddingLeft: safeArea.left + 8,
      paddingRight: safeArea.left + 8
    },
    divider: {
      paddingLeft: safeArea.left + 8,
      paddingRight: safeArea.left + 8
    }
  })
);
