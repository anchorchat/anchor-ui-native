import React from 'react';
import PropTypes from 'prop-types';
import { View, Text as NativeText, TouchableHighlight, ViewPropTypes } from 'react-native';
import getStyles from './styles';
import Text from '../text';
import Divider from '../divider';

const displayName = 'ListItem';

const propTypes = {
  /** Override the styles of the root element */
  style: ViewPropTypes.style,
  /** ListItem primary text */
  primaryText: PropTypes.node.isRequired,
  /**
   * Custom props for the primary Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  primaryTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** ListItem secondary text */
  secondaryText: PropTypes.node,
  /**
   * Custom props for the secondary Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  secondaryTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Icon for the left hand side of the ListItem */
  icon: PropTypes.node,
  /** Override the styles of the icon container */
  iconStyle: ViewPropTypes.style,
  /** Button for the right hand side of the ListItem */
  rightButton: PropTypes.node,
  /** Override the styles of right button container */
  rightButtonStyle: ViewPropTypes.style,
  /** Button for the left hand side of the ListItem */
  leftButton: PropTypes.node,
  /** Override the styles of left button container */
  leftButtonStyle: ViewPropTypes.style,
  /** Render a timestamp next to primaryText */
  time: PropTypes.node,
  /** Override the styles of the time element */
  timeStyle: NativeText.propTypes.style,
  /**
   * Custom props for the time Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  timeProps: NativeText.propTypes.style,
  /** Render a Divider underneath the ListItem */
  dividerBottom: PropTypes.bool,
  /**
   * Custom props for the bottom Divider component
   *
   * See Divider for available props.
   */
  dividerBottomProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Render a Divider above the ListItem */
  dividerTop: PropTypes.bool,
  /**
   * Custom props for the top Divider component
   *
   * See Divider for available props.
   */
  dividerTopProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Render a counter next to secondaryText */
  counter: PropTypes.node,
  /** Override the styles of the Counter component */
  counterStyle: ViewPropTypes.style,
  /**
   * Callback fired when ListItem is pressed
   *
   * function(event: object) => void
   */
  onPress: PropTypes.func,
  /**
   * Callback fired when ListItem is long pressed
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
  secondaryText: null,
  icon: null,
  rightButton: null,
  onPress: null,
  onLongPress: null,
  style: {},
  primaryTextProps: {},
  secondaryTextProps: {},
  iconStyle: {},
  rightButtonStyle: {},
  time: null,
  timeStyle: {},
  timeProps: {},
  dividerBottom: false,
  dividerBottomProps: {},
  dividerTop: false,
  dividerTopProps: {},
  counter: null,
  counterStyle: {},
  leftButton: null,
  leftButtonStyle: {}
};

/** ListItems are used to present multiple items vertically as a single element. */
const ListItem = ({
  primaryText,
  secondaryText,
  icon,
  rightButton,
  onPress,
  onLongPress,
  style,
  primaryTextProps,
  secondaryTextProps,
  iconStyle,
  rightButtonStyle,
  dividerBottom,
  dividerBottomProps,
  dividerTop,
  dividerTopProps,
  time,
  timeStyle,
  timeProps,
  theme,
  counter,
  counterStyle,
  leftButton,
  leftButtonStyle,
  ...custom
}) => {
  const styles = getStyles();

  return (
    <View>
      {dividerTop ? <Divider {...dividerTopProps} /> : null}
      <TouchableHighlight
        onPress={onPress}
        onLongPress={onLongPress}
        underlayColor={theme.colors.lighterGray}
        style={styles.touchableHighlight}
        {...custom}
      >
        <View style={[styles.container, style]}>
          {
            leftButton
            ? <View style={[styles.leftButton, leftButtonStyle]}>{leftButton}</View>
            : null
          }
          {icon ? <View style={[styles.icon, iconStyle]}>{icon}</View> : null}
          <View style={styles.textContainer}>
            <View style={styles.primaryTextContainer}>
              <View style={styles.text}><Text type="heading" numberOfLines={1} {...primaryTextProps}>{primaryText}</Text></View>
              {time ? <Text type="time" style={[styles.time, timeStyle]} {...timeProps}>{time}</Text> : null}
            </View>
            {
              secondaryText
              ? (
                <View style={styles.secondaryTextContainer}>
                  <View style={styles.text}>
                    <Text type="body-light" numberOfLines={1} {...secondaryTextProps}>
                      {secondaryText}
                    </Text>
                  </View>
                  {
                    counter
                    ? <View style={styles.counter}>{counter}</View>
                    : null
                  }
                </View>
              )
              : null
            }
          </View>
          {
            rightButton
            ? <View style={[styles.rightButton, rightButtonStyle]}>{rightButton}</View>
            : null
          }
        </View>
      </TouchableHighlight>
      {dividerBottom ? <Divider {...dividerBottomProps} /> : null}
    </View>
  );
};

ListItem.displayName = displayName;
ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
