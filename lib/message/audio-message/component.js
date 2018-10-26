import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import Circle from 'react-native-progress/Circle';
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
    isLoading: PropTypes.bool.isRequired,
    progress: PropTypes.number.isRequired,
    time: PropTypes.node.isRequired
  }).isRequired,
  progressProps: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  statusIcon: null,
  headerText: null,
  style: {}
};

class AudioMessage extends Component {
  renderButton = () => {
    const {
      audio,
      theme,
      align,
      progressProps
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
      timeText,
      align,
      statusIcon,
      timeTextProps,
      style,
      theme,
      headerText,
      headerTextProps,
      audio
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
