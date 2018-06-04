import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import Text from '../text';
import getStyles from './styles';

const displayName = 'Button';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** Label text */
  labelText: PropTypes.node.isRequired,
  /** Custom props for the label Text component */
  labelTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Icon for the left hand side of the Button */
  icon: PropTypes.node,
  /** Override the styles of the icon container */
  iconStyle: View.propTypes.style,
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
  /** Determines what the opacity of the wrapped view should be when touch is active. */
  activeOpacity: PropTypes.number,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  style: {},
  labelTextProps: {},
  icon: null,
  iconStyle: {},
  onPress: null,
  onLongPress: null,
  activeOpacity: 0.5
};

/** Button with optional icon */
const Button = ({
  style,
  labelText,
  labelTextProps,
  icon,
  iconStyle,
  onPress,
  onLongPress,
  activeOpacity,
  theme,
  ...custom
}) => {
  const styles = getStyles(theme.colors);

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      underlayColor={theme.colors.lighterGray}
      style={styles.touchableHighlight}
      activeOpacity={activeOpacity}
      {...custom}
    >
      <View style={[styles.container, style]}>
        {icon ? <View style={[styles.icon, iconStyle]}>{icon}</View> : null}
        <Text type="button" {...labelTextProps}>{labelText}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.displayName = displayName;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
