import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Platform, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight } from 'react-native';

const propTypes = {
  /** Touchable content */
  children: PropTypes.node.isRequired,
  /** Android ripple color. See https://facebook.github.io/react-native/docs/touchablenativefeedback#ripple */
  rippleColor: PropTypes.string,
  /** Android borderless ripple. See https://facebook.github.io/react-native/docs/touchablenativefeedback#ripple */
  borderlessRipple: PropTypes.bool,
  /** The color of the underlay that will show through when the touch is active. */
  underlayColor: PropTypes.string,
  /** Use TouchableOpacity */
  opacity: PropTypes.bool,
  /** Determines what the opacity of the wrapped view should be when touch is active. */
  activeOpacity: PropTypes.number
};

const defaultProps = {
  rippleColor: '#B2B2B2',
  underlayColor: '#F8F8F8',
  borderlessRipple: false,
  opacity: false,
  activeOpacity: 0.5
};

/* A platform specific wrapper for making views respond properly to touches. */
class Touchable extends PureComponent {
  render() {
    const {
      children,
      rippleColor,
      borderlessRipple,
      opacity,
      underlayColor,
      activeOpacity,
      ...custom
    } = this.props;

    if (opacity) {
      return (
        <TouchableOpacity {...custom} activeOpacity={activeOpacity}>
          {children}
        </TouchableOpacity>
      );
    }

    if (Platform.OS === 'ios') {
      return (
        <TouchableHighlight {...custom} underlayColor={underlayColor}>
          {children}
        </TouchableHighlight>
      );
    }

    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(rippleColor, borderlessRipple)}
        {...custom}
      >
        {children}
      </TouchableNativeFeedback>
    );
  }
}

Touchable.propTypes = propTypes;
Touchable.defaultProps = defaultProps;

export default Touchable;
