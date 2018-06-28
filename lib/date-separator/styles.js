import { StyleSheet } from 'react-native';

export default colors => (
  StyleSheet.create({
    container: {
      alignSelf: 'center',
      margin: 8,
      backgroundColor: `${colors.black}30`,
      borderRadius: 10,
      height: 20,
      paddingTop: 1,
      paddingBottom: 2,
      paddingLeft: 12,
      paddingRight: 12
    }
  })
);
