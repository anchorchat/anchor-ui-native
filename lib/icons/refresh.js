import React from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconRefresh';

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

const Refresh = ({ color, size, ...custom }) => (
  <ResizeableSvg size={size} {...custom}>
    <Path d="m24.1426959 15.8301224c-.441189 0-.819351.3292483-.8537294.7589453-.3953512 4.6373788-4.400431 8.2535298-9.2706998 8.2535298-5.12810642 0-9.30507806-4.0402675-9.30507806-9.0068946 0-4.8885005 4.0451879-8.88412408 9.06442956-9.00689464.1317837-.00558048.2349188.09486816.2349188.2232192v2.8069814c0 .70314044.7964322 1.12725694 1.4095131.75336474l5.5119982-3.75566294c.5729728-.35157024.5729728-1.16073983 0-1.51231006l-5.5062685-3.70543867c-.6130809-.37389216-1.4095131.05022432-1.4095131.75336479v2.55027932c0 .12277056-.0974053.2232192-.2234593.2232192-5.98183597.11719008-10.7948074 4.84943706-10.7948074 10.66987766 0 5.8929868 4.93329572 10.6642971 11.0182667 10.6642971 5.7755658 0 10.508321-4.2802281 10.9781587-9.7714204.0458378-.4855017-.3552431-.8984572-.8537295-.8984572z" fill={color} />
  </ResizeableSvg>
);

Refresh.displayName = displayName;
Refresh.propTypes = propTypes;
Refresh.defaultProps = defaultProps;

export default Refresh;
