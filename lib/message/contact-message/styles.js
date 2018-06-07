import { StyleSheet } from 'react-native';

export default (colors, align) => (
  StyleSheet.create({
    container: {
      backgroundColor: align === 'right' ? colors.primary : colors.white,
      paddingTop: 8,
      paddingLeft: 8,
      paddingBottom: 8,
      paddingRight: 8,
      borderRadius: 4,
      maxWidth: '75%',
      alignSelf: align === 'right' ? 'flex-end' : 'flex-start',
      marginTop: 4,
      marginBottom: 4,
      marginLeft: 8,
      marginRight: 8,
      flexDirection: 'row',
      alignItems: 'center'
    },
    textContainer: {
      marginLeft: 8
    }
  })
);
