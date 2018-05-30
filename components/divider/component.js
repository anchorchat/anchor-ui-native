import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from '../text';
import getStyles from './styles';

const displayName = 'Divider';

const propTypes = {
  text: PropTypes.node,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
  style: View.propTypes.style
};

const defaultProps = {
  text: null,
  style: {}
};

const Divider = ({ text, theme, style }) => {
  const styles = getStyles(theme.colors);

  if (text) {
    return <View style={[styles.text, style]}><Text type="divider">{text}</Text></View>
  }

  return <View style={[styles.line, style]} />
};

Divider.displayName = displayName;
Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default Divider;
