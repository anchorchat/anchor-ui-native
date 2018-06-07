import React from 'react';
import { StyleSheet } from 'react-native';
import { Lightbox, Text } from '../anchor-ui-native';

const HeaderExample = () => (
  <Lightbox
    primaryHeaderText="1 Of 1"
    leftHeaderButton={<Text type="navigation-emphasized" style={styles.leftHeaderButton}>Done</Text>}
  />
);

const styles = StyleSheet.create({
  leftHeaderButton: { paddingLeft: 17 }
});

export default HeaderExample;
