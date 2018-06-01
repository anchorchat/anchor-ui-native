import React from 'react';
import PropTypes from 'prop-types';
import { View, Text as NativeText } from 'react-native';
import Text from '../text';
import Divider from '../divider';
import getStyles from './styles';

const displayName = 'ContentItem';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** Content header text */
  headerText: PropTypes.node.isRequired,
  /** Override the styles of the header element */
  headerStyle: NativeText.propTypes.style,
  /** Custom props for the header Text component */
  headerTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Content body text */
  bodyText: PropTypes.node.isRequired,
  /** Override the styles of the body element */
  bodyStyle: NativeText.propTypes.style,
  /** Custom props for the body Text component */
  bodyTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Render a Divider underneath the bodyText */
  divider: PropTypes.bool,
  /** Override the styles of the divider element */
  dividerStyle: View.propTypes.style
};

const defaultProps = {
  style: {},
  headerStyle: {},
  bodyStyle: {},
  dividerStyle: {},
  headerTextProps: {},
  bodyTextProps: {},
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
  dividerStyle,
  headerTextProps,
  bodyTextProps,
  ...custom
}) => {
  const styles = getStyles();

  return (
    <View style={[styles.container, style]} {...custom}>
      <Text type="body-accent" style={[styles.header, headerStyle]} {...headerTextProps}>
        {headerText}
      </Text>
      <Text style={[styles.body, bodyStyle]} {...bodyTextProps}>{bodyText}</Text>
      {divider ? <Divider style={[styles.divider, dividerStyle]} /> : null}
    </View>
  );
};

ContentItem.displayName = displayName;
ContentItem.propTypes = propTypes;
ContentItem.defaultProps = defaultProps;

export default ContentItem;
