/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconShare';

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

const Share = ({ color, size, ...custom }) => (
  <ResizeableSvg size={size} {...custom}>
    <Path d="m14.8973926 9.75770153v9.46058537c0 .4519461-.3486442.8393285-.8005903.865154-.484228.0258255-.8780668-.3615569-.8780668-.8393285v-9.49086888h.0003715v-5.41243924l-3.0796901 3.04740823c-.32927501.32927504-.865154.32281867-1.18797267-.00645638-.32927504-.32927504-.32281867-.86515403.00645638-1.1879727l4.51946139-4.45489762c.0774764-.0710201.1678657-.13558384.2647113-.17432208.1033019-.04519461.2130603-.06456373.3228186-.06456373.2130604 0 .4261207.08393285.58753.23888581l4.5194614 4.45489762c.329275.32927505.329275.85869766.0064563 1.1879727-.329275.32927505-.8586976.32927505-1.1879727.00645638l-3.0926028-3.04740823v5.41689725zm-3.3050848-.56539384v1.47560251h-5.98558778v14.3461539h16.77354748v-14.3461539h-5.9802674v-1.47560251h7.6923077v17.30769231h-20.1923077v-17.30769231z" fill={color} />
  </ResizeableSvg>
);

Share.displayName = displayName;
Share.propTypes = propTypes;
Share.defaultProps = defaultProps;

export default Share;
