import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from '../text';
import getStyles from './styles';

const displayName = 'Counter';

const propTypes = {
  /** Override the styles of the root element */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Override the styles of the background element */
  backgroundStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Counter value */
  value: PropTypes.number.isRequired,
  /** Counter max value, will render `<maxValue>+` if value exceeds maxValue */
  maxValue: PropTypes.number,
  /**
   * Custom props for the value Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  textProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  style: {},
  backgroundStyle: {},
  textProps: {},
  maxValue: 9
};

/** Display a (notification) counter */
const Counter = ({
  style,
  backgroundStyle,
  value,
  textProps,
  theme,
  maxValue,
  ...custom
}) => {
  const styles = getStyles(theme.colors);

  return (
    <View style={[styles.border, style]} {...custom}>
      <View style={[styles.background, backgroundStyle]}>
        <Text type="counter" {...textProps}>
          {value > maxValue ? `${maxValue}+` : value}
        </Text>
      </View>
    </View>
  );
};

Counter.displayName = displayName;
Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
