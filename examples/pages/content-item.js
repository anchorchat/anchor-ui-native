import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ContentItem, Text } from '../anchor-ui-native';
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
    <Text type="heading" style={styles.headingLarge}>ContentItem</Text>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>Default</Text>
      <ContentItem headerText="Mobile" bodyText="+ 31 6 37 40 52 93" />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With divider</Text>
      <ContentItem headerText="Mobile" bodyText="+ 31 6 37 40 52 93" divider />
    </View>
  </View>
);
