import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text, MessageInput } from '../anchor-ui-native';
import Attachment from '../icons/attachment';
import Send from '../icons/send';
import Camera from '../icons/camera';
import { colors } from '../anchor-ui-native/config';

export default class MessageInputExample extends Component {
  state = {
    defaultMessage: '',
    leftIconMessage: '',
    rightIconMessage: '',
    bothIconsMessage: ''
  }

  handleMessageChange = (name, value) => this.setState({ [name]: value })

  render() {
    const { defaultMessage, leftIconMessage, rightIconMessage, bothIconsMessage } = this.state;
    
    return (
      <ScrollView style={[styles.wrapper]}>
        <View style={styles.item}>
          <Text>Default MessageInput</Text>
          <MessageInput
            placeholder="Message..."
            onChangeText={(value) => this.handleMessageChange('defaultMessage', value)}
            value={defaultMessage}
          />
        </View>
        <View style={styles.item}>
          <Text>MessageInput with leftIcon</Text>
          <MessageInput
            placeholder="Message..."
            onChangeText={(value) => this.handleMessageChange('leftIconMessage', value)}
            value={leftIconMessage}
            leftIcon={<Attachment />}
          />
        </View>
        <View style={styles.item}>
          <Text>MessageInput with rightIcon</Text>
          <MessageInput
            placeholder="Message..."
            onChangeText={(value) => this.handleMessageChange('rightIconMessage', value)}
            value={rightIconMessage}
            rightIcon={rightIconMessage ? <Send color={colors.primary} /> : <Camera />}
          />
        </View>
        <View style={styles.item}>
          <Text>MessageInput with left- and rightIcon</Text>
          <MessageInput
            placeholder="Message..."
            onChangeText={(value) => this.handleMessageChange('bothIconsMessage', value)}
            value={bothIconsMessage}
            leftIcon={<Attachment />}
            rightIcon={bothIconsMessage ? <Send color={colors.primary} /> : <Camera />}
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
