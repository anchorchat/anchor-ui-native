import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import Text from '../text';
import getStyles from './styles';
import Touchable from '../touchable';

const displayName = 'Button';

const propTypes = {
  /** Override the styles of the root element */
  style: ViewPropTypes.style,
  /** Override the styles of the container element */
  containerStyle: ViewPropTypes.style,
  /** Label text */
  labelText: PropTypes.node.isRequired,
  /**
   * Custom props for the label Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  labelTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the icon container */
  labelTextStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Icon for the left hand side of the Button */
  icon: PropTypes.node,
  /** Override the styles of the labelText container */
  iconStyle: ViewPropTypes.style,
  /**
   * Callback fired when Button is pressed
   *
   * function(event: object) => void
   */
  onPress: PropTypes.func,
  /**
   * Callback fired when Button is long pressed
   *
   * function(event: object) => void
   */
  onLongPress: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  style: {},
  containerStyle: {},
  labelTextProps: {},
  labelTextStyle: {},
  icon: null,
  iconStyle: {},
  onPress: null,
  onLongPress: null
};

/** Button with optional icon */
const Button = ({
  style,
  containerStyle,
  labelText,
  labelTextProps,
  labelTextStyle,
  icon,
  iconStyle,
  onPress,
  onLongPress,
  theme,
  ...custom
}) => {
  const styles = getStyles(theme.colors);

  return (
    <View style={[styles.root, style]}>
      <Touchable
        onPress={onPress}
        onLongPress={onLongPress}
        underlayColor={theme.colors.lighterGray}
        opacity
        {...custom}
      >
        <View style={[styles.container, containerStyle]}>
          {icon ? <View style={[styles.icon, iconStyle]}>{icon}</View> : null}
          <Text type="button" style={[styles.text, labelTextStyle]} {...labelTextProps}>
            {labelText}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

Button.displayName = displayName;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
