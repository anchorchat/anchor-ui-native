import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ContentItem, Text } from '../anchor-ui-native';

export default () => (
  <View style={[styles.wrapper]}>
    <View style={styles.item}>
      <Text>ContentItem</Text>
      <ContentItem headerText="Mobile" bodyText="+ 31 6 37 40 52 93" />
    </View>
    <View style={styles.item}>
      <Text>ContentItem with divider</Text>
      <ContentItem headerText="Mobile" bodyText="+ 31 6 37 40 52 93" divider />
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
