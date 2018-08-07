import React from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconDownload';

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

const Download = ({ color, size, ...custom }) => (
  <ResizeableSvg size={size} {...custom}>
    <Path d="m21.125 7.26923077h-6.353125v10.81129803l2.8440625-2.8365384c.3028125-.3004808.7896875-.3004808 1.0925.0060096.296875.3064904.296875.7992788-.0059375 1.1057692l-4.15625 4.1466346c-.1484375.1442308-.344375.2223558-.5403125.2223558-.1009375 0-.201875-.0180288-.296875-.0600961-.0890625-.0360577-.1721875-.0961539-.2434375-.1622597l-4.15625-4.1466346c-.3028125-.3004807-.30875-.7992788-.0059375-1.1057692.296875-.3064904.7896875-.3125 1.0925-.0060096l2.8440625 2.8365384v-10.81129803h-6.365c-1.30625 0-2.375 1.08173077-2.375 2.40384615v14.42307688c0 1.3221154 1.06875 2.4038462 2.375 2.4038462h14.25c1.30625 0 2.375-1.0817308 2.375-2.4038462v-14.42307688c0-1.32211538-1.06875-2.40384615-2.375-2.40384615zm-6.353125-4.98798077c0-.43269231-.344375-.78125-.771875-.78125s-.771875.34855769-.771875.78125v4.98798077h1.54375z" fill={color} /> {/* eslint-disable-line max-len */}
  </ResizeableSvg>
);

Download.displayName = displayName;
Download.propTypes = propTypes;
Download.defaultProps = defaultProps;

export default Download;
