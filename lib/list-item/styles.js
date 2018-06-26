import { StyleSheet } from 'react-native';

export default () => (
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
      marginTop: 4,
      marginBottom: 4,
      marginLeft: 8,
      marginRight: 8,
      display: 'flex',
      flex: 1,
      justifyContent: 'center'
    },
    divider: {
      position: 'absolute',
      left: 0,
      bottom: 0
    },
    primaryTextContainer: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'baseline'
    },
    text: {
      flex: 1
    },
    time: {
      marginLeft: 4
    },
    secondaryTextContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    counter: {
      marginLeft: 8
    }
  })
);
