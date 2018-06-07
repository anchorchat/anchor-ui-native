import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import getStyles from './styles';
import Text from '../../text';

const propTypes = {
  time: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['right', 'left']).isRequired,
  statusIcon: PropTypes.node,
};

const defaultProps = {
  statusIcon: null
}

const MessageTime = ({ time, align, statusIcon }) => {
  const styles = getStyles();

  return (
    <View style={styles.timeContainer}>
      <Text type={align === 'right' ? 'time-contrast' : 'time'}>{time}</Text>
      {statusIcon}
    </View>
  );
};

MessageTime.propTypes = propTypes;
MessageTime.defaultProps = defaultProps;

export default MessageTime;
