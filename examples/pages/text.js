import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import map from 'lodash/map';
import includes from 'lodash/includes';
import { Text } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';
import textTypes from '../anchor-ui-native/text/types';

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: colors.white
  },
  item: {
    marginBottom: 16,
    alignItems: 'flex-start'
  },
  heading: {
    marginBottom: 8
  },
  headingLarge: {
    fontSize: 20,
    lineHeight: 23,
    marginBottom: 16
  },
  contrast: {
    backgroundColor: colors.secondary
  }
});

export default () => (
  <ScrollView minimumZoomScale={1} maximumZoomScale={10}>
    <View style={styles.wrapper}>
      <Text type="heading" style={styles.headingLarge}>Text</Text>
      {
        map(textTypes, type => (
          <View style={styles.item} key={type}>
            <Text type="heading" style={styles.heading}>{type}</Text>
            <Text
              type={type}
              style={
                includes(type, 'contrast')
                || type === 'avatar'
                || type === 'counter'
                || type === 'message-separator'
                  ? styles.contrast
                  : null
              }
            > {/* eslint-disable-line jsx-a11y/accessible-emoji, max-len */}
              🐣🦊The quick brown fox jumps over the lazy dog.🐕
            </Text>
          </View>
        ))
      }
    </View>
  </ScrollView>
);
