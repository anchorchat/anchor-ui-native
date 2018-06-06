import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { MessageHighlight, Text } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';
import Close from '../icons/close'

export default () => (
  <ScrollView style={styles.wrapper}>
    <Text type="heading" style={styles.headingLarge}>MessageHighlight</Text>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>Default</Text>
      <MessageHighlight
        headerText="Christina Buchanan"
        bodyText="Tremblant is based in Canada and has over 90 runs servicing millions of skiers each year."
        closeIcon={<Close width={14} height={14} />}
      />
    </View>
  </ScrollView>
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
