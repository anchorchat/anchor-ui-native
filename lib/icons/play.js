/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconPlay';

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

const Play = ({ color, size, ...custom }) => (
  <ResizeableSvg size={size} {...custom}>
    <Path d="m4 2.14709437v23.70243643c0 .4999855.50776291.8124764.91397324.5624837l18.78722786-11.8512182c.3983985-.2499928.3983985-.8671623 0-1.1171551l-18.78722786-11.85121821c-.40621033-.25780502-.91397324.05468591-.91397324.55467138z" fill={color} />
  </ResizeableSvg>
);

Play.displayName = displayName;
Play.propTypes = propTypes;
Play.defaultProps = defaultProps;

export default Play;
