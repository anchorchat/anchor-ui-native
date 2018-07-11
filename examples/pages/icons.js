import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import map from 'lodash/map';
import { Text, withSafeArea } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';
import * as icons from '../anchor-ui-native/icons';
import Button from '../anchor-ui-native/button';

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

class HeaderExample extends Component {
  state = {
    size: 28,
    checkColor: 'transparent'
  };

  toggleSize = size => this.setState({
    size
  });

  toggleSize = () => {
    const { checkColor } = this.state;

    return this.setState({
      checkColor: checkColor === 'transparent' ? 'hotpink' : 'transparent'
    });
  };

  render() {
    const { safeArea } = this.props;
    const styles = getStyles(safeArea);

    return (
      <View style={styles.wrapper}>
        <Text type="heading" style={styles.headingLarge}>Icons</Text>
        <View style={styles.row}>
          {map(icons, (Icon, name) => (
            <View key={name} style={styles.icon}>
              <Icon size={this.state.size} checkColor={this.state.checkColor} />
              <Text type="body-lighter" style={styles.label}>{name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.row}>
          <Button labelText="Icons @ 14" onPress={() => this.toggleSize(14)} />
          <Button labelText="Icons @ 28" onPress={() => this.toggleSize(28)} />
          <Button labelText="Icons @ 56" onPress={() => this.toggleSize(56)} />
          <Button labelText="CheckColor @ hotpink" onPress={this.toggleCheckColor} />
        </View>
      </View>
    );
  }
}

HeaderExample.propTypes = propTypes;

export default withSafeArea(HeaderExample);
