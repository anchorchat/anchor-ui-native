import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Circle from 'react-native-progress/Circle';
import getStyles from './styles';
import Text from '../../text';
import MessageTime from '../message-time';
import Touchable from '../../touchable';
import IconPlay from '../../icons/play';
import IconPause from '../../icons/pause';

const propTypes = {
  align: PropTypes.oneOf(['right', 'left']).isRequired,
  audio: PropTypes.shape({
    onPlay: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    progress: PropTypes.number.isRequired,
    time: PropTypes.node.isRequired
  }).isRequired,
  headerText: PropTypes.node,
  headerTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  progressProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  statusIcon: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
  timeText: PropTypes.node.isRequired,
  timeTextProps: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  headerText: null,
  statusIcon: null,
  style: {}
};

class AudioMessage extends Component {
  renderButton = () => {
    const {
      align,
      audio,
      progressProps,
      theme
    } = this.props;

    if (audio.isLoading) {
      return (
        <Circle
          size={18}
          indeterminate
          borderWidth={2}
          color={align === 'right' ? theme.colors.white : theme.colors.gray}
          {...progressProps}
        />
      );
    }

    if (audio.isPlaying) {
      return (
        <Touchable onPress={audio.onPause} opacity>
          <IconPause
            size={18}
            color={align === 'right' ? theme.colors.white : theme.colors.gray}
          />
        </Touchable>
      );
    }

    return (
      <Touchable onPress={audio.onPlay} opacity>
        <IconPlay
          size={18}
          color={align === 'right' ? theme.colors.white : theme.colors.gray}
        />
      </Touchable>
    );
  }

  render() {
    const {
      align,
      audio,
      headerText,
      headerTextProps,
      statusIcon,
      style,
      theme,
      timeText,
      timeTextProps
    } = this.props;

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
        <View style={styles.content}>
          {this.renderButton()}
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
  }
}

AudioMessage.propTypes = propTypes;
AudioMessage.defaultProps = defaultProps;

export default AudioMessage;
