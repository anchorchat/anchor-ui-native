import React from 'react';
import { Text as NativeText } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import withTheme from '../with-theme';

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

const propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(types),
  style: PropTypes.object,
  theme: PropTypes.object.isRequired
};

const defaultProps = {
  type: 'body',
  style: {}
};

const Text = ({ children, type, style, theme }) => (
  <NativeText style={[styles[type], style]}>
    {children}
  </NativeText>
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default withTheme(Text);
