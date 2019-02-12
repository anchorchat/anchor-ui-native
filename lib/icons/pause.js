/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconPause';

const propTypes = {
  /** Icon color */
  color: PropTypes.string,
  /** Icon size */
  size: PropTypes.number
};

const defaultProps = {
  color: '#8E8E93',
  size: 28
};

const Pause = ({ color, size, ...custom }) => (
  <ResizeableSvg size={size} {...custom}>
    <Path d="m9.6171875 26.5h-4.984375c-.3515625 0-.6328125-.28125-.6328125-.625v-23.75c0-.34375.28125-.625.6328125-.625h4.984375c.3515625 0 .6328125.28125.6328125.625v23.75c0 .34375-.28125.625-.6328125.625zm13.75 0h-4.984375c-.3515625 0-.6328125-.28125-.6328125-.625v-23.75c0-.34375.28125-.625.6328125-.625h4.984375c.3515625 0 .6328125.28125.6328125.625v23.75c0 .34375-.28125.625-.6328125.625z" fill={color} />
  </ResizeableSvg>
);

Pause.displayName = displayName;
Pause.propTypes = propTypes;
Pause.defaultProps = defaultProps;

export default Pause;
