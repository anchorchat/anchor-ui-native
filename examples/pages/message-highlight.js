/* eslint global-require: [0] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { Text, MessageInput, withSafeArea, MessageHighlight } from '../anchor-ui-native';
import Attachment from '../icons/attachment';
import Send from '../icons/send';
import Camera from '../icons/camera';
import { colors } from '../anchor-ui-native/config';
import Close from '../icons/close';

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
      flex: 1
    },
    content: {
      paddingTop: 16,
      paddingLeft: 16 + safeArea.left,
      paddingRight: 16 + safeArea.right,
      paddingBottom: 16,
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

  handleMessageChange = value => this.setState({ message: value });

  render() {
    const { message } = this.state;
    const { safeArea } = this.props;
    const styles = getStyles(safeArea);

    return (
      <ImageBackground source={require('../assets/images/background.jpg')} resizeMode="cover" style={{ flex: 1 }}>
        <KeyboardAvoidingView style={styles.wrapper} behavior="padding" keyboardVerticalOffset={45 + safeArea.top}>
          <ScrollView contentContainerStyle={styles.content}>
            <Text type="heading" style={styles.headingLarge}>MessageHighlight</Text>
          </ScrollView>
          <MessageHighlight
            headerText="Christina Buchanan"
            bodyText="Tremblant is based in Canada and has over 90 runs servicing millions of skiers each year."
            closeIcon={<Close width={14} height={14} />}
          />
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
