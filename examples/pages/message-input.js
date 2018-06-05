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
      <ScrollView style={styles.wrapper}>
        <Text type="heading" style={styles.headingLarge}>MessageInput</Text>
        <View style={styles.item}>
          <Text type="heading" style={styles.heading}>Default</Text>
          <MessageInput
            placeholder="Message..."
            onChangeText={(value) => this.handleMessageChange('defaultMessage', value)}
            value={defaultMessage}
          />
        </View>
        <View style={styles.item}>
          <Text type="heading" style={styles.heading}>With leftIcon</Text>
          <MessageInput
            placeholder="Message..."
            onChangeText={(value) => this.handleMessageChange('leftIconMessage', value)}
            value={leftIconMessage}
            leftIcon={<Attachment />}
          />
        </View>
        <View style={styles.item}>
          <Text type="heading" style={styles.heading}>With rightIcon</Text>
          <MessageInput
            placeholder="Message..."
            onChangeText={(value) => this.handleMessageChange('rightIconMessage', value)}
            value={rightIconMessage}
            rightIcon={rightIconMessage ? <Send color={colors.primary} /> : <Camera />}
          />
        </View>
        <View style={styles.item}>
          <Text type="heading" style={styles.heading}>With left- and rightIcon</Text>
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
