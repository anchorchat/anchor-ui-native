import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import TextMessage from './text-message';
import ImageMessage from './image-message';
import ContactMessage from './contact-message';

const displayName = 'Message';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** The type of message; 'text', 'image' or 'contact' */
  type: PropTypes.oneOf(['text', 'image', 'contact']).isRequired,
  /** Message body text */
  bodyText: PropTypes.node,
  /**
   * Custom props for the body Text component for 'text' and 'image' messages
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  bodyTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Time the message was sent */
  timeText: PropTypes.node.isRequired,
  /**
   * Custom props for the time Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  timeTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
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
};

const defaultProps = {
  align: 'left',
  statusIcon: null,
  style: {},
  bodyTextProps: {},
  timeTextProps: {},
  imageProps: {},
  primaryTextProps: {},
  secondaryTextProps: {},
  onImagePress: null,
  imageSize: 210
};

/** Message with three types */
const Message = (props) => {
  const { type } = props;

  switch (type) {
    case 'text':
      return <TextMessage {...props} />;
    case 'image':
      return <ImageMessage {...props} />;
    case 'contact':
      return <ContactMessage {...props} />;
    default:
      return null;
  }
};

Message.displayName = displayName;
Message.propTypes = propTypes;
Message.defaultProps = defaultProps;

export default Message;
