import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import TextMessage from './text-message';
import ImageMessage from './image-message';
import ContactMessage from './contact-message';

const displayName = 'Message';

const propTypes = {
  /** The type of message */
  type: PropTypes.oneOf(['text', 'image', 'contact']).isRequired,
  /** Message body text */
  bodyText: PropTypes.node,
  /** Time the message was sent */
  time: PropTypes.node.isRequired,
  /** Side which the message is on */
  align: PropTypes.oneOf(['right', 'left']),
  /** Icon to show whether a message is sent or read. This icon renders on the right hand side of the time */
  statusIcon: PropTypes.node,
  /** Message image; source, thumbnailSource and ratio */
  image: PropTypes.shape({
    source: Image.propTypes.source.isRequired,
    thumbnailSource: Image.propTypes.source,
    ratio: PropTypes.number.isRequired
  }),
  /** Message contact; avatar, primaryText and secondaryText */
  contact: PropTypes.shape({
    avatar: PropTypes.node.isRequired,
    primaryText: PropTypes.node.isRequired,
    secondaryText: PropTypes.node.isRequired
  })
};

const defaultProps = {
  align: 'left',
  statusIcon: null
}

/** Message with optional icon */
const Message = (props) => {
  const { type } = props;
  switch(type) {
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
