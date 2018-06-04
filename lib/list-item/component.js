import React from 'react';
import PropTypes from 'prop-types';
import { View, Text as NativeText, TouchableHighlight } from 'react-native';
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
  /** Timestamp for the primary Text */
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
  dividerStyle: {}
};

/** ListItems are used to present multiple items vertically as a single element. */
const ListItem = ({
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
  theme
}) => {
  const styles = getStyles();

  return (
    <TouchableHighlight
      onPress={onPress}
      onLongPress={onLongPress}
      underlayColor={theme.colors.lighterGray}
      style={styles.touchableHighlight}
    >
      <View style={[styles.container, style]}>
        {icon ? <View style={[styles.icon, iconStyle]}>{icon}</View> : null}
        <View style={styles.textContainer}>
          <View style={styles.headingContainer}>
            <View style={styles.heading}><Text type="heading" numberOfLines={1} {...primaryTextProps}>{primaryText}</Text></View>
            {time ? <Text type="time" style={[styles.time, timeStyle]} {...timeProps}>{time}</Text> : null}
          </View>
          {
            secondaryText
            ? <Text type="body-light" numberOfLines={1} {...secondaryTextProps}>{secondaryText}</Text>
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
};

ListItem.displayName = displayName;
ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
