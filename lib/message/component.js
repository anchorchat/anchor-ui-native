import React from 'react';
import PropTypes from 'prop-types';
import { Image, ViewPropTypes, View } from 'react-native';
import TextMessage from './text-message';
import ImageMessage from './image-message';
import ContactMessage from './contact-message';
import VideoMessage from './video-message';
import AudioMessage from './audio-message';

const displayName = 'Message';

const propTypes = {
  /** Override the styles of the root element */
  style: ViewPropTypes.style,
  /** The type of message; 'text', 'image', 'contact', 'video' or 'audio' */
  type: PropTypes.oneOf(['text', 'image', 'contact', 'video', 'audio']).isRequired,
  /** Message body text */
  bodyText: PropTypes.node,
  /**
   * Custom props for the body Text component for 'text' and 'image' messages
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  bodyTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Message header text, will only render in 'left' aligned messages */
  headerText: PropTypes.node,
  /**
   * Custom props for the header Text component for 'text', 'contact' and 'image' messages
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  headerTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Time the message was sent */
  timeText: PropTypes.node.isRequired,
  /**
   * Custom props for the time Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  timeTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Message avatar, will only render in 'left' aligned messages */
  avatar: PropTypes.node,
  /** Override the styles of the avatar element */
  avatarStyle: ViewPropTypes.style,
  /** Override the styles of the avatar container element */
  avatarContainerStyle: ViewPropTypes.style,
  /** Side which the message is on */
  align: PropTypes.oneOf(['right', 'left']),
  /** Icon to show whether a message is sent or read.
   * This icon renders on the right hand side of the time
   */
  statusIcon: PropTypes.node,
  /** Message image; source, thumbnailSource and ratio */
  image: PropTypes.shape({
    source: Image.propTypes.source.isRequired,
    thumbnailSource: Image.propTypes.source,
    ratio: PropTypes.number.isRequired
  }),
  /** Width for landscape images and height for portrait images */
  imageSize: PropTypes.number,
  /**
   * Custom props for the Image component for 'image' messages
   *
   * See https://facebook.github.io/react-native/docs/image.html#props for available props.
   */
  imageProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * Callback fired when Message image is pressed
   *
   * function(event: object) => void
   */
  onImagePress: PropTypes.func,
  /**
   * Callback fired when Message image is long pressed
   *
   * function(event: object) => void
   */
  onImageLongPress: PropTypes.func,
  /** Override the styles of the avatar element */
  imageStyle: ViewPropTypes.style,
  /** Custom Image component */
  imageComponent: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  /** Message contact; avatar, primaryText and secondaryText */
  contact: PropTypes.shape({
    avatar: PropTypes.node.isRequired,
    primaryText: PropTypes.node.isRequired,
    secondaryText: PropTypes.node.isRequired
  }),
  /**
   * Custom props for the primary Text component for 'contact' messages
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  primaryTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * Custom props for the secondary Text component for 'contact' messages
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  secondaryTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Make urls, fuzzy links, emails etc. clickable using https://github.com/obipawan/react-native-hyperlink */
  enableHyperlinks: PropTypes.bool,
  /** Props for the Hyperlink component, see https://github.com/obipawan/react-native-hyperlink#props for available props */
  hyperlinkProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Message video; source, thumbnailSource and ratio */
  video: PropTypes.node,
  /** Width for landscape videos and height for portrait videos */
  videoSize: PropTypes.number,
  /**
   * Audio object
   *
   * {
   *   onPlay: function(event: object) => void,
   *   onPause: function(event: object) => void,
   *   isPlaying: Boolean,
   *   isLoading: Boolean,
   *   progress: Number,
   *   time: Node
   * }
   */
  audio: PropTypes.shape({
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    isPlaying: PropTypes.bool,
    isLoading: PropTypes.bool,
    progress: PropTypes.number,
    time: PropTypes.node
  }),
  /** Display a progress indicator */
  progress: PropTypes.number,
  /**
   * Custom props for the progress indicator
   *
   * See https://github.com/oblador/react-native-progress for available props.
   */
  progressProps: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  align: 'left',
  statusIcon: null,
  style: {},
  bodyText: null,
  bodyTextProps: {},
  headerText: null,
  headerTextProps: {},
  timeTextProps: {},
  imageProps: {},
  primaryTextProps: {},
  secondaryTextProps: {},
  hyperlinkProps: {},
  onImagePress: null,
  onImageLongPress: null,
  imageSize: 210,
  videoSize: 210,
  avatar: null,
  enableHyperlinks: false,
  audio: {},
  progress: null,
  progressProps: {}
};

/** Message with three types */
const Message = (props) => {
  const {
    type,
    avatar,
    align,
    avatarContainerStyle,
    avatarStyle
  } = props;

  let content;

  switch (type) {
    case 'text':
      content = <TextMessage {...props} />;
      break;
    case 'image':
      content = <ImageMessage {...props} />;
      break;
    case 'contact':
      content = <ContactMessage {...props} />;
      break;
    case 'video':
      content = <VideoMessage {...props} />;
      break;
    case 'audio':
      content = <AudioMessage {...props} />;
      break;
    default:
      content = null;
  }

  const styles = {
    avatarContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    avatar: {
      marginLeft: 8,
      marginTop: 4
    }
  };

  if (avatar && align === 'left') {
    return (
      <View style={[styles.avatarContainer, avatarContainerStyle]}>
        <View style={[styles.avatar, avatarStyle]}>{avatar}</View>
        {content}
      </View>
    );
  }

  return content;
};

Message.displayName = displayName;
Message.propTypes = propTypes;
Message.defaultProps = defaultProps;

export default Message;
