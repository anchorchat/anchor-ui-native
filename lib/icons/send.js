import React from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconSend';

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

const Send = ({ color, size, ...custom }) => (
  <ResizeableSvg size={size} {...custom}>
    <Path d="m14 0c7.7336538 0 14 6.26634615 14 14 0 7.7336538-6.2663462 14-14 14-7.73365385 0-14-6.2663462-14-14 0-7.73365385 6.26634615-14 14-14zm5.4314879 7.90514515-12.87022507 5.60946885c-.22788467.1086834-.22087283.4347338.01051775.5364054l3.48137662 1.96682c.2068491.1156953.4627812.0911539.641583-.0631065l6.8645874-5.9179896c.045577-.0385651.1542604-.11218938.1963315-.07011836.0455769.04557696-.0245415.15075446-.0631066.19633136l-5.9390251 6.6892916c-.1647781.1858137-.1893196.4592753-.0560947.6696304l2.2753408 3.6496606c.1121894.2208728.4312279.2173669.5328996-.0070118l5.3219835-12.87022505c.1156953-.2524261-.1472486-.50835812-.3961687-.3891569z" fill={color} />
  </ResizeableSvg>
);

Send.displayName = displayName;
Send.propTypes = propTypes;
Send.defaultProps = defaultProps;

export default Send;
