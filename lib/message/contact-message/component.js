import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import getStyles from './styles';
import Text from '../../text';
import MessageTime from '../message-time';

const propTypes = {
  style: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  timeTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  timeText: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['right', 'left']).isRequired,
  statusIcon: PropTypes.node,
  contact: PropTypes.shape({
    avatar: PropTypes.node.isRequired,
    primaryText: PropTypes.node.isRequired,
    secondaryText: PropTypes.node.isRequired
  }).isRequired,
  primaryTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  secondaryTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  statusIcon: null
}

const ContactMessage = ({
  timeText,
  align,
  statusIcon,
  contact,
  theme,
  style,
  timeTextProps,
  primaryTextProps,
  secondaryTextProps,
  ...custom
}) => {
  const styles = getStyles(theme.colors, align);

  return (
    <View style={[styles.container, style]} {...custom}>
      {contact.avatar}
      <View style={styles.textContainer}>
        <Text type={align === 'right' ? 'body-contrast' : 'body-accent'} {...primaryTextProps}>{contact.primaryText}</Text>
        <Text type={align === 'right' ? 'body-contrast' : 'body'} {...secondaryTextProps}>{contact.secondaryText}</Text>
      </View>
      <MessageTime align={align} statusIcon={statusIcon} timeText={timeText} timeTextProps={timeTextProps} />
    </View>
  );
};

ContactMessage.propTypes = propTypes;
ContactMessage.defaultProps = defaultProps;

export default ContactMessage;
