import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';
import getStyles from './styles';
import Text from '../text';

const displayName = 'Header';

const propTypes = {
  /** Override the styles of the root element */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Override the styles of the container element */
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Header primary text */
  primaryText: PropTypes.node,
  /** Override the styles of the primaryText element */
  primaryTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**
   * Custom props for the primary Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  primaryTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Header secondary text */
  secondaryText: PropTypes.node,
  /** Override the styles of the primaryText element */
  secondaryTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**
   * Custom props for the secondary Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  secondaryTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Button for the left hand side of the Header */
  leftButton: PropTypes.node,
  /** Override the styles of the leftButton element */
  leftButtonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Button for the right hand side of the Header */
  rightButton: PropTypes.node,
  /** Override the styles of the rightButton element */
  rightButtonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Remove safeArea padding for Android if Header is rendered inside a Modal */
  inModal: PropTypes.bool,
  /**
  * Override primary and secondary text with an icon
  *
  * Recomended height of the icon is 22
  */
  icon: PropTypes.node,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
  safeArea: PropTypes.shape({
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired
};

const defaultProps = {
  primaryText: null,
  secondaryText: null,
  secondaryTextStyle: {},
  style: {},
  containerStyle: {},
  primaryTextProps: {},
  primaryTextStyle: {},
  secondaryTextProps: {},
  leftButton: null,
  rightButton: null,
  leftButtonStyle: {},
  rightButtonStyle: {},
  inModal: false,
  icon: null
};

/** View Header with safeArea. */
const Header = ({
  primaryText,
  primaryTextStyle,
  secondaryText,
  secondaryTextStyle,
  style,
  primaryTextProps,
  secondaryTextProps,
  leftButton,
  leftButtonStyle,
  rightButton,
  rightButtonStyle,
  theme,
  safeArea,
  containerStyle,
  inModal,
  icon,
  ...custom
}) => {
  const styles = getStyles(theme.colors, safeArea, inModal);

  return (
    <View style={[styles.statusBar, style]} {...custom}>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.textContainer}>
          {
            primaryText && !icon
              ? (
                <Text
                  type={Platform.OS === 'android' ? 'heading-contrast' : 'heading'}
                  numberOfLines={1}
                  style={[styles.primaryText, primaryTextStyle]}
                  {...primaryTextProps}
                >
                  {primaryText}
                </Text>
              )
              : null
          }
          {
            secondaryText && !icon
              ? (
                <Text
                  type={
                    Platform.OS === 'android'
                      ? 'heading-secondary-contrast'
                      : 'heading-secondary'
                  }
                  numberOfLines={1}
                  style={[styles.secondaryText, secondaryTextStyle]}
                  {...secondaryTextProps}
                >
                  {secondaryText}
                </Text>
              )
              : null
          }
          {
            icon
              ? <View style={styles.icon}>{icon}</View>
              : null
          }
        </View>
        {leftButton ? <View style={[styles.leftButton, leftButtonStyle]}>{leftButton}</View> : null}
        {
          rightButton
            ? <View style={[styles.rightButton, rightButtonStyle]}>{rightButton}</View>
            : null
        }
      </View>
    </View>
  );
};

Header.displayName = displayName;
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
