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
    <Path d="m6.43362734 1.8136104 17.40134756 10.2581219c1.4668923.8661865 1.4668923 2.9900305 0 3.855092l-17.40134756 10.2592469c-1.49051558.8808103-3.37362734-.1968606-3.37362734-1.9269836v-20.51849366c0-1.73124791 1.88311176-2.80666896 3.37362734-1.92698354" fill={color} /> {/* eslint-disable-line max-len */}
  </ResizeableSvg>
);

Play.displayName = displayName;
Play.propTypes = propTypes;
Play.defaultProps = defaultProps;

export default Play;
