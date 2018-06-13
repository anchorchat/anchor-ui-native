import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
};

const defaultProps = {
  color: '#8E8E93',
  size: 28
};

const ChevronRight = ({ color, size, ...custom }) => (
  <Svg height={size} viewBox="0 0 28 28" width={size} {...custom}>
    <Path d="m9.51 17.520375c-.39 0-.765-.1455-1.065-.4395l-7.26-7.26c-.285-.282-.435-.663-.435-1.0605s.15-.78.435-1.0605l7.26-7.26c.585-.5865 1.53-.5865 2.13 0 .585.5865.585 1.536 0 2.121l-6.21 6.1995 6.21 6.1995c.585.585.585 1.536 0 2.121-.3.294-.69.4395-1.065.4395" fill={color} transform="matrix(-1 0 0 -1 19.76375 22.520376)" />
  </Svg>
);

ChevronRight.propTypes = propTypes;
ChevronRight.defaultProps = defaultProps;

export default ChevronRight;
