import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const displayName = 'IconDelete';

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

const Delete = ({ color, size, ...custom }) => (
  <Svg height={size} viewBox="0 0 28 28" width={size} {...custom}>
    <Path d="m5.03104173 5.66666667 1.72083334 18.92578123c0 1.0546875.95520833 1.9075521 2.13645833 1.9075521h10.28125c1.18125 0 2.1364583-.8528646 2.1364583-1.9075521l1.6989584-18.92578123zm4.49166667 17.25260413-.48854167-15.1692708h1.34895837l.503125 15.1692708zm5.1260417 0h-1.3125v-15.1692708h1.3125zm3.8135416 0h-1.35625l.4958334-15.1692708h1.3489583zm3.4052084-19.59635413h-2.625l-1.9177084-1.49739584c-.2697916-.20833333-.6125-.32552083-.9625-.32552083h-4.725c-.3572916 0-.7072916.1171875-.9770833.32552083l-1.91770833 1.49739584h-2.625c-1.28333334 0-2.1875.546875-2.1875 1.69270833h20.12500003c0-1.14583333-.9041667-1.69270833-2.1875-1.69270833z" fill={color} />
  </Svg>
);

Delete.defaultProps = displayName;
Delete.propTypes = propTypes;
Delete.defaultProps = defaultProps;

export default Delete;
