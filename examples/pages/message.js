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
import subMinutes from 'date-fns/sub_minutes';
import _ from 'lodash';
import { Ionicons } from '@expo/vector-icons';
import {
  MessageInput,
  withSafeArea,
  Message,
  Avatar,
  Lightbox,
  Text
} from '../anchor-ui-native';
import Attachment from '../anchor-ui-native/icons/attachment';
import Send from '../anchor-ui-native/icons/send';
import Camera from '../anchor-ui-native/icons/camera';
import { colors } from '../anchor-ui-native/config';
import Video from '../components/video';

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
    type: 'sticker',
    time: subMinutes(new Date(), '3'),
    align: 'left',
    image: {
      source: { uri: 'https://shop.anchor.fish/products/dfa4f7a4-fede-4298-bd9d-02ac129b8a68/data/pig.c495a694.png' } // eslint-disable-line max-len
    }
  },
  {
    key: uuid.v4(),
    type: 'sticker',
    time: subMinutes(new Date(), '3'),
    align: 'right',
    image: {
      source: { uri: 'https://shop.anchor.fish/products/dfa4f7a4-fede-4298-bd9d-02ac129b8a68/data/deer.00c772d9.png' } // eslint-disable-line max-len
    }
  },
  {
    key: uuid.v4(),
    type: 'audio',
    time: subMinutes(new Date(), '1'),
    align: 'left',
    audio: {
      onPlay: () => console.log('play'), // eslint-disable-line no-console
      onPause: () => console.log('pause'), // eslint-disable-line no-console
      progress: 0.5,
      time: '00:42',
      isPlaying: false,
      isLoading: true
    }
  },
  {
    key: uuid.v4(),
    type: 'video',
    time: subMinutes(new Date(), '1'),
    align: 'right',
    video: {
      source: { uri: 'https://player.vimeo.com/external/274443403.hd.mp4?s=71a208a8f13ed5d7a4359a6837c18b2456001814&profile_id=175&oauth2_token_id=57447761' }, // eslint-disable-line max-len
      ratio: 1920 / 1080
    }
  },
  {
    key: uuid.v4(),
    type: 'audio',
    time: subMinutes(new Date(), '1'),
    align: 'left',
    audio: {
      onPlay: () => console.log('play'), // eslint-disable-line no-console
      onPause: () => console.log('pause'), // eslint-disable-line no-console
      progress: 0.5,
      time: '13:37',
      isPlaying: true,
      isLoading: false
    }
  },
  {
    key: uuid.v4(),
    type: 'audio',
    time: subMinutes(new Date(), '1'),
    align: 'right',
    audio: {
      onPlay: () => console.log('play'), // eslint-disable-line no-console
      onPause: () => console.log('pause'), // eslint-disable-line no-console
      progress: 0.3,
      time: '01:42',
      isPlaying: false,
      isLoading: false
    }
  },
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
    type: 'giphy',
    time: subMinutes(new Date(), '3'),
    align: 'right',
    image: {
      source: { uri: 'https://media.giphy.com/media/1AefIDWfAkcr9gVRYj/giphy.gif' },
      thumbnailSource: { uri: 'https://media.giphy.com/media/1AefIDWfAkcr9gVRYj/giphy.gif' }, // eslint-disable-line max-len
      ratio: 1
    }
  },
  {
    key: uuid.v4(),
    type: 'image',
    time: subMinutes(new Date(), '3'),
    align: 'right',
    image: {
      source: { uri: 'https://images.pexels.com/photos/412026/pexels-photo-412026.jpeg' },
      thumbnailSource: { uri: 'https://images.pexels.com/photos/412026/pexels-photo-412026.jpeg?&w=48' }, // eslint-disable-line max-len
      ratio: 2 / 3
    }
  },
  {
    key: uuid.v4(),
    type: 'contact',
    time: subMinutes(new Date(), '5'),
    align: 'left',
    contact: {
      avatar: <Avatar size={32} text="CA" textStyle={{ fontSize: 16 }} color="mediumpurple" />,
      primaryText: 'Curtis Adams',
      secondaryText: '+32 412345678'
    },
    username: 'Benjamin Grant',
    avatar: <Avatar size={32} text="BG" textStyle={{ fontSize: 16 }} color="lightsteelblue" />
  },
  {
    key: uuid.v4(),
    type: 'video',
    time: subMinutes(new Date(), '1'),
    body: 'The sunset looked amazing the other day!',
    align: 'left',
    video: {
      source: { uri: 'https://player.vimeo.com/external/191379621.hd.mp4?s=e7018ac4d78f39204192fb7027910de6bb902d3b&profile_id=172&oauth2_token_id=57447761' }, // eslint-disable-line max-len
      ratio: 1920 / 1080
    },
    avatar: <Avatar size={32} text="HB" textStyle={{ fontSize: 16 }} color="mediumvioletred" />
  },
  {
    key: uuid.v4(),
    type: 'text',
    time: subMinutes(new Date(), '10'),
    body: 'It could also be lots of other people. It also could be a wordsmith sitting on their bed that weights 400 pounds.', // eslint-disable-line max-len
    align: 'right'
  },
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
    },
    avatar: <Avatar size={32} text="CB" textStyle={{ fontSize: 16 }} color="mediumaquamarine" />
  },
  {
    key: uuid.v4(),
    type: 'text',
    time: subMinutes(new Date(), '20'),
    body: 'Tremblant is based in Canada and has over 90 runs millions of skiers each year.',
    align: 'left',
    username: 'Christina Buchanan',
    avatar: <Avatar size={32} text="CB" textStyle={{ fontSize: 16 }} color="mediumaquamarine" />
  },
  {
    key: uuid.v4(),
    type: 'text',
    time: subMinutes(new Date(), '20'),
    body: 'Hello!',
    align: 'left',
    username: 'Harvey Brock',
    avatar: <Avatar size={32} text="HB" textStyle={{ fontSize: 16 }} color="mediumvioletred" />
  }
];

class MessageExample extends Component {
  state = {
    message: '',
    messages: INITIAL_STATE,
    lightbox: {
      visible: false,
      data: {}
    }
  }

  componentDidMount() {
    this.animate();
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

  animate() {
    let progress = 0;

    this.setState({ progress });

    setTimeout(() => {
      setInterval(() => {
        progress += Math.random() / 10;

        if (progress > 1) {
          progress = 1;
        }

        this.setState({ progress });
      }, 500);
    }, 1500);
  }

  renderMessage = ({ item }) => {
    const { progress } = this.state;

    return (
      <Message
        type={item.type}
        bodyText={item.body}
        align={item.align}
        image={item.image}
        contact={item.contact}
        timeText={format(item.time, 'HH:mm')}
        headerText={item.username}
        onImagePress={() => this.showLightbox(item.key)}
        avatar={item.avatar}
        progress={progress}
        video={
          item.type === 'video'
            ? (
              <Video
                {...item.video}
                style={{ borderRadius: 4 }}
                size={210}
              />
            )
            : null
        }
        audio={item.audio}
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

MessageExample.propTypes = propTypes;

export default withSafeArea(MessageExample);
