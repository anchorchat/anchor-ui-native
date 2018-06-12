/* global alert */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ContextMenu, Text } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';

const items = [
  {
    text: 'Copy',
    key: 'copy',
    onPress: () => alert('Pressed Copy')
  },
  {
    text: 'Edit',
    key: 'edit',
    onPress: () => alert('Pressed Edit')
  },
  {
    text: 'Delete',
    key: 'delete',
    onPress: () => alert('Pressed Delete')
  }
];

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
  },
  itemLeft: {
    alignItems: 'flex-start'
  },
  notchLeft: {
    position: 'relative',
    left: 20
  },
  itemRight: {
    alignItems: 'flex-end'
  },
  notchRight: {
    position: 'relative',
    right: 25
  }
});

export default () => (
  <View style={styles.wrapper}>
    <Text type="heading" style={styles.headingLarge}>ContextMenu</Text>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>Default</Text>
      <ContextMenu items={items} />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>Left aligned notch</Text>
      <ContextMenu
        items={items}
        style={styles.itemLeft}
        notchStyle={styles.notchLeft}
      />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>Right aligned notch</Text>
      <ContextMenu
        items={items}
        style={styles.itemRight}
        notchStyle={styles.notchRight}
      />
    </View>
  </View>
);
