/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconStorage';

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

const Storage = ({ color, size, ...custom }) => (
  <ResizeableSvg size={size} {...custom}>
    <Path d="m26.5 9.62222222v4.44444448c0 2.7614237-5.5964406 5-12.5 5-6.90355937 0-12.5-2.2385763-12.5-5v-4.44444448c0 2.76142378 5.59644063 4.99999998 12.5 4.99999998 6.9035594 0 12.5-2.2385762 12.5-4.99999998zm0 6.66666668v4.4444444c0 2.7614238-5.5964406 5-12.5 5-6.90355937 0-12.5-2.2385762-12.5-5v-4.4444444c0 2.7614237 5.59644063 5 12.5 5 6.9035594 0 12.5-2.2385763 12.5-5zm-12.5-3.8888889c-6.90355937 0-12.5-2.2385763-12.5-5 0-2.76142375 5.59644063-5 12.5-5 6.9035594 0 12.5 2.23857625 12.5 5 0 2.7614237-5.5964406 5-12.5 5z" fill={color} />
  </ResizeableSvg>
);

Storage.displayName = displayName;
Storage.propTypes = propTypes;
Storage.defaultProps = defaultProps;

export default Storage;
