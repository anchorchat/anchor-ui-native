import React from 'react';
import PropTypes from 'prop-types';
import TextMessage from './text-message';

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
  statusIcon: PropTypes.node
};

/** Message with optional icon */
const Message = (props) => {
  const { type } = props;
  switch(type) {
    case 'text':
      return <TextMessage {...props} />;
    default:
      return null;
  }
};

Message.displayName = displayName;
Message.propTypes = propTypes;

export default Message;
