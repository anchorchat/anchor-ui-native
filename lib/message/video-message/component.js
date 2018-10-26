import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import getStyles from './styles';
import Text from '../../text';
import MessageTime from '../message-time';

const propTypes = {
  bodyText: PropTypes.node,
  style: ViewPropTypes.style,
  bodyTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  timeTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  timeText: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['right', 'left']).isRequired,
  statusIcon: PropTypes.node,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
  video: PropTypes.node.isRequired,
  videoSize: PropTypes.number.isRequired,
  hyperlinkProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  enableHyperlinks: PropTypes.bool.isRequired
};

const defaultProps = {
  bodyText: null,
  statusIcon: null,
  style: {}
};

const VideoMessage = ({
  style,
  bodyText,
  timeText,
  align,
  statusIcon,
  theme,
  video,
  bodyTextProps,
  timeTextProps,
  videoSize,
  enableHyperlinks,
  hyperlinkProps
}) => {
  const styles = getStyles(theme.colors, align);
  let maxWidth = videoSize;

  if (video.ratio < 1) {
    maxWidth = videoSize * video.ratio;
  }

  let content = null;

  if (bodyText) {
    content = (
      <Text
        style={[styles.bodyText, { maxWidth: maxWidth - 12 }]}
        type={align === 'right' ? 'body-contrast' : 'body'}
        {...bodyTextProps}
      >
        {bodyText}
      </Text>
    );
  }

  if (bodyText && enableHyperlinks) {
    content = (
      <Hyperlink linkStyle={styles.link} {...hyperlinkProps}>
        {content}
      </Hyperlink>
    );
  }

  return (
    <View style={[styles.container, style]}>
      {video}
      {content}
      <MessageTime
        align={align}
        statusIcon={statusIcon}
        timeText={timeText}
        timeTextProps={!bodyText ? { type: 'time-contrast', ...timeTextProps } : timeTextProps}
        style={bodyText ? styles.timeWithBody : styles.time}
      />
    </View>
  );
};

VideoMessage.propTypes = propTypes;
VideoMessage.defaultProps = defaultProps;

export default VideoMessage;
