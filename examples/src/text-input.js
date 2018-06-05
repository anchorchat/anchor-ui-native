import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text, TextInput } from '../anchor-ui-native';

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
      <ScrollView style={[styles.wrapper]}>
        <View style={styles.item}>
          <Text>Default TextInput</Text>
          <TextInput
            placeholder="Jot something down..."
            onChangeText={(value) => this.handleTextChange('defaultText', value)}
            value={defaultText}
          />
        </View>
        <View style={styles.item}>
          <Text>TextInput with divider</Text>
          <TextInput
            placeholder="Jot something down..."
            onChangeText={(value) => this.handleTextChange('dividerText', value)}
            value={dividerText}
            divider
          />
        </View>
        <View style={styles.item}>
          <Text>TextInput with label</Text>
          <TextInput
            labelText="Label"
            placeholder="Jot something down..."
            onChangeText={(value) => this.handleTextChange('labelText', value)}
            value={labelText}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8
  },
  item: {
    margin: 8
  }
});
