import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, withSafeArea } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';

const propTypes = {
  safeArea: PropTypes.shape({
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired
};

const getStyles = (safeArea) => (
  StyleSheet.create({
    wrapper: {
      backgroundColor: colors.white,
      paddingTop: 16,
      paddingLeft: 16 + safeArea.left,
      paddingRight: 16 + safeArea.right,
      paddingBottom: 16 + safeArea.bottom,
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
  })
);

const HeaderExample = ({ safeArea }) => {
  const styles = getStyles(safeArea);

  return (
    <ScrollView style={styles.wrapper}>
      <Text type="heading" style={styles.headingLarge}>Header</Text>
    </ScrollView>
  );
}

HeaderExample.propTypes = propTypes;

export default withSafeArea(HeaderExample);
