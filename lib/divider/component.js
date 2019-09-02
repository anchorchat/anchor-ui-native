import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from '../text';
import getStyles from './styles';

const displayName = 'Divider';

const propTypes = {
  /** Override the styles of the root element */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Override the styles of the line element */
  lineStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Offset for the divider on either the right or the left */
  offset: PropTypes.number,
  /** The side which the offset gets computed from */
  offsetSide: PropTypes.oneOf(['left', 'right']),
  /** The color for the offset */
  offsetColor: PropTypes.string,
  /** Render a Divider with text */
  text: PropTypes.node,
  /** Override the styles of the text element */
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**
   * Custom props for the Text component
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
  text: null,
  style: {},
  lineStyle: {},
  textStyle: {},
  textProps: {},
  offset: 0,
  offsetSide: 'left',
  offsetColor: null
};

/** Dividers group and separate content within lists and page layouts. */
const Divider = ({
  text,
  theme,
  style,
  textStyle,
  textProps,
  offset,
  offsetSide,
  offsetColor,
  lineStyle,
  ...custom
}) => {
  const styles = getStyles(theme.colors, offset, offsetColor);

  if (text) {
    return (
      <View style={[styles.text, style]} {...custom}>
        <Text type="divider" style={textStyle} {...textProps}>{text}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, style]} {...custom}>
      {offsetSide === 'left' && offset > 0 ? <View style={styles.offset} /> : null}
      <View style={[styles.line, lineStyle]} />
      {offsetSide === 'right' && offset > 0 ? <View style={styles.offset} /> : null}
    </View>
  );
};

Divider.displayName = displayName;
Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default Divider;
