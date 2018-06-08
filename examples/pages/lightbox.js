import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Lightbox, Text } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';

const HeaderExample = () => (
  <Lightbox
    headerProps={{
      primaryText: '1 Of 1',
      leftButton: <Text type="navigation-emphasized" style={styles.leftHeaderButton}>Done</Text>
    }}
    imageUri="https://img.gadgethacks.com/img/97/67/63657326555041/0/10-awesome-free-dark-themes-for-your-galaxy-s9.w1456.jpg"
    primaryFooterText="Sjaak Luthart"
    secondaryFooterText="Today at 09:34"
    descriptionFooterText="The home screen of a samsung s9"
    leftFooterButton={<Ionicons name="ios-share-outline" size={32} color={colors.white} style={styles.leftFooterButton} />}
    rightFooterButton={<Ionicons name="ios-trash-outline" size={32} color={colors.white} style={styles.rightFooterButton} />}
  />
);

const styles = StyleSheet.create({
  leftHeaderButton: {
    paddingLeft: 17,
    color: colors.white
  },
  leftFooterButton: {
    marginLeft: 11
  },
  rightFooterButton: {
    marginRight: 11
  }
});

export default HeaderExample;
