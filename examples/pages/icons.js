import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ScrollView } from 'react-native';
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
    },
    button: {
      margin: 4
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  })
);

class IconExample extends Component {
  state = {
    size: 28,
    checkColor: 'transparent',
    checked: true
  };

  toggleSize = size => this.setState({
    size
  });

  toggleCheckColor = () => {
    const { checkColor } = this.state;

    return this.setState({
      checkColor: checkColor === 'transparent' ? '#3D3D46' : 'transparent'
    });
  };

  toggleChecked = () => {
    const { checked } = this.state;

    return this.setState({
      checked: !checked
    });
  };

  render() {
    const { safeArea } = this.props;
    const { size, checkColor, checked } = this.state;
    const styles = getStyles(safeArea);

    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <Text type="heading" style={styles.headingLarge}>Icons</Text>
          <View style={styles.row}>
            {map(icons, (Icon, name) => {
              const iconProps = {
                size,
                checkColor
              };

              if (name === 'Checkmark') {
                iconProps.checked = checked;
              }

              return (
                <View key={name} style={styles.icon}>
                  <Icon {...iconProps} />
                  <Text type="body-lighter" style={styles.label}>{name}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.buttons}>
            <Button
              style={styles.button}
              labelText="Icons @ 14"
              onPress={() => this.toggleSize(14)}
            />
            <Button
              style={styles.button}
              labelText="Icons @ 28"
              onPress={() => this.toggleSize(28)}
            />
            <Button
              style={styles.button}
              labelText="Icons @ 56"
              onPress={() => this.toggleSize(56)}
            />
            <Button
              style={styles.button}
              labelText={`CheckColor @ ${checkColor === 'transparent' ? '#3D3D46' : 'transparent'}`}
              onPress={this.toggleCheckColor}
            />
            <Button
              style={styles.button}
              labelText={`Checkmark @ ${checked ? 'false' : 'true'}`}
              onPress={this.toggleChecked}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

IconExample.propTypes = propTypes;

export default withSafeArea(IconExample);
