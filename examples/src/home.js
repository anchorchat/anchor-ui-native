import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../anchor-ui-native';

const navigationOptions = () => ({
  title: 'Home'
});

const Home = () => (
  <View style={styles.wrapper}>
    <Text>Welcome in the anchor-ui-native example</Text>
  </View>
);

Home.navigationOptions = navigationOptions;

const styles = StyleSheet.create({
  wrapper: {
    padding: 8
  }
});

export default Home;
