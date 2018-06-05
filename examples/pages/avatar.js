import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';

export default () => (
  <View style={styles.wrapper}>
    <Text type="heading" style={styles.headingLarge}>Avatar</Text>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With uri</Text>
      <Avatar source={{ uri: 'https://source.unsplash.com/random/100x100' }} />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With text</Text>
      <Avatar text="BG" />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With text and color</Text>
      <Avatar text="MO" color="pink" />
    </View>
  </View>
);

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
