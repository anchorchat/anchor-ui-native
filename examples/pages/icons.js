import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import map from 'lodash/map';
import { Text, withSafeArea } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';
import * as icons from '../anchor-ui-native/icons';

const propTypes = {
  safeArea: PropTypes.shape({
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired
};

const getStyles = safeArea => (
  StyleSheet.create({
    wrapper: {
      backgroundColor: colors.white,
      paddingTop: 16,
      paddingLeft: 16 + safeArea.left,
      paddingRight: 16 + safeArea.right,
      paddingBottom: 16 + safeArea.bottom,
      flex: 1
    },
    headingLarge: {
      fontSize: 20,
      marginBottom: 16
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    icon: {
      alignItems: 'center',
      margin: 8
    },
    label: {
      fontSize: 12
    }
  })
);

const HeaderExample = ({ safeArea }) => {
  const styles = getStyles(safeArea);

  return (
    <View style={styles.wrapper}>
      <Text type="heading" style={styles.headingLarge}>Icons</Text>
      <View style={styles.row}>
        {map(icons, (Icon, name) => (
          <View key={name} style={styles.icon}>
            <Icon />
            <Text type="body-lighter" style={styles.label}>{name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

HeaderExample.propTypes = propTypes;

export default withSafeArea(HeaderExample);
