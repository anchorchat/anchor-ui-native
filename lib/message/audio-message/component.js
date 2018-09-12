import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { Audio } from 'expo';
import round from 'lodash/round';
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
    percentage: 0
  }

  async componentDidMount() {
    const { audio } = this.props;
    console.log(this.props);

    try {
      this.audio = await Audio.Sound.create(
        audio.source,
        { progressUpdateIntervalMillis: 1000 },
        this.handleUpdate
      );
      // await bla.sound.playAsync()
      // await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      console.log('error', error);
      // An error occurred!
    }
  }

  handleUpdate = (status) => {
    this.setState({
      status,
      percentage: status.positionMillis && status.positionMillis !== 0
        ? round((status.positionMillis / status.playableDurationMillis) * 100, 2)
        : 0
    });
  }

  handlePlay = async () => {
    await this.audio.sound.playAsync();
  }

  handlePause = async () => {
    await this.audio.sound.pauseAsync();
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
    const { status, percentage } = this.state;

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
          <View style={styles.barContainer}><View style={[styles.bar, { width: `${percentage}%` }]} /></View>
        </View>
        <MessageTime
          align={align}
          statusIcon={statusIcon}
          timeText={timeText}
          timeTextProps={timeTextProps}
        />
      </View>
    );
  }
}

AudioMessage.propTypes = propTypes;
AudioMessage.defaultProps = defaultProps;

export default AudioMessage;
