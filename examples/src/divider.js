import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Text } from '../anchor-ui-native';

export default () => (
  <View style={[styles.wrapper]}>
    <View style={styles.item}>
      <Text>Default Divider</Text>
      <Divider />
    </View>
    <View style={styles.item}>
      <Text>Divider with text</Text>
      <Divider text="A" />
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
