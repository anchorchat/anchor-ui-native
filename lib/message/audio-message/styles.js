import { StyleSheet } from 'react-native';
import getContainerStyles from '../styles';

export default (colors, align) => (
  StyleSheet.create({
    container: {
      ...getContainerStyles(colors, align),
      width: '75%'
    },
    header: {
      marginBottom: 4
    },
    link: {
      textDecorationLine: 'underline'
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    },
    barContainer: {
      flex: 1,
      height: 4,
      borderRadius: 4,
      overflow: 'hidden',
      backgroundColor: '#FFFFFF60',
      marginLeft: 4
    },
    bar: {
      backgroundColor: align === 'left' ? colors.primary : colors.white,
      height: 4,
      borderRadius: 4
    },
    time: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 22
    }
  })
);
