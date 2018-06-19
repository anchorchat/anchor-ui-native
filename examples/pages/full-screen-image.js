import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, FullScreenImage } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';

const navigationOptions = () => ({
  title: 'Full Width Image'
});

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: colors.white,
    flex: 1
  },
  headingLarge: {
    fontSize: 20,
    marginBottom: 16,
    flexShrink: 0
  },
  imageWrapper: {
    flex: 1
  }
});

const FullWidthImage = () => (
  <View style={styles.wrapper}>
    <Text type="heading" style={styles.headingLarge}>Full Width Image</Text>
    <View style={styles.imageWrapper}>
      <FullScreenImage
        ratio={(16 / 9)}
        source={{ uri: 'https://images.unsplash.com/photo-1437382586735-b2af91b541a9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=3200&h=1800&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=11755b9793a63e2a7739864269e79b17' }}
        thumbnailSource={{ uri: 'https://images.unsplash.com/photo-1437382586735-b2af91b541a9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=16&h=9&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=11755b9793a63e2a7739864269e79b17' }}
        zoomable
      />
    </View>
  </View>
);

FullWidthImage.navigationOptions = navigationOptions;

export default FullWidthImage;
