import React from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconMute';

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

const Mute = ({ color, size, ...custom }) => (
  <ResizeableSvg size={size} {...custom}>
    <Path d="m21.97625 1.67857143c-.2475-.12276786-.5175-.17857143-.77625-.17857143-.405 0-.79875.13392857-1.125.390625l-7.335 5.859375h-5.94c-.99 0-1.8.80357143-1.8 1.78571429v8.92857141c0 .9821429.81 1.7857143 1.8 1.7857143h5.94l7.335 5.859375c.32625.2566964.73125.390625 1.125.390625.25875 0 .52875-.0558036.77625-.1785714.63-.3013393 1.02375-.9263393 1.02375-1.6071429v-21.42857141c0-.69196429-.39375-1.31696429-1.02375-1.60714286z" fill={color} /> {/* eslint-disable-line max-len */}
  </ResizeableSvg>
);

Mute.displayName = displayName;
Mute.propTypes = propTypes;
Mute.defaultProps = defaultProps;

export default Mute;
