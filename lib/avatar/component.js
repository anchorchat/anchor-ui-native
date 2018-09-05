import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  Text as NativeText,
  ViewPropTypes
} from 'react-native';
import {
  Svg,
  RadialGradient,
  Stop,
  Rect
} from 'react-native-svg';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import lodashSize from 'lodash/size';
import getStyles from './styles';
import Text from '../text';
import Touchable from '../touchable';

const displayName = 'Avatar';

const propTypes = {
  /** Override the styles of the root element */
  style: ViewPropTypes.style,
  /** Image source */
  source: Image.propTypes.source,
  /** Avatar text, styling is optimized for two characters. If you want to render more than two characters, you should decrease fontSize using textStyle. */
  text: PropTypes.node,
  /** Override the styles of the text element */
  textStyle: NativeText.propTypes.style,
  /**
   * Custom props for the Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  textProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Avatar icon */
  icon: PropTypes.node,
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
  /** Renders a radial gradient if supplied */
  gradientColors: PropTypes.arrayOf(PropTypes.string)
};

const defaultProps = {
  source: null,
  text: null,
  icon: null,
  size: 48,
  type: 'circle',
  color: '#B2B2B2',
  onPress: null,
  onLongPress: null,
  style: {},
  textStyle: {},
  textProps: {},
  gradientColors: []
};

/** Represent people or objects. */
const Avatar = ({
  source,
  text,
  size,
  icon,
  type,
  color,
  style,
  textStyle,
  onPress,
  onLongPress,
  textProps,
  gradientColors,
  ...custom
}) => {
  const styles = getStyles(size, type, color);

  let child = icon;

  if (text) {
    child = <Text type="avatar" style={[styles.text, textStyle]} {...textProps}>{text}</Text>;
  }

  if (!isEmpty(gradientColors)) {
    child = (
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={styles.gradient}>
        <RadialGradient
          id="grad"
          cx="50%"
          cy="2%"
          fx="50%"
          fy="2%"
          r="98%"
          gradientUnits="userSpaceOnUse"
        >
          {map(gradientColors, (c, index) => {
            const offset = (100 / (lodashSize(gradientColors) - 1)) * index;

            return <Stop key={index} offset={`${offset}%`} stopColor={c} />;
          })}
        </RadialGradient>
        <Rect fill="url(#grad)" width={size} height={size} />
        {child}
      </Svg>
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
