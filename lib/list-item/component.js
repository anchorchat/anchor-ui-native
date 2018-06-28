import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text as NativeText, TouchableHighlight } from 'react-native';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import getStyles from './styles';
import Text from '../text';
import Divider from '../divider';

const displayName = 'ListItem';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
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
  iconStyle: View.propTypes.style,
  /** Button for the right hand side of the ListItem */
  rightButton: PropTypes.node,
  /** Override the styles of right button container */
  rightButtonStyle: View.propTypes.style,
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
  divider: PropTypes.bool,
  /** Override the styles of the Divider component */
  dividerStyle: View.propTypes.style,
  /** Render a counter next to secondaryText */
  counter: PropTypes.node,
  /** Override the styles of the Counter component */
  counterStyle: View.propTypes.style,
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
  divider: false,
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
  dividerStyle: {},
  counter: null,
  counterStyle: {}
};

/** ListItems are used to present multiple items vertically as a single element. */
class ListItem extends Component {
  renderPrimaryText = () => {
    const { primaryText, primaryTextProps } = this.props;

    if (isString(primaryText) || isNumber(primaryText)) {
      return (
        <Text
          type="heading"
          numberOfLines={1}
          {...primaryTextProps}
        >
          {primaryText}
        </Text>
      );
    }

    return primaryText;
  }

  renderSecondaryText = () => {
    const { secondaryText, secondaryTextProps } = this.props;

    if (isString(secondaryText) || isNumber(secondaryText)) {
      return (
        <Text type="body-light" numberOfLines={1} {...secondaryTextProps}>
          {secondaryText}
        </Text>
      );
    }

    return secondaryText;
  }

  renderTime = (styles) => {
    const { time, timeStyle, timeProps } = this.props;

    if (isString(time) || isNumber(time)) {
      return (
        <Text type="time" style={[styles.time, timeStyle]} {...timeProps}>{time}</Text>
      );
    }

    return time;
  }

  render() {
    const {
      primaryText,
      secondaryText,
      icon,
      rightButton,
      divider,
      onPress,
      onLongPress,
      style,
      primaryTextProps,
      secondaryTextProps,
      iconStyle,
      rightButtonStyle,
      dividerStyle,
      time,
      timeStyle,
      timeProps,
      theme,
      counter,
      counterStyle,
      ...custom
    } = this.props;

    const styles = getStyles();

    return (
      <TouchableHighlight
        onPress={onPress}
        onLongPress={onLongPress}
        underlayColor={theme.colors.lighterGray}
        style={styles.touchableHighlight}
        {...custom}
      >
        <View style={[styles.container, style]}>
          {icon ? <View style={[styles.icon, iconStyle]}>{icon}</View> : null}
          <View style={styles.textContainer}>
            <View style={styles.primaryTextContainer}>
              <View style={styles.text}>{this.renderPrimaryText()}</View>
              {this.renderTime(styles)}
            </View>
            {
              secondaryText
              ? (
                <View style={styles.secondaryTextContainer}>
                  <View style={styles.text}>
                    {this.renderSecondaryText()}
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
          {divider ? <Divider style={[styles.divider, dividerStyle]} /> : null}
        </View>
      </TouchableHighlight>
    );
  }
}

ListItem.displayName = displayName;
ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
