import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import TextMessage from './text-message';
import ImageMessage from './image-message';

const displayName = 'Message';

const propTypes = {
  /** The type of message */
  type: PropTypes.string.isRequired,
  /** Body text of the message */
  bodyText: PropTypes.node.isRequired,
  /** Time that the message was sent */
  time: PropTypes.node.isRequired,
  /** Side which the message is on */
  align: PropTypes.oneOf(['right', 'left']),
  /** Icon to show whether a message is sent/read. This icon renders besides the time */
  statusIcon: PropTypes.node,
  image: Image.propTypes.source
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
    default:
      return null;
  }
};

Message.displayName = displayName;
Message.propTypes = propTypes;
Message.defaultProps = defaultProps;

export default Message;
