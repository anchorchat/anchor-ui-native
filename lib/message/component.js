import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import TextMessage from './text-message';
import ImageMessage from './image-message';
import ContactMessage from './contact-message';
import VideoMessage from './video-message';
import AudioMessage from './audio-message';
import StickerMessage from './sticker-message';

const displayName = 'Message';

const propTypes = {
  /** Override the styles of the root element */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** The type of message; 'text', 'image', 'contact', 'video', 'audio' or 'giphy'. */
  type: PropTypes.oneOf([
    'text', 'image', 'contact', 'video', 'audio', 'giphy', 'sticker'
  ]).isRequired,
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
  avatarStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Override the styles of the avatar container element */
  avatarContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Side which the message is on */
  align: PropTypes.oneOf(['right', 'left']),
  /** Icon to show whether a message is sent or read.
   * This icon renders on the right hand side of the time
   */
  statusIcon: PropTypes.node,
  /** Message image; source, thumbnailSource and ratio */
  image: PropTypes.shape({
    source: PropTypes.any.isRequired,
    thumbnailSource: PropTypes.any,
    ratio: PropTypes.number
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
  imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
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
  audio: {},
  avatar: null,
  bodyText: null,
  bodyTextProps: {},
  enableHyperlinks: false,
  headerText: null,
  headerTextProps: {},
  hyperlinkProps: {},
  imageProps: {},
  imageSize: 210,
  onImageLongPress: null,
  onImagePress: null,
  primaryTextProps: {},
  progress: null,
  progressProps: {},
  secondaryTextProps: {},
  statusIcon: null,
  style: {},
  timeTextProps: {},
  videoSize: 210
};

/** Message with three types */
const Message = ({
  align,
  audio,
  avatar,
  avatarContainerStyle,
  avatarStyle,
  bodyText,
  bodyTextProps,
  contact,
  enableHyperlinks,
  headerText,
  headerTextProps,
  hyperlinkProps,
  image,
  imageComponent,
  imageProps,
  imageSize,
  imageStyle,
  onImageLongPress,
  onImagePress,
  primaryTextProps,
  progress,
  progressProps,
  secondaryTextProps,
  statusIcon,
  style,
  theme,
  timeText,
  timeTextProps,
  type,
  video,
  videoSize
}) => {
  let content;

  switch (type) {
    case 'text':
      content = (
        <TextMessage
          align={align}
          bodyText={bodyText}
          bodyTextProps={bodyTextProps}
          enableHyperlinks={enableHyperlinks}
          headerText={headerText}
          headerTextProps={headerTextProps}
          hyperlinkProps={hyperlinkProps}
          statusIcon={statusIcon}
          style={style}
          theme={theme}
          timeText={timeText}
          timeTextProps={timeTextProps}
        />
      );
      break;
    case 'image':
    case 'giphy':
      content = (
        <ImageMessage
          align={align}
          bodyText={bodyText}
          bodyTextProps={bodyTextProps}
          enableHyperlinks={enableHyperlinks}
          hyperlinkProps={hyperlinkProps}
          image={image}
          imageComponent={imageComponent}
          imageProps={imageProps}
          imageSize={imageSize}
          imageStyle={imageStyle}
          onImageLongPress={onImageLongPress}
          onImagePress={onImagePress}
          progress={progress}
          progressProps={progressProps}
          statusIcon={statusIcon}
          style={style}
          theme={theme}
          timeText={timeText}
          timeTextProps={timeTextProps}
        />
      );
      break;
    case 'sticker':
      content = (
        <StickerMessage
          align={align}
          image={image}
          imageComponent={imageComponent}
          imageProps={imageProps}
          imageSize={imageSize}
          imageStyle={imageStyle}
          onImageLongPress={onImageLongPress}
          onImagePress={onImagePress}
          statusIcon={statusIcon}
          style={style}
          theme={theme}
          timeText={timeText}
          timeTextProps={timeTextProps}
        />
      );
      break;
    case 'contact':
      content = (
        <ContactMessage
          align={align}
          contact={contact}
          headerText={headerText}
          headerTextProps={headerTextProps}
          primaryTextProps={primaryTextProps}
          secondaryTextProps={secondaryTextProps}
          statusIcon={statusIcon}
          style={style}
          theme={theme}
          timeText={timeText}
          timeTextProps={timeTextProps}
        />
      );
      break;
    case 'video':
      content = (
        <VideoMessage
          align={align}
          bodyText={bodyText}
          bodyTextProps={bodyTextProps}
          enableHyperlinks={enableHyperlinks}
          hyperlinkProps={hyperlinkProps}
          statusIcon={statusIcon}
          style={style}
          theme={theme}
          timeText={timeText}
          timeTextProps={timeTextProps}
          video={video}
          videoSize={videoSize}
        />
      );
      break;
    case 'audio':
      content = (
        <AudioMessage
          align={align}
          audio={audio}
          headerText={headerText}
          headerTextProps={headerTextProps}
          statusIcon={statusIcon}
          style={style}
          theme={theme}
          timeText={timeText}
          timeTextProps={timeTextProps}
          progressProps={progressProps}
        />
      );
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
