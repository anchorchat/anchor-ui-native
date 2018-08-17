import React from 'react';
import { Text as NativeText } from 'react-native';
import PropTypes from 'prop-types';
import getStyles from './styles';
import types from './types';

const displayName = 'Text';

const propTypes = {
  /** Override the styles of the root element */
  style: NativeText.propTypes.style,
  /** Text content */
  children: PropTypes.node.isRequired,
  /** Type of style to render */
  type: PropTypes.oneOf(types),
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  type: 'body',
  style: {}
};

/** Text element with different types of styles. */
const Text = ({
  children,
  type,
  style,
  theme,
  ...custom
}) => {
  const styles = getStyles(theme.colors, theme.fonts);

  return (
    <NativeText style={[styles[type], style]} allowFontScaling={false} {...custom}>
      {children}
    </NativeText>
  );
};

Text.displayName = displayName;
Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
