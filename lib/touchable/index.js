import React, { Children, PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight
} from 'react-native';
import pick from 'lodash/pick';
import {
  touchableHighlightProps,
  touchableOpacityProps,
  touchableNativeFeedbackProps
} from './props';

const displayName = 'Touchable';

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
  opacity: PropTypes.bool
};

const defaultProps = {
  rippleColor: '#E6E6E6',
  underlayColor: '#F8F8F8',
  borderlessRipple: false,
  opacity: false
};

/**
* A platform specific wrapper for making views respond properly to touches.
* Uses TouchableNativeFeedback for Android and TouchableHighlight for iOS.
*/
class Touchable extends PureComponent {
  render() {
    const {
      children,
      rippleColor,
      borderlessRipple,
      opacity,
      ...custom
    } = this.props;

    if (opacity) {
      const props = pick(custom, touchableOpacityProps);

      const activeOpacity = props.activeOpacity || 0.5;

      return (
        <TouchableOpacity {...props} activeOpacity={activeOpacity}>
          {Children.only(children)}
        </TouchableOpacity>
      );
    }

    if (Platform.OS === 'ios') {
      const props = pick(custom, touchableHighlightProps);

      return (
        <TouchableHighlight {...props}>
          {Children.only(children)}
        </TouchableHighlight>
      );
    }

    const props = pick(custom, touchableNativeFeedbackProps);

    return (
      <TouchableNativeFeedback
        background={
          Platform.Version >= 21
            ? TouchableNativeFeedback.Ripple(rippleColor, borderlessRipple)
            : TouchableNativeFeedback.SelectableBackground()
        }
        {...props}
      >
        {Children.only(children)}
      </TouchableNativeFeedback>
    );
  }
}

Touchable.displayName = displayName;
Touchable.propTypes = propTypes;
Touchable.defaultProps = defaultProps;

export default Touchable;
