import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import getStyles from './styles';
import Text from '../../text';
import MessageTime from '../message-time';
import Touchable from '../../touchable';
import IconPlay from '../../icons/play';
import IconPause from '../../icons/pause';

const propTypes = {
  headerText: PropTypes.node,
  style: ViewPropTypes.style,
  headerTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  timeTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  timeText: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['right', 'left']).isRequired,
  statusIcon: PropTypes.node,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
  audio: PropTypes.shape({
    onPlay: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    progress: PropTypes.number.isRequired,
    time: PropTypes.node.isRequired
  }).isRequired
};

const defaultProps = {
  statusIcon: null,
  headerText: null,
  style: {}
};

const AudioMessage = ({
  timeText,
  align,
  statusIcon,
  timeTextProps,
  style,
  theme,
  headerText,
  headerTextProps,
  audio,
  ...custom
}) => {
  const styles = getStyles(theme.colors, align);

  return (
    <View style={[styles.container, style]} {...custom}>
      {
        headerText && align === 'left'
          ? (
            <Text type="heading-message" style={styles.header} {...headerTextProps}>
              {headerText}
            </Text>
          )
          : null
      }
      <View style={styles.content}>
        {
          audio.isPlaying
            ? (
              <Touchable onPress={audio.onPause} opacity>
                <IconPause
                  size={18}
                  color={align === 'right' ? theme.colors.white : theme.colors.gray}
                />
              </Touchable>
            )
            : (
              <Touchable onPress={audio.onPlay} opacity>
                <IconPlay
                  size={18}
                  color={align === 'right' ? theme.colors.white : theme.colors.gray}
                />
              </Touchable>
            )
        }
        <View style={styles.barContainer}>
          <View style={[styles.bar, { width: `${audio.progress * 100}%` }]} />
        </View>
      </View>
      <View style={styles.time}>
        <Text type={align === 'right' ? 'time-contrast' : 'time'}>{audio.time}</Text>
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

AudioMessage.propTypes = propTypes;
AudioMessage.defaultProps = defaultProps;

export default AudioMessage;
