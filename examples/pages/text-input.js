import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text, TextInput } from '../anchor-ui-native';
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

export default class TextInputExample extends Component {
  state = {
    defaultText: '',
    dividerText: '',
    labelText: ''
  }

  handleTextChange = (name, value) => this.setState({ [name]: value })

  render() {
    const { defaultText, dividerText, labelText } = this.state;

    return (
      <ScrollView style={styles.wrapper}>
        <Text type="heading" style={styles.headingLarge}>TextInput</Text>
        <View style={styles.item}>
          <Text type="heading" style={styles.heading}>Default</Text>
          <TextInput
            placeholder="Jot something down..."
            onChangeText={value => this.handleTextChange('defaultText', value)}
            value={defaultText}
          />
        </View>
        <View style={styles.item}>
          <Text type="heading" style={styles.heading}>With divider</Text>
          <TextInput
            placeholder="Jot something down..."
            onChangeText={value => this.handleTextChange('dividerText', value)}
            value={dividerText}
            divider
          />
        </View>
        <View style={styles.item}>
          <Text type="heading" style={styles.heading}>With label</Text>
          <TextInput
            labelText="Label"
            placeholder="Jot something down..."
            onChangeText={value => this.handleTextChange('labelText', value)}
            value={labelText}
          />
        </View>
      </ScrollView>
    );
  }
}
