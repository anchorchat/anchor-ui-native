import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';

const navigationOptions = () => ({
  title: 'Home'
});

const Home = () => (
  <View style={styles.wrapper}>
    <Text type="heading" style={styles.headingLarge}>AnchorUI Native</Text>
    <Text>Welcome in the AnchorUI Native examples. View the components by using the drawer navigation.</Text>
  </View>
);

Home.navigationOptions = navigationOptions;

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: colors.white,
    flex: 1
  },
  headingLarge: {
    fontSize: 20,
    marginBottom: 16
  }
});

export default Home;
