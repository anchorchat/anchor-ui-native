import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import getStyles from './styles';
import Text from '../../text';
import MessageTime from '../message-time';

const propTypes = {
  time: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['right', 'left']).isRequired,
  statusIcon: PropTypes.node,
  contact: PropTypes.shape({
    avatar: PropTypes.node.isRequired,
    primaryText: PropTypes.node.isRequired,
    secondaryText: PropTypes.node.isRequired
  }).isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  statusIcon: null
}

const ContactMessage = ({ time, align, statusIcon, contact, theme }) => {
  const styles = getStyles(theme.colors, align);

  return (
    <View style={styles.container}>
      {contact.avatar}
      <View style={styles.textContainer}>
        <Text type={align === 'right' ? 'body-contrast' : 'body-accent'}>{contact.primaryText}</Text>
        <Text type={align === 'right' ? 'body-contrast' : 'body'}>{contact.secondaryText}</Text>
      </View>
      <MessageTime align={align} statusIcon={statusIcon} time={time} />
    </View>
  );
};

ContactMessage.propTypes = propTypes;
ContactMessage.defaultProps = defaultProps;

export default ContactMessage;
