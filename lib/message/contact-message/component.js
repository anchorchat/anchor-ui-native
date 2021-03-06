import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import getStyles from './styles';
import Text from '../../text';
import MessageTime from '../message-time';

const propTypes = {
  align: PropTypes.oneOf(['right', 'left']).isRequired,
  contact: PropTypes.shape({
    avatar: PropTypes.node.isRequired,
    primaryText: PropTypes.node.isRequired,
    secondaryText: PropTypes.node.isRequired
  }).isRequired,
  headerText: PropTypes.node,
  headerTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  primaryTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  secondaryTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  statusIcon: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
  timeText: PropTypes.node.isRequired,
  timeTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  headerText: null,
  statusIcon: null,
  style: {}
};

const ContactMessage = ({
  align,
  contact,
  headerText,
  headerTextProps,
  primaryTextProps,
  secondaryTextProps,
  statusIcon,
  style,
  theme,
  timeText,
  timeTextProps
}) => {
  const styles = getStyles(theme.colors, align);

  return (
    <View style={[styles.container, style]}>
      {
        headerText && align === 'left'
          ? (
            <Text type="heading-message" style={styles.header} {...headerTextProps}>
              {headerText}
            </Text>
          )
          : null
      }
      <View style={styles.row}>
        {contact.avatar}
        <View style={styles.textContainer}>
          <Text type={align === 'right' ? 'body-contrast' : 'body-light'} {...primaryTextProps}>
            {contact.primaryText}
          </Text>
          <Text type={align === 'right' ? 'body-contrast' : 'body'} {...secondaryTextProps}>
            {contact.secondaryText}
          </Text>
        </View>
        <MessageTime
          align={align}
          statusIcon={statusIcon}
          timeText={timeText}
          timeTextProps={timeTextProps}
        />
      </View>
    </View>
  );
};

ContactMessage.propTypes = propTypes;
ContactMessage.defaultProps = defaultProps;

export default ContactMessage;
