import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
      paddingBottom: 4,
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
      marginBottom: 16,
      color: colors.white
    }
  })
);

class MessageHighlightExample extends Component {
  state = {
    message: ''
  }

  handleMessageChange = (value) => this.setState({ message: value })

  render() {
    const { message } = this.state;
    const { safeArea } = this.props;
    const styles = getStyles(safeArea);

    return (
      <ImageBackground source={require('../assets/images/background.jpg')} resizeMode="cover" style={{ flex: 1 }}>
        <KeyboardAvoidingView style={styles.wrapper} behavior="padding" keyboardVerticalOffset={45 + safeArea.top}>
          <ScrollView contentContainerStyle={styles.content}>
            <Message
              type="text"
              bodyText="Tremblant is based in Canada and has over 90 runs millions of skiers each year."
              time="12:32"
            />
            <Message
              type="text"
              align="right"
              bodyText="It could also be lots of other people. It also could be a wordsmith sitting on their bed that weights 400 pounds"
              time="12:32"
              statusIcon={<Ionicons style={{ paddingLeft: 2 }} name="ios-checkmark" size={16} color={colors.white} />}
            />
          </ScrollView>
          <MessageInput
            placeholder="Message..."
            onChangeText={this.handleMessageChange}
            value={message}
            leftIcon={<Attachment />}
            rightIcon={message ? <Send color={colors.primary} /> : <Camera />}
          />
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

MessageHighlightExample.propTypes = propTypes;

export default withSafeArea(MessageHighlightExample);
