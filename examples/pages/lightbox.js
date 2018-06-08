import React from 'react';
import { StyleSheet } from 'react-native';
import { Lightbox, Text } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';

const HeaderExample = () => (
  <Lightbox
    headerProps={{
      primaryText: '1 Of 1',
      leftButton: <Text type="navigation-emphasized" style={styles.leftHeaderButton}>Done</Text>
    }}
    imageUri="https://img.gadgethacks.com/img/97/67/63657326555041/0/10-awesome-free-dark-themes-for-your-galaxy-s9.w1456.jpg"
  />
);

const styles = StyleSheet.create({
  leftHeaderButton: {
    paddingLeft: 17,
    color: colors.white
  }
});

export default HeaderExample;
