import React from 'react';
import { Text as NativeText } from 'react-native';
import PropTypes from 'prop-types';
import getStyles from './styles';

const types = [
  'body',
  'body-light',
  'body-placeholder',
  'body-accent',
  'body-contrast',
  'button',
  'divider',
  'heading',
  'heading-contrast',
  'heading-placeholder',
  'navigation',
  'navigation-emphasized',
  'navigation-secondary',
  'tab',
  'tab-active',
  'time',
  'time-contrast'
];

const displayName = 'Text';

const propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(types),
  style: PropTypes.object,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  type: 'body',
  style: {}
};

const Text = ({ children, type, style, theme }) => {
  const styles = getStyles(theme.colors, theme.fonts);

  return (
    <NativeText style={[styles[type], style]}>
      {children}
    </NativeText>
  );
};

Text.displayName = displayName;
Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
