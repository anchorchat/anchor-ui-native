import React from 'react';
import PropTypes from 'prop-types';
import { View, Text as NativeText } from 'react-native';
import Text from '../text';
import getStyles from './styles';

const displayName = 'Divider';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** Render a Divider with text */
  text: PropTypes.node,
  /** Override the styles of the text element */
  textStyle: NativeText.propTypes.style,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
};

const defaultProps = {
  text: null,
  style: {},
  textStyle: {}
};

/** Dividers group and separate content within lists and page layouts. */
const Divider = ({
  text,
  theme,
  style,
  textStyle,
  ...custom
}) => {
  const styles = getStyles(theme.colors);

  if (text) {
    return (
      <View style={[styles.text, style]} {...custom}>
        <Text type="divider" style={textStyle}>{text}</Text>
      </View>
    );
  }

  return <View style={[styles.line, style]} />;
};

Divider.displayName = displayName;
Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default Divider;
