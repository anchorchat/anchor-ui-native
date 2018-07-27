import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import getStyles from './styles';
import Text from '../../text';

const propTypes = {
  timeText: PropTypes.node.isRequired,
  timeTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  align: PropTypes.oneOf(['right', 'left']).isRequired,
  statusIcon: PropTypes.node,
  style: ViewPropTypes.style
};

const defaultProps = {
  statusIcon: null,
  style: {}
};

const MessageTime = ({
  timeText,
  align,
  statusIcon,
  timeTextProps,
  style
}) => {
  const styles = getStyles();

  return (
    <View style={[styles.container, style]}>
      <Text type={align === 'right' ? 'time-contrast' : 'time'} {...timeTextProps}>{timeText}</Text>
      {statusIcon}
    </View>
  );
};

MessageTime.propTypes = propTypes;
MessageTime.defaultProps = defaultProps;

export default MessageTime;
