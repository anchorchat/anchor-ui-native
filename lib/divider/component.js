import React from 'react';
import PropTypes from 'prop-types';
import { View, Text as NativeText, ViewPropTypes } from 'react-native';
import Text from '../text';
import getStyles from './styles';

const displayName = 'Divider';

const propTypes = {
  /** Override the styles of the root element */
  style: ViewPropTypes.style,
  /** Render a Divider with text */
  text: PropTypes.node,
  /** Override the styles of the text element */
  textStyle: NativeText.propTypes.style,
  /**
   * Custom props for the Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  textProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
};

const defaultProps = {
  text: null,
  style: {},
  textStyle: {},
  textProps: {}
};

/** Dividers group and separate content within lists and page layouts. */
const Divider = ({
  text,
  theme,
  style,
  textStyle,
  textProps,
  ...custom
}) => {
  const styles = getStyles(theme.colors);

  if (text) {
    return (
      <View style={[styles.text, style]} {...custom}>
        <Text type="divider" style={textStyle} {...textProps}>{text}</Text>
      </View>
    );
  }

  return <View style={[styles.line, style]} {...custom} />;
};

Divider.displayName = displayName;
Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default Divider;
