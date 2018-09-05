/* eslint global-require: [0] */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';
import IconMask from '../anchor-ui-native/icons/mask';

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
    <Text type="heading" style={styles.headingLarge}>Avatar</Text>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With image</Text>
      <Avatar source={require('../assets/images/avatar.jpg')} />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With text</Text>
      <Avatar text="BG" />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With text and color</Text>
      <Avatar text="MO" color="pink" />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With text and gradient</Text>
      <Avatar
        text="LG"
        linearGradientProps={{ colors: ['#FF9173', '#E57859'] }}
      />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With icon</Text>
      <Avatar
        icon={<IconMask color="#FFF" />}
      />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With icon and color</Text>
      <Avatar
        icon={<IconMask color="#FFF" />}
        color="hotpink"
      />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With icon and gradient</Text>
      <Avatar
        icon={<IconMask color="#FFF" />}
        linearGradientProps={{ colors: ['#FF9173', '#E57859'] }}
      />
    </View>
  </View>
);
