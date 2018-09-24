import React from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconMicrophone';

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

const Microphone = ({ color, size, ...custom }) => (
  <ResizeableSvg size={size} {...custom}>
    <Path d="m14 18.8076923c-2.08 0-3.7818182-1.7307692-3.7818182-3.8461538v-9.61538465c0-2.11538462 1.7018182-3.84615385 3.7818182-3.84615385s3.7818182 1.73076923 3.7818182 3.84615385v9.61538465c0 2.1153846-1.7018182 3.8461538-3.7818182 3.8461538zm5.6727273-8.6538461c.455 0 .8272727.3786057.8272727.8413461v4.1466346c0 3.359375-2.4759091 6.1418269-5.6727273 6.5564904v3.1189904h2.1272728c.455 0 .8272727.3786058.8272727.8413461 0 .4627404-.3722727.8413462-.8272727.8413462h-5.909091c-.455 0-.8272727-.3786058-.8272727-.8413462 0-.4627403.3722727-.8413461.8272727-.8413461h2.1272728v-3.1189904c-3.19681821-.4146635-5.6727273-3.1971154-5.6727273-6.5564904v-4.1466346c0-.4627404.37227273-.8413461.82727273-.8413461s.82727272.3786057.82727272.8413461v4.1466346c0 2.7163462 2.17454545 4.9278846 4.84545455 4.9278846s4.8454545-2.2115384 4.8454545-4.9278846v-4.1466346c0-.4627404.3722728-.8413461.8272728-.8413461z" fill={color} /> {/* eslint-disable-line max-len */}
  </ResizeableSvg>
);

Microphone.displayName = displayName;
Microphone.propTypes = propTypes;
Microphone.defaultProps = defaultProps;

export default Microphone;