import React from 'react';
import PropTypes from 'prop-types';
import { View, Text as NativeText } from 'react-native';
import Text from '../text';
import getStyles from './styles';

const displayName = 'Divider';

const propTypes = {
  text: PropTypes.node,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
  style: View.propTypes.style,
  textStyle: NativeText.propTypes.style
};

const defaultProps = {
  text: null,
  style: {},
  textStyle: {}
};

const Divider = ({ text, theme, style, textStyle }) => {
  const styles = getStyles(theme.colors);

  if (text) {
    return (
      <View style={[styles.text, style]}>
        <Text type="divider" style={textStyle}>{text}</Text>
      </View>
    )
  }

  return <View style={[styles.line, style]} />
};

Divider.displayName = displayName;
Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default Divider;
