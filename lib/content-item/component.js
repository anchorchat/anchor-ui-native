import React from 'react';
import PropTypes from 'prop-types';
import { View, Text as NativeText } from 'react-native';
import Text from '../text';
import Divider from '../divider';
import getStyles from './styles';

const displayName = 'ContentItem';

const propTypes = {
  headerText: PropTypes.node.isRequired,
  bodyText: PropTypes.node.isRequired,
  style: View.propTypes.style,
  headerStyle: NativeText.propTypes.style,
  bodyStyle: NativeText.propTypes.style,
  dividerStyle: View.propTypes.style,
  divider: PropTypes.bool
};

const defaultProps = {
  style: {},
  headerStyle: {},
  bodyStyle: {},
  dividerStyle: {},
  divider: false
};

const ContentItem = ({ headerText, bodyText, divider, style, headerStyle, bodyStyle, dividerStyle  }) => {
  const styles = getStyles();

  return (
    <View style={[styles.container, style]}>
      <Text type="body-accent" style={[styles.header, headerStyle]}>{headerText}</Text>
      <Text style={[styles.body, bodyStyle]}>{bodyText}</Text>
      {divider ? <Divider style={[styles.divider, dividerStyle]} /> : null}
    </View>
  );
};

ContentItem.displayName = displayName;
ContentItem.propTypes = propTypes;
ContentItem.defaultProps = defaultProps;

export default ContentItem;
