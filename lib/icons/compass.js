import React from 'react';
import PropTypes from 'prop-types';
import { Path, G } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconCompass';

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

const Compass = ({ color, size, ...custom }) => (
  <ResizeableSvg size={size} {...custom}>
    <G fill={color}>
      <Path d="m15.4723558 15.4723558-2.9447116-2.9447116c-.0540865-.0540865-.1502404-.0420673-.1923077.0240385l-2.97475958 5.9194711c-.06610577.1081731.06009616.234375.16826923.1682693l5.91947115-2.9747596c.0661058-.0420673.078125-.1382212.0240385-.1923077z" />
      <Path d="m14 1.5c-6.90504808 0-12.5 5.59495192-12.5 12.5 0 6.9050481 5.59495192 12.5 12.5 12.5 6.9050481 0 12.5-5.5949519 12.5-12.5 0-6.90504808-5.5949519-12.5-12.5-12.5zm2.4399038 14.9819712-9.59134611 4.8377403c-.10817307.0661058-.234375-.0600961-.16826923-.1682692l4.84375004-9.5913461c.0120192-.0180289.0240384-.0300481.0420673-.0420674l9.5853365-4.83774034c.1081731-.06610577.234375.06009616.1682692.16826923l-4.84375 9.59134611c-.0060096.0180289-.0180288.0300481-.0360577.0420674z" />
    </G>
  </ResizeableSvg>
);

Compass.displayName = displayName;
Compass.propTypes = propTypes;
Compass.defaultProps = defaultProps;

export default Compass;
