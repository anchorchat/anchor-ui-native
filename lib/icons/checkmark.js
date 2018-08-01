import React from 'react';
import PropTypes from 'prop-types';
import { Path, G, Circle } from 'react-native-svg';
import ResizeableSvg from '../resizeable-svg';

const displayName = 'IconCheckmark';

const propTypes = {
  /** Icon color */
  color: PropTypes.string,
  /** Unchecked icon color */
  uncheckedColor: PropTypes.string,
  /** Check color */
  checkColor: PropTypes.string,
  /** Icon size */
  size: PropTypes.number,
  /** Checkmark checked */
  checked: PropTypes.bool
};

const defaultProps = {
  color: '#8E8E93',
  uncheckedColor: '#8E8E93',
  checkColor: 'transparent',
  size: 28,
  checked: false
};

const Checkmark = ({
  color,
  uncheckedColor,
  checkColor,
  size,
  checked,
  ...custom
}) => (
  <ResizeableSvg size={size} {...custom}>
    {
      checked
        ? (
          <G>
            <Path d="m20.4002404 10.5444712-8.0348558 8.0709134h-.0060096c-.1021635.1021635-.3786058.3305289-.6971154.3305289-.2283654 0-.4867788-.126202-.703125-.3425481l-3.3653846-3.3653846c-.09615385-.0961539-.09615385-.2463943 0-.3425481l1.06971154-1.0697115c.04807692-.048077.10817308-.0721154.16826923-.0721154s.12019231.0240384.16826923.0721154l2.6682692 2.6682692 7.3317308-7.38581732c.0480769-.04807693.1081731-.07211539.1682692-.07211539.0661058 0 .126202.02403846.1682693.07211539l1.0516827 1.08774042c.108173.1021634.108173.2524038.0120192.3485577z" fill={checkColor} /> {/* eslint-disable-line max-len */}
            <Path d="m14 1.5c-6.90504808 0-12.5 5.59495192-12.5 12.5 0 6.9050481 5.59495192 12.5 12.5 12.5 6.9050481 0 12.5-5.5949519 12.5-12.5 0-6.90504808-5.5949519-12.5-12.5-12.5zm6.4002404 9.0444712-8.0348558 8.0709134h-.0060096c-.1021635.1021635-.3786058.3305289-.6971154.3305289-.2283654 0-.4867788-.126202-.703125-.3425481l-3.3653846-3.3653846c-.09615385-.0961539-.09615385-.2463943 0-.3425481l1.06971154-1.0697115c.04807692-.048077.10817308-.0721154.16826923-.0721154s.12019231.0240384.16826923.0721154l2.6682692 2.6682692 7.3317308-7.38581732c.0480769-.04807693.1081731-.07211539.1682692-.07211539.0661058 0 .126202.02403846.1682693.07211539l1.0516827 1.08774042c.108173.1021634.108173.2524038.0120192.3485577z" fill={color} /> {/* eslint-disable-line max-len */}
          </G>
        )
        : <Circle id="Oval" cx="14" cy="14" r="12.5" stroke={uncheckedColor} fill="transparent" />
    }
  </ResizeableSvg>
);

Checkmark.displayName = displayName;
Checkmark.propTypes = propTypes;
Checkmark.defaultProps = defaultProps;

export default Checkmark;
