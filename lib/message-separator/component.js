import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from '../text';
import getStyles from './styles';

const displayName = 'MessageSeparator';

const propTypes = {
  /** Override the styles of the root element */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Separator text */
  text: PropTypes.node.isRequired,
  /**
   * Custom props for the value Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  textProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  style: {},
  textProps: {}
};

/** Separate messages */
const MessageSeparator = ({
  style,
  text,
  textProps,
  theme,
  ...custom
}) => {
  const styles = getStyles(theme.colors);

  return (
    <View style={[styles.container, style]} {...custom}>
      <Text type="message-separator" {...textProps}>{text}</Text>
    </View>
  );
};

MessageSeparator.displayName = displayName;
MessageSeparator.propTypes = propTypes;
MessageSeparator.defaultProps = defaultProps;

export default MessageSeparator;
