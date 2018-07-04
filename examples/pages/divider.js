import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Text } from '../anchor-ui-native';
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
    <Text type="heading" style={styles.headingLarge}>Divider</Text>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>Default</Text>
      <Divider />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With text</Text>
      <Divider text="A" />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With offset left</Text>
      <Divider offset={64} />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With offset right</Text>
      <Divider offset={64} offsetSide="right" />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With offset color hotpink</Text>
      <Divider offset={64} offsetColor="hotpink" />
    </View>
  </View>
);
