import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text as NativeText, TouchableOpacity } from 'react-native';
import getStyles from './styles';
import Text from '../text';

const displayName = 'Avatar';

const propTypes = {
  /** Image source */
  source: Image.propTypes.source,
  /** Avatar text */
  text: PropTypes.node,
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
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** Override the styles of the text element */
  textStyle: NativeText.propTypes.style
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
  textStyle: {}
};

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
  onLongPress
}) => {
  const styles = getStyles(size, type, color);

  let child = content;

  if (text) {
    child = <Text type="avatar" style={[styles.text, textStyle]}>{text}</Text>
  }

  if (source) {
    child = <Image style={styles.image} source={source} />
  }

  const Component = onPress || onLongPress ? TouchableOpacity : View;

  return (
    <Component style={[styles.container, style]} onPress={onPress} onLongPress={onLongPress}>
      {child}
    </Component>
  );
}

Avatar.displayName = displayName;
Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
