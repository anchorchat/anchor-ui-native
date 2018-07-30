import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: colors.white
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
    lineHeight: 23,
    marginBottom: 16
  }
});

// TODO: Randomise text
export default () => (
  <ScrollView>
    <View style={styles.wrapper}>
      <Text type="heading" style={styles.headingLarge}>Text</Text>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>body (default)</Text>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>body-light</Text>
        <Text type="body-light">Changes you make will automatically reload.</Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>body-lighter</Text>
        <Text type="body-lighter">Shake your phone to open the developer menu.</Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>body-accent</Text>
        <Text type="body-accent">Shake your phone to open the developer menu.</Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>body-contrast</Text>
        <Text type="body-contrast" style={{ backgroundColor: colors.secondary }}>
          Shake your phone to open the developer menu.
        </Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>button</Text>
        <Text type="button">Shake your phone to open the developer menu.</Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>divider</Text>
        <Text type="divider">Shake your phone to open the developer menu.</Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>heading</Text>
        <Text type="heading">Shake your phone to open the developer menu.</Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>heading-light</Text>
        <Text type="heading-light">Shake your phone to open the developer menu.</Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>heading-contrast</Text>
        <Text type="heading-contrast" style={{ backgroundColor: colors.secondary }}>
          Shake your phone to open the developer menu.
        </Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>navigation</Text>
        <Text type="navigation">Shake your phone to open the developer menu.</Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>navigation-emphasized</Text>
        <Text type="navigation-emphasized">Shake your phone to open the developer menu.</Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>heading-secondary</Text>
        <Text type="heading-secondary">Shake your phone to open the developer menu.</Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>tab</Text>
        <Text type="tab">Shake your phone to open the developer menu.</Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>tab-active</Text>
        <Text type="tab-active">Shake your phone to open the developer menu.</Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>time</Text>
        <Text type="time">Shake your phone to open the developer menu.</Text>
      </View>
      <View style={styles.item}>
        <Text type="heading" style={styles.heading}>time-contrast</Text>
        <Text type="time-contrast" style={{ backgroundColor: colors.secondary }}>
          Shake your phone to open the developer menu.
        </Text>
      </View>
    </View>
  </ScrollView>
);
