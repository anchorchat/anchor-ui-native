import React from 'react';
import PropTypes from 'prop-types';
import { View, Text as NativeText } from 'react-native';
import Text from '../text';
import getStyles from './styles';

const displayName = 'MessageHighlight';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** Content header text */
  headerText: PropTypes.node.isRequired,
  /** Override the styles of the header element */
  headerStyle: NativeText.propTypes.style,
  /**
   * Custom props for the header Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  headerTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Content body text */
  bodyText: PropTypes.node.isRequired,
  /** Override the styles of the body element */
  bodyStyle: NativeText.propTypes.style,
  /**
   * Custom props for the body Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  bodyTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Icon to close the highlight with */
  closeIcon: PropTypes.node.isRequired,
  /** Override the styles of the icon container */
  closeIconStyle: View.propTypes.style,
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
  style: {},
  headerStyle: {},
  bodyStyle: {},
  headerTextProps: {},
  bodyTextProps: {},
  closeIconStyle: {}
};

/** Highlight a selected message */
const MessageHighlight = ({
  headerText,
  bodyText,
  style,
  headerStyle,
  bodyStyle,
  headerTextProps,
  bodyTextProps,
  closeIcon,
  closeIconStyle,
  safeArea,
  theme,
  ...custom
}) => {
  const styles = getStyles(theme.colors, safeArea);

  return (
    <View style={styles.safeArea} {...custom}>
      <View style={[styles.container, style]}>
        <Text type="body-accent" style={[styles.header, headerStyle]} numberOfLines={1} {...headerTextProps}>
          {headerText}
        </Text>
        <Text
          style={[styles.body, bodyStyle]}
          numberOfLines={2}
          {...bodyTextProps}
        >
          {bodyText}
        </Text>
        <View style={[styles.closeIcon, closeIconStyle]} >{closeIcon}</View>
      </View>
    </View>
  );
};

MessageHighlight.displayName = displayName;
MessageHighlight.propTypes = propTypes;
MessageHighlight.defaultProps = defaultProps;

export default MessageHighlight;
