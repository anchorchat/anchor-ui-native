import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from '../anchor-ui-native';

export default () => (
  <View style={[styles.wrapper]}>
    <View style={styles.item}>
      <Text>Avatar with uri</Text>
      <Avatar source={{ uri: 'https://source.unsplash.com/random/100x100' }} />
    </View>
    <View style={styles.item}>
      <Text>Avatar with text</Text>
      <Avatar text="BG" />
    </View>
    <View style={styles.item}>
      <Text>Avatar with text and color</Text>
      <Avatar text="MO" color="pink" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    padding: 8
  },
  item: {
    margin: 8
  }
});
