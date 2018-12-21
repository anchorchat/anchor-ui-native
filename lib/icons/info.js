import React from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconInfo';

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

const Info = ({
  color,
  checkColor,
  size,
  ...custom
}) => (
  <ResizeableSvg size={size} {...custom}>
    <Path d="m14 1.5c-6.90504808 0-12.5 5.59495192-12.5 12.5 0 6.9050481 5.59495192 12.5 12.5 12.5 6.9050481 0 12.5-5.5949519 12.5-12.5 0-6.90504808-5.5949519-12.5-12.5-12.5zm1.1418269 18.2692308h-2.2956731v-8.6598558h2.2956731zm-1.1478365-9.6033654c-.6790866 0-1.2319712-.51682694-1.2319712-1.20192309 0-.68509616.5588943-1.19591346 1.2319712-1.19591346.6850961 0 1.2439904.5108173 1.2439904 1.19591346 0 .68509615-.5588943 1.20192309-1.2439904 1.20192309z" fill={color} /> {/* eslint-disable-line max-len */}
  </ResizeableSvg>
);

Info.displayName = displayName;
Info.propTypes = propTypes;
Info.defaultProps = defaultProps;

export default Info;
