import { StyleSheet } from 'react-native';

export default (secondaryText = null, secondaryTextNumberOfLines = 1) => (
  StyleSheet.create({
    touchableHighlight: {
      width: '100%',
      overflow: 'hidden'
    },
    container: {
      width: '100%',
      minHeight: 40,
      display: 'flex',
      flexDirection: 'row',
      position: 'relative'
    },
    icon: {
      marginTop: 4,
      marginBottom: 4,
      marginLeft: 8
    },
    rightButton: {
      marginTop: 4,
      marginBottom: 4,
      marginRight: 8,
      alignSelf: 'center'
    },
    textContainer: {
      marginTop: secondaryText && secondaryTextNumberOfLines === 1 ? 7 : 11,
      marginBottom: secondaryText && secondaryTextNumberOfLines === 1 ? 7 : 11,
      marginLeft: 8,
      marginRight: 8,
      display: 'flex',
      flex: 1,
      justifyContent: 'center'
    },
    primaryTextContainer: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'baseline',
      flexShrink: 0
    },
    text: {
      flex: 1
    },
    time: {
      marginLeft: 4
    },
    secondaryTextContainer: {
      flexDirection: 'row',
      flex: 1,
      marginTop: 3
    },
    counter: {
      marginLeft: 8,
      flexShrink: 0,
      alignSelf: 'center'
    },
    leftButton: {
      marginTop: 4,
      marginBottom: 4,
      marginLeft: 8,
      alignSelf: 'center'
    }
  })
);
