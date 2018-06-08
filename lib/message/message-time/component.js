import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import getStyles from './styles';
import Text from '../../text';

const propTypes = {
  timeText: PropTypes.node.isRequired,
  timeTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  align: PropTypes.oneOf(['right', 'left']).isRequired,
  statusIcon: PropTypes.node,
};

const defaultProps = {
  statusIcon: null
};

const MessageTime = ({
  timeText,
  align,
  statusIcon,
  timeTextProps
}) => {
  const styles = getStyles();

  return (
    <View style={styles.timeContainer}>
      <Text type={align === 'right' ? 'time-contrast' : 'time'} {...timeTextProps}>{timeText}</Text>
      {statusIcon}
    </View>
  );
};

MessageTime.propTypes = propTypes;
MessageTime.defaultProps = defaultProps;

export default MessageTime;
