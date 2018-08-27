import React from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconPlay';

const propTypes = {
  /** Icon color */
  color: PropTypes.string,
  /** Check color */
  checkColor: PropTypes.string,
  /** Icon size */
  size: PropTypes.number
};

const defaultProps = {
  color: '#8E8E93',
  checkColor: 'transparent',
  size: 28
};

const Play = ({
  color,
  checkColor,
  size,
  ...custom
}) => (
  <ResizeableSvg size={size} {...custom}>
    <Path d="m4.2 1.5v25l19.6078431-12.5z" fill={color} />
  </ResizeableSvg>
);

Play.displayName = displayName;
Play.propTypes = propTypes;
Play.defaultProps = defaultProps;

export default Play;
