import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import getStyles from './styles';
import Text from '../../text';
import MessageTime from '../message-time';
import TextStylePropTypes from '../../config/prop-types/text-style-props';

const propTypes = {
  align: PropTypes.oneOf(['right', 'left']).isRequired,
  bodyText: PropTypes.string.isRequired,
  bodyTextProps: TextStylePropTypes.isRequired,
  enableHyperlinks: PropTypes.bool.isRequired,
  headerText: PropTypes.string,
  headerTextProps: TextStylePropTypes.isRequired,
  hyperlinkProps: PropTypes.shape({
    linkDefault: PropTypes.bool,
    linkify: PropTypes.object,
    linkStyle: TextStylePropTypes,
    linkText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ]),
    onPress: PropTypes.func,
    onLongPress: PropTypes.func
  }).isRequired,
  statusIcon: PropTypes.node,
  style: ViewPropTypes.style,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
  timeText: PropTypes.string.isRequired,
  timeTextProps: TextStylePropTypes.isRequired
};

const defaultProps = {
  statusIcon: null,
  headerText: null,
  style: {}
};

const TextMessage = ({
  bodyText,
  timeText,
  align,
  statusIcon,
  bodyTextProps,
  timeTextProps,
  style,
  theme,
  headerText,
  headerTextProps,
  hyperlinkProps,
  enableHyperlinks
}) => {
  const styles = getStyles(theme.colors, align);

  let content = (
    <Text type={align === 'right' ? 'body-contrast' : 'body'} {...bodyTextProps}>
      {bodyText}
    </Text>
  );

  if (enableHyperlinks) {
    content = (
      <Hyperlink linkStyle={styles.link} {...hyperlinkProps}>
        {content}
      </Hyperlink>
    );
  }

  let header = null;

  if (headerText && align === 'left') {
    header = (
      <Text type="heading-message" style={styles.header} {...headerTextProps}>
        {headerText}
      </Text>
    );
  }

  return (
    <View style={[styles.container, style]}>
      {header}
      {content}
      <MessageTime
        align={align}
        statusIcon={statusIcon}
        timeText={timeText}
        timeTextProps={timeTextProps}
      />
    </View>
  );
};

TextMessage.propTypes = propTypes;
TextMessage.defaultProps = defaultProps;

export default TextMessage;
