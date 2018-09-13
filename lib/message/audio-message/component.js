import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { Audio } from 'expo';
import round from 'lodash/round';
import moment from 'moment';
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
    source: PropTypes.any.isRequired
  }).isRequired
};

const defaultProps = {
  statusIcon: null,
  headerText: null,
  style: {}
};

class AudioMessage extends Component {
  state = {
    status: {
      isPlaying: false,
      isLoaded: false,
    },
    percentage: 0,
    isFinished: false
  }

  async componentDidMount() {
    const { audio } = this.props;

    try {
      this.audio = await Audio.Sound.create(
        audio.source,
        {},
        this.handleUpdate
      );
    } catch (error) {
      console.log('error', error);
    }
  }

  handleUpdate = (status) => {
    const { isFinished } = this.state;

    if (isFinished) {
      return false;
    }

    if (status.didJustFinish) {
      this.setState({
        isFinished: true
      });
    }

    return this.setState({
      status,
      percentage: status.positionMillis && status.positionMillis !== 0
        ? round((status.positionMillis / status.durationMillis) * 100, 2)
        : 0
    });
  }

  handlePlay = async () => {
    const { isFinished } = this.state;

    if (isFinished) {
      await this.audio.sound.replayAsync();
    } else {
      await this.audio.sound.playAsync();
    }

    this.setState({
      isFinished: false,
      percentage: 0
    });
  }

  handlePause = async () => {
    this.setState({
      isFinished: false
    });

    await this.audio.sound.pauseAsync();
  }

  renderAudioTime = () => {
    const { align } = this.props;
    const { status } = this.state;

    if (!status.isLoaded) {
      return (
        <Text type={align === 'right' ? 'time-contrast' : 'time'}>00:00</Text>
      );
    }

    return (
      <Text type={align === 'right' ? 'time-contrast' : 'time'}>
        {
          moment(status.isPlaying ? status.positionMillis : status.playableDurationMillis)
            .format('mm:ss')
        }
      </Text>
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
      ...custom
    } = this.props;
    const { status, percentage, isFinished } = this.state;

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
            status.isPlaying
              ? (
                <Touchable onPress={this.handlePause} opacity>
                  <IconPause
                    size={18}
                    color={align === 'right' ? theme.colors.white : theme.colors.gray}
                  />
                </Touchable>
              )
              : (
                <Touchable onPress={this.handlePlay} opacity>
                  <IconPlay
                    size={18}
                    color={align === 'right' ? theme.colors.white : theme.colors.gray}
                  />
                </Touchable>
              )
          }
          <View style={styles.barContainer}>
            <View style={[styles.bar, { width: isFinished ? 0 : `${percentage}%` }]} />
          </View>
        </View>
        <View style={styles.time}>
          {this.renderAudioTime()}
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
