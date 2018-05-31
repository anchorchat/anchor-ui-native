import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
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
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  style: {},
  labelTextProps: {},
  icon: null,
  iconStyle: {}
};

/** Button with optional icon */
const Button = ({
  style,
  labelText,
  labelTextProps,
  icon,
  iconStyle,
  theme,
  ...custom
}) => {
  const styles = getStyles(theme.colors);

  return (
    <View style={[styles.container, style]} {...custom}>
      {icon ? <View style={[styles.icon, iconStyle]}>{icon}</View> : null}
      <Text type="button" {...labelTextProps}>{labelText}</Text>
    </View>
  );
};

Button.displayName = displayName;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
