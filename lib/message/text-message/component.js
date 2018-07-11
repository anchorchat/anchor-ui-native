import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import getStyles from './styles';
import Text from '../../text';
import MessageTime from '../message-time';

const propTypes = {
  bodyText: PropTypes.node.isRequired,
  headerText: PropTypes.node,
  style: ViewPropTypes.style,
  bodyTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  headerTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  timeTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  timeText: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['right', 'left']).isRequired,
  statusIcon: PropTypes.node,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  statusIcon: null,
  headerText: null,
  style: {}
};

const TextMessage = ({
  bodyText,
  timeText,
  align,
  statusIcon,
  bodyTextProps,
  timeTextProps,
  style,
  theme,
  headerText,
  headerTextProps,
  ...custom
}) => {
  const styles = getStyles(theme.colors, align);

  return (
    <View style={[styles.container, style]} {...custom}>
      {
        headerText && align === 'left'
        ? <Text type="heading-message" style={styles.header} {...headerTextProps}>{headerText}</Text>
        : null
      }
      <Text type={align === 'right' ? 'body-contrast' : 'body'} {...bodyTextProps}>{bodyText}</Text>
      <MessageTime
        align={align}
        statusIcon={statusIcon}
        timeText={timeText}
        timeTextProps={timeTextProps}
      />
    </View>
  );
};

TextMessage.propTypes = propTypes;
TextMessage.defaultProps = defaultProps;

export default TextMessage;
