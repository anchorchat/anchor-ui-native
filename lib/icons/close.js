/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconClose';

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

const Close = ({ color, size, ...custom }) => (
  <ResizeableSvg size={size} {...custom}>
    <Path d="m16.9621629 14 8.929039-8.93137768c.8117308-.81194343.8117308-2.14772132 0-2.95966475s-2.147159-.81194343-2.9588898 0l-8.929039 8.93137773-8.92903901-8.93137773c-.81173082-.81194343-2.14715894-.81194343-2.95888976 0-.40586541.40597171-.61534433.94290204-.61534433 1.47983237s.20947892 1.07386066.61534433 1.47983238l8.92903897 8.93137768-8.92903897 8.9313777c-.40586541.4059717-.61534433.942902-.61534433 1.4798324 0 .5369303.20947892 1.0738606.61534433 1.4798323.81173082.8119435 2.14715894.8119435 2.95888976 0l8.92903901-8.9313777 8.929039 8.9313777c.8117308.8119435 2.147159.8119435 2.9588898 0 .8117308-.8119434.8117308-2.1477213 0-2.9596647z" fill={color} />
  </ResizeableSvg>
);

Close.displayName = displayName;
Close.propTypes = propTypes;
Close.defaultProps = defaultProps;

export default Close;
