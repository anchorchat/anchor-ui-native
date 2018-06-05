/* global alert */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button, Text } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';

export default () => (
  <View style={styles.wrapper}>
    <Text type="heading" style={styles.headingLarge}>Button</Text>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>Default</Text>
      <Button
        labelText="Press me!"
        onPress={() => alert('You pressed me!')}
      />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With icon</Text>
      <Button
        labelText="Hello!"
        icon={<Ionicons name="ios-analytics" size={20} color={colors.primary} />}
        onPress={() => alert('Button says no!')}
      />
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
