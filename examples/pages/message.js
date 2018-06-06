import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, KeyboardAvoidingView, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import uuid from 'uuid';
import format from 'date-fns/format';
import subMinutes from 'date-fns/sub_minutes';
import { MessageInput, withSafeArea, Message } from '../anchor-ui-native';
import Attachment from '../icons/attachment';
import Send from '../icons/send';
import Camera from '../icons/camera';
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
      flex: 1
    },
    content: {
      paddingTop: 4,
      paddingLeft: safeArea.left,
      paddingRight: safeArea.right,
      paddingBottom: 4
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
      marginBottom: 16,
      color: colors.white
    }
  })
);

const INITIAL_STATE = [
  {
    key: uuid.v4(),
    type: 'image',
    time: subMinutes(new Date(), '10'),
    body: 'The night sky looks amazing in this picture!',
    align: 'right',
    image: {
      source: { uri: 'https://images.pexels.com/photos/412026/pexels-photo-412026.jpeg' },
      thumbnailSource: { uri: 'https://images.pexels.com/photos/412026/pexels-photo-412026.jpeg?&w=48' },
      ratio: 2 / 3
    }
  },
  {
    key: uuid.v4(),
    type: 'text',
    time: subMinutes(new Date(), '5'),
    body: 'It could also be lots of other people. It also could be a wordsmith sitting on their bed that weights 400 pounds.',
    align: 'right'
  },
  {
    key: uuid.v4(),
    type: 'image',
    time: subMinutes(new Date(), '10'),
    body: 'The weather was really nice yesterday!',
    align: 'left',
    image: {
      source: { uri: 'https://images.pexels.com/photos/365341/pexels-photo-365341.jpeg' },
      thumbnailSource: { uri: 'https://images.pexels.com/photos/365341/pexels-photo-365341.jpeg?&w=48' },
      ratio: 3 / 2
    }
  },
  {
    key: uuid.v4(),
    type: 'text',
    time: subMinutes(new Date(), '15'),
    body: 'Tremblant is based in Canada and has over 90 runs millions of skiers each year.',
    align: 'left'
  }
];

class MessageHighlightExample extends Component {
  state = {
    message: '',
    messages: INITIAL_STATE
  }

  handleMessageChange = (value) => this.setState({ message: value })

  handleMessageSend = () => {
    const { message, messages } = this.state;

    if (!message) {
      return false;
    }

    return this.setState({
      messages: [
        {
          key: uuid.v4(),
          type: 'text',
          body: message,
          time: new Date(),
          align: 'right'
        },
        ...messages
      ],
      message: ''
    })
  }

  renderMessage = ({ item }) => (
    <Message
      type={item.type}
      bodyText={item.body}
      align={item.align}
      image={item.image}
      time={format(item.time, 'HH:mm')}
    />
  )

  render() {
    const { message, messages } = this.state;
    const { safeArea } = this.props;
    const styles = getStyles(safeArea);

    return (
      <ImageBackground source={require('../assets/images/background.jpg')} resizeMode="cover" style={{ flex: 1 }}>
        <KeyboardAvoidingView style={styles.wrapper} behavior="padding" keyboardVerticalOffset={45 + safeArea.top}>
          <FlatList
            data={messages}
            renderItem={this.renderMessage}
            contentContainerStyle={styles.content}
            inverted
          />
          <MessageInput
            placeholder="Message..."
            onChangeText={this.handleMessageChange}
            value={message}
            leftIcon={<Attachment />}
            rightIcon={message ? <TouchableOpacity onPress={this.handleMessageSend}><Send color={colors.primary} /></TouchableOpacity> : <Camera />}
          />
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

MessageHighlightExample.propTypes = propTypes;

export default withSafeArea(MessageHighlightExample);
