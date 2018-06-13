import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Picker } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';

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

const items = [
  {
    label: 'JavaScript',
    value: 'js'
  },
  {
    label: 'Java',
    value: 'java'
  },
  {
    label: 'PHP',
    value: 'php'
  },
  {
    label: 'Ruby',
    value: 'ruby'
  },
  {
    label: 'Erlang',
    value: 'erlang'
  },
  {
    label: 'Python',
    value: 'python'
  }
];

export default class extends Component {
  state = {
    value: 'php'
  }

  handleValueChange = (value) => {
    this.setState({
      value
    });
  }

  render() {
    const { value } = this.state;

    return (
      <View style={styles.wrapper}>
        <Text type="heading" style={styles.headingLarge}>Picker</Text>
        <Picker
          divider
          items={items}
          selectedValue={value}
          onValueChange={this.handleValueChange}
        />
      </View>
    );
  }
}
