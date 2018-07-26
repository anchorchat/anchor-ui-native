/* eslint global-require: [0] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';
import uuid from 'uuid';
import format from 'date-fns/format';
import subDays from 'date-fns/sub_days';
import subMinutes from 'date-fns/sub_minutes';
import _ from 'lodash';
import { Ionicons } from '@expo/vector-icons';
import {
  MessageInput,
  withSafeArea,
  Message,
  Avatar,
  Lightbox,
  Text,
  MessageSeparator
} from '../anchor-ui-native';
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

const getStyles = safeArea => (
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
    },
    footer: {
      paddingLeft: 11,
      paddingRight: 11,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    leftHeaderButton: {
      paddingLeft: 17,
      color: colors.white
    },
    lightboxHeading: {
      textAlign: 'center'
    },
    time: {
      color: colors.white,
      textAlign: 'center'
    },
    description: {
      marginLeft: 17,
      marginBottom: 4,
      marginTop: 8
    }
  })
);

const INITIAL_STATE = [
  {
    key: uuid.v4(),
    type: 'contact',
    time: subMinutes(new Date(), '1'),
    align: 'right',
    contact: {
      avatar: <Avatar size={32} text="MT" textStyle={{ fontSize: 16 }} color="green" />,
      primaryText: 'Marvin Timothy',
      secondaryText: '+31 6 12345678'
    }
  },
  {
    key: uuid.v4(),
    type: 'image',
    time: subMinutes(new Date(), '3'),
    body: 'The night sky looks amazing in this picture!',
    align: 'right',
    image: {
      source: { uri: 'https://images.pexels.com/photos/412026/pexels-photo-412026.jpeg' },
      thumbnailSource: { uri: 'https://images.pexels.com/photos/412026/pexels-photo-412026.jpeg?&w=48' }, // eslint-disable-line max-len
      ratio: 2 / 3
    }
  },
  { date: format(new Date(), 'MMMM D'), key: uuid.v4() },
  {
    key: uuid.v4(),
    type: 'contact',
    time: subMinutes(new Date(), '5'),
    align: 'left',
    contact: {
      avatar: <Avatar size={32} text="CA" textStyle={{ fontSize: 16 }} color="purple" />,
      primaryText: 'Curtis Adams',
      secondaryText: '+32 412345678'
    }
  },
  {
    key: uuid.v4(),
    type: 'text',
    time: subMinutes(new Date(), '10'),
    body: 'It could also be lots of other people. It also could be a wordsmith sitting on their bed that weights 400 pounds.', // eslint-disable-line max-len
    align: 'right'
  },
  { date: format(subDays(new Date(), 14), 'MMMM D'), key: uuid.v4() },
  {
    key: uuid.v4(),
    type: 'image',
    time: subMinutes(new Date(), '15'),
    body: 'The weather was really nice yesterday!',
    align: 'left',
    image: {
      source: { uri: 'https://images.pexels.com/photos/365341/pexels-photo-365341.jpeg' },
      thumbnailSource: { uri: 'https://images.pexels.com/photos/365341/pexels-photo-365341.jpeg?&w=48' }, // eslint-disable-line max-len
      ratio: 3 / 2
    }
  },
  {
    key: uuid.v4(),
    type: 'text',
    time: subMinutes(new Date(), '20'),
    body: 'Tremblant is based in Canada and has over 90 runs millions of skiers each year.',
    align: 'left'
  },
  { date: format(subDays(new Date(), 32), 'MMMM D'), key: uuid.v4() }
];

class MessageSeparatorExample extends Component {
  state = {
    message: '',
    messages: INITIAL_STATE,
    lightbox: {
      visible: false,
      data: {}
    }
  }

  showLightbox = (key) => {
    const { messages } = this.state;

    const message = _.find(messages, { key });

    this.setState({
      lightbox: {
        visible: true,
        data: message
      }
    });
  }

  hideLightbox = () => {
    this.setState({
      lightbox: {
        visible: false,
        data: {}
      }
    });
  }

  handleMessageChange = value => this.setState({ message: value })

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
    });
  }

  renderMessage = ({ item }) => {
    if (item.date) {
      return <MessageSeparator text={item.date} />;
    }

    return (
      <Message
        type={item.type}
        bodyText={item.body}
        align={item.align}
        image={item.image}
        contact={item.contact}
        timeText={format(item.time, 'HH:mm')}
        onImagePress={() => this.showLightbox(item.key)}
      />
    );
  }

  render() {
    const { message, messages, lightbox } = this.state;
    const { safeArea } = this.props;
    const styles = getStyles(safeArea);

    return (
      <ImageBackground
        source={require('../assets/images/background.jpg')}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <KeyboardAvoidingView
          style={styles.wrapper}
          behavior="padding"
          keyboardVerticalOffset={45 + safeArea.top}
        >
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
            rightIcon={
              message
                ? (
                  <TouchableOpacity onPress={this.handleMessageSend}>
                    <Send color={colors.primary} />
                  </TouchableOpacity>
                )
                : <Camera />
            }
          />
        </KeyboardAvoidingView>
        <Lightbox
          headerProps={{
            primaryText: 'Lightbox',
            leftButton: (
              <TouchableOpacity onPress={this.hideLightbox}>
                <Text type="navigation-emphasized" style={styles.leftHeaderButton}>Done</Text>
              </TouchableOpacity>
            )
          }}
          source={(lightbox.data && lightbox.data.image && lightbox.data.image.source) || {}}
          thumbnailSource={
            (lightbox.data && lightbox.data.image && lightbox.data.image.thumbnailSource) || {}
          }
          visible={lightbox.visible}
          footer={(
            <View>
              <Text type="body-contrast" style={styles.description}>
                {lightbox.data && lightbox.data.body}
              </Text>
              <View style={styles.footer}>
                <Ionicons
                  name="ios-share-outline"
                  size={32}
                  color={colors.white}
                  style={styles.leftFooterButton}
                />
                <View>
                  <Text type="heading-contrast" style={styles.lightboxHeading}>
                    Christina Buchanan
                  </Text>
                  <Text type="heading-secondary" style={styles.time}>
                    {lightbox.data && format(lightbox.data.time, 'HH:mm')}
                  </Text>
                </View>
                <Ionicons
                  name="ios-trash-outline"
                  size={32}
                  color={colors.white}
                  style={styles.rightFooterButton}
                />
              </View>
            </View>
          )}
          onRequestClose={this.hideLightbox}
        />
      </ImageBackground>
    );
  }
}

MessageSeparatorExample.propTypes = propTypes;

export default withSafeArea(MessageSeparatorExample);
