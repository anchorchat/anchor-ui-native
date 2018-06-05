import { StyleSheet } from 'react-native';

export default (colors, align) => (
  StyleSheet.create({
    container: {
      backgroundColor: align === 'right' ? colors.primary : colors.white,
      paddingTop: 8,
      paddingLeft: 8,
      paddingBottom: 4,
      paddingRight: 8,
      borderRadius: 4,
      maxWidth: '75%',
      alignSelf: align === 'right' ? 'flex-end' : 'flex-start',
      margin: 8
    },
    timeContainer: {
      paddingLeft: 4,
      marginTop: 2,
      flexDirection: 'row',
      alignSelf: 'flex-end'
    }
  })
);
