import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from '../text';
import Divider from '../divider';
import getStyles from './styles';

const displayName = 'ContentItem';

const propTypes = {
  /** Override the styles of the root element */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Content header text */
  headerText: PropTypes.node.isRequired,
  /** Override the styles of the header element */
  headerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**
   * Custom props for the header Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  headerTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Content body text */
  bodyText: PropTypes.node.isRequired,
  /** Override the styles of the body element */
  bodyStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**
   * Custom props for the body Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  bodyTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * Custom props for the Divider component
   *
   * See Divider for available props.
   */
  dividerProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Render a Divider underneath the bodyText */
  divider: PropTypes.bool
};

const defaultProps = {
  style: {},
  headerStyle: {},
  bodyStyle: {},
  headerTextProps: {},
  bodyTextProps: {},
  dividerProps: {},
  divider: false
};

/** Display content with a header */
const ContentItem = ({
  headerText,
  bodyText,
  divider,
  style,
  headerStyle,
  bodyStyle,
  headerTextProps,
  bodyTextProps,
  dividerProps,
  ...custom
}) => {
  const styles = getStyles();

  return (
    <View style={[styles.container, style]} {...custom}>
      <Text type="body-accent" style={[styles.header, headerStyle]} {...headerTextProps}>
        {headerText}
      </Text>
      <Text style={[styles.body, bodyStyle]} {...bodyTextProps}>{bodyText}</Text>
      {divider ? <Divider offset={16} {...dividerProps} /> : null}
    </View>
  );
};

ContentItem.displayName = displayName;
ContentItem.propTypes = propTypes;
ContentItem.defaultProps = defaultProps;

export default ContentItem;
