import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';

export default () => (
  <ScrollView style={styles.wrapper}>
    <View style={styles.item}>
      <Text>Text</Text>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    <View style={styles.item}>
      <Text>body-light</Text>
      <Text type="body-light">Changes you make will automatically reload.</Text>
    </View>
    <View style={styles.item}>
      <Text>body-placeholder</Text>
      <Text type="body-placeholder">Shake your phone to open the developer menu.</Text>
    </View>
    <View style={styles.item}>
      <Text>body-accent</Text>
      <Text type="body-accent">Shake your phone to open the developer menu.</Text>
    </View>
    <View style={styles.item}>
      <Text>body-contrast</Text>
      <Text type="body-contrast" style={{ backgroundColor: colors.secondary }}>Shake your phone to open the developer menu.</Text>
    </View>
    <View style={styles.item}>
      <Text>button</Text>
      <Text type="button">Shake your phone to open the developer menu.</Text>
    </View>
    <View style={styles.item}>
      <Text>divider</Text>
      <Text type="divider">Shake your phone to open the developer menu.</Text>
    </View>
    <View style={styles.item}>
      <Text>heading</Text>
      <Text type="heading">Shake your phone to open the developer menu.</Text>
    </View>
    <View style={styles.item}>
      <Text>heading-placeholder</Text>
      <Text type="heading-placeholder">Shake your phone to open the developer menu.</Text>
    </View>
    <View style={styles.item}>
      <Text>heading-contrast</Text>
      <Text type="heading-contrast" style={{ backgroundColor: colors.secondary }}>Shake your phone to open the developer menu.</Text>
    </View>
    <View style={styles.item}>
      <Text>navigation</Text>
      <Text type="navigation">Shake your phone to open the developer menu.</Text>
    </View>
    <View style={styles.item}>
      <Text>navigation-emphasized</Text>
      <Text type="navigation-emphasized">Shake your phone to open the developer menu.</Text>
    </View>
    <View style={styles.item}>
      <Text>navigation-secondary</Text>
      <Text type="navigation-secondary">Shake your phone to open the developer menu.</Text>
    </View>
    <View style={styles.item}>
      <Text>tab</Text>
      <Text type="tab">Shake your phone to open the developer menu.</Text>
    </View>
    <View style={styles.item}>
      <Text>tab-active</Text>
      <Text type="tab-active">Shake your phone to open the developer menu.</Text>
    </View>
    <View style={styles.item}>
      <Text>time</Text>
      <Text type="time">Shake your phone to open the developer menu.</Text>
    </View>
    <View style={styles.item}>
      <Text>time-contrast</Text>
      <Text type="time-contrast" style={{ backgroundColor: colors.secondary }}>Shake your phone to open the developer menu.</Text>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  wrapper: {
    padding: 8
  },
  item: {
    margin: 8
  }
});
