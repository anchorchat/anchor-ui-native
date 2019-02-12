/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconNotifications';

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

const Notifications = ({ color, size, ...custom }) => (
  <ResizeableSvg size={size} {...custom}>
    <Path d="m18.1662852 3.54545455c-.4549109.60783839-.7808661 1.31844612-.9370997 2.09090909h-10.64585217c-1.65685425 0-3 1.34314575-3 3v11.77272726c0 1.6568543 1.34314575 3 3 3h11.70833337c1.6568542 0 3-1.3431457 3-3v-8.6045644c.3365728.0685691.6849314.1045644 1.0416666.1045644.3567353 0 .7050938-.0359953 1.0416667-.1045644v8.6954735c0 2.7614237-2.2385763 5-5 5h-11.875c-2.76142375 0-5-2.2385763-5-5v-11.95454545c0-2.76142375 2.23857625-5 5-5zm4.1670481 7.31818185c-2.3011864 0-4.1666666-1.87226381-4.1666666-4.18181822s1.8654802-4.18181818 4.1666666-4.18181818c2.3011865 0 4.1666667 1.87226377 4.1666667 4.18181818s-1.8654802 4.18181822-4.1666667 4.18181822z" fill={color} />
  </ResizeableSvg>
);

Notifications.displayName = displayName;
Notifications.propTypes = propTypes;
Notifications.defaultProps = defaultProps;

export default Notifications;
