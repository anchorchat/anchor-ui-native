import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text as NativeText, TouchableOpacity } from 'react-native';
import getStyles from './styles';
import Text from '../text';

const displayName = 'Avatar';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** Image source */
  source: Image.propTypes.source,
  /** Avatar text */
  text: PropTypes.node,
  /** Override the styles of the text element */
  textStyle: NativeText.propTypes.style,
  /**
   * Custom props for the Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  textProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Custom content */
  content: PropTypes.node,
  /** Avatar size */
  size: PropTypes.number,
  /** Avatar type */
  type: PropTypes.oneOf(['circle', 'square']),
  /** Background color for text Avatars */
  color: PropTypes.string,
  /**
   * Callback fired when Avatar is pressed
   *
   * function(event: object) => void
   */
  onPress: PropTypes.func,
  /**
   * Callback fired when Avatar is long pressed
   *
   * function(event: object) => void
   */
  onLongPress: PropTypes.func,
  /** Determines what the opacity of the wrapped view should be when touch is active. */
  activeOpacity: PropTypes.number
};

const defaultProps = {
  source: null,
  text: null,
  content: null,
  size: 48,
  type: 'circle',
  color: '#B2B2B2',
  onPress: null,
  onLongPress: null,
  style: {},
  textStyle: {},
  textProps: {},
  activeOpacity: 0.5
};

/** Represent people or objects. */
const Avatar = ({
  source,
  text,
  size,
  content,
  type,
  color,
  style,
  textStyle,
  onPress,
  onLongPress,
  textProps,
  activeOpacity,
  ...custom
}) => {
  const styles = getStyles(size, type, color);

  let child = content;

  if (text) {
    child = <Text type="avatar" style={textStyle} {...textProps}>{text}</Text>
  }

  if (source) {
    child = <Image style={styles.image} source={source} />
  }

  const Component = onPress || onLongPress ? TouchableOpacity : View;

  return (
    <Component
      style={[styles.container, style]}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={activeOpacity}
      {...custom}
    >
      {child}
    </Component>
  );
}

Avatar.displayName = displayName;
Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
