import React from 'react';
import PropTypes from 'prop-types';
import TextMessage from './text-message';

const displayName = 'Message';

const propTypes = {
  type: PropTypes.string.isRequired
};

const defaultProps = {
  style: {}
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
Message.defaultProps = defaultProps;

export default Message;
