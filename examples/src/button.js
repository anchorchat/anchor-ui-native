/* global alert */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button, Text } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';

export default () => (
  <View style={[styles.wrapper]}>
    <View style={styles.item}>
      <Text>Button</Text>
      <Button
        labelText="Click me!"
        onPress={() => alert('You pressed me!')}
      />
    </View>
    <View style={styles.item}>
      <Text>Button with Icon</Text>
      <Button
        labelText="Herro!"
        icon={<Ionicons name="ios-analytics" size={20} color={colors.primary} />}
        onPress={() => alert('Button says no!')}
      />
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
