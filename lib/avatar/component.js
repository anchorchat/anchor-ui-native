import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text as NativeText, ViewPropTypes } from 'react-native';
import { LinearGradient } from 'expo';
import isEmpty from 'lodash/isEmpty';
import getStyles from './styles';
import Text from '../text';
import Touchable from '../touchable';

const displayName = 'Avatar';

const propTypes = {
  /** Override the styles of the root element */
  style: ViewPropTypes.style,
  /** Image source */
  source: Image.propTypes.source,
  /** Avatar text, styling is optimized for two characters. If you want to render more than two characters, you should decrease fontSize using textStyle. */ // eslint-disable-line max-len
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
  /** Avatar type; 'circle' or 'square' */
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
  /**
   * Props for LinearGradient component. Passing this wil make the text avatar background a gradient
   *
   * See https://docs.expo.io/versions/latest/sdk/linear-gradient#props for available props.
   */
  linearGradientProps: PropTypes.object // eslint-disable-line react/forbid-prop-types
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
  linearGradientProps: {}
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
  linearGradientProps,
  ...custom
}) => {
  const styles = getStyles(size, type, color);

  let child = content;

  if (text) {
    child = <Text type="avatar" style={[styles.text, textStyle]} {...textProps}>{text}</Text>;
  }

  if (text && !isEmpty(linearGradientProps)) {
    child = (
      <LinearGradient style={styles.gradient} {...linearGradientProps}>
        <Text type="avatar" style={[styles.text, textStyle]} {...textProps}>{text}</Text>
      </LinearGradient>
    );
  }

  if (source) {
    child = <Image style={styles.image} source={source} />;
  }

  const Component = onPress || onLongPress ? Touchable : View;
  const opacity = onPress || onLongPress ? true : null;

  return (
    <Component
      style={[styles.container, style]}
      onPress={onPress}
      onLongPress={onLongPress}
      opacity={opacity}
      {...custom}
    >
      {child}
    </Component>
  );
};

Avatar.displayName = displayName;
Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
