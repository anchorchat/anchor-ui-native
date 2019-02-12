/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconChevronRight';

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

const ChevronRight = ({ color, size, ...custom }) => (
  <ResizeableSvg size={size} {...custom}>
    <Path d="m19.1836166 26.5077688c-.5566679 0-1.0919254-.2076799-1.5201315-.6273219l-10.36258649-10.3625865c-.40679575-.4025137-.62089878-.9463353-.62089878-1.5137084 0-.567373.21410303-1.1133357.62089878-1.5137084l10.36258649-10.36258647c.8350018-.83714284 2.1838509-.83714284 3.040263 0 .8350018.83714283.8350018 2.19241499 0 3.0274168l-8.8638653 8.84887807 8.8638653 8.8488781c.8350018.8350018.8350018 2.192415 0 3.0274168-.4282061.419642-.9848739.6273219-1.5201315.6273219" fill={color} transform="matrix(-1 0 0 -1 28.01 28.007768)" />
  </ResizeableSvg>
);

ChevronRight.displayName = displayName;
ChevronRight.propTypes = propTypes;
ChevronRight.defaultProps = defaultProps;

export default ChevronRight;
