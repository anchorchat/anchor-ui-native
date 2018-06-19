/* eslint global-require: [0] */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text, Counter } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: colors.white,
    flex: 1
  },
  item: {
    marginBottom: 8,
    alignItems: 'flex-start'
  },
  heading: {
    marginBottom: 8
  },
  headingLarge: {
    fontSize: 20,
    marginBottom: 16
  }
});

export default () => (
  <View style={styles.wrapper}>
    <Text type="heading" style={styles.headingLarge}>Counter</Text>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>Default</Text>
      <Counter value={3} />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>Max value</Text>
      <Counter value={10} />
    </View>
  </View>
);
