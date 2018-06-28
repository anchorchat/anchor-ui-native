import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from '../text';
import getStyles from './styles';

const displayName = 'DateSeparator';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** Date to be displayed */
  date: PropTypes.node.isRequired,
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
  textProps: {}
};

/** A component to separate Message components by date */
const DateSeparator = ({
  style,
  date,
  textProps,
  theme,
  ...custom
}) => {
  const styles = getStyles(theme.colors);

  return (
    <View style={[styles.container, style]} {...custom}>
      <Text type="date-separator" {...textProps}>{date}</Text>
    </View>
  );
};

DateSeparator.displayName = displayName;
DateSeparator.propTypes = propTypes;
DateSeparator.defaultProps = defaultProps;

export default DateSeparator;
