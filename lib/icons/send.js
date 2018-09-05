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
    <Path d="m14 1.5c6.9050481 0 12.5 5.59495192 12.5 12.5 0 6.9050481-5.5949519 12.5-12.5 12.5-6.90504808 0-12.5-5.5949519-12.5-12.5 0-6.90504808 5.59495192-12.5 12.5-12.5zm4.8495427 7.05816531-11.49127232 5.00845429c-.20346845.0970388-.19720788.3881552.00939086.4789335l3.10837196 1.7560893c.1846867.1032993.4131975.0813873.572842-.0563452l6.1290959-5.2839193c.0406937-.0344331.1377325-.100169.1752959-.0626056.0406937.0406937-.021912.1346022-.0563451.1752959l-5.302701 5.9725817c-.1471233.1659051-.1690353.4100672-.0500845.5978843l2.0315542 3.2586255c.1001691.1972079.385025.1940776.4758032-.0062605l4.751771-11.49127237c.1032994-.22538045-.1314719-.45389117-.3537221-.34746152z" fill={color} /> {/* eslint-disable-line max-len */}
  </ResizeableSvg>
);

Send.displayName = displayName;
Send.propTypes = propTypes;
Send.defaultProps = defaultProps;

export default Send;
