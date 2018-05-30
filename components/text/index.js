import React from 'react';
import { Text as NativeText } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

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
  style: PropTypes.object
};

const defaultProps = {
  type: 'body',
  style: {}
};

const Text = ({ children, type, style }) => (
  <NativeText style={[styles[type], style]}>
    {children}
  </NativeText>
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
