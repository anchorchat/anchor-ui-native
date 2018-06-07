import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import getStyles from './styles';
import Text from '../../text';
import MessageTime from '../message-time';

const propTypes = {
  bodyText: PropTypes.node.isRequired,
  time: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['right', 'left']).isRequired,
  statusIcon: PropTypes.node,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  statusIcon: null
}

const TextMessage = ({ bodyText, time, align, statusIcon, theme }) => {
  const styles = getStyles(theme.colors, align);

  return (
    <View style={styles.container}>
      <Text type={align === 'right' ? 'body-contrast' : 'body'}>{bodyText}</Text>
      <MessageTime align={align} statusIcon={statusIcon} time={time} />
    </View>
  );
};

TextMessage.propTypes = propTypes;
TextMessage.defaultProps = defaultProps;

export default TextMessage;
