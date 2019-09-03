import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, ViewPropTypes } from 'react-native';
import { Video as NativeVideo } from 'expo-av';
import getStyles from './styles';
import IconPlay from '../../anchor-ui-native/icons/play';

const displayName = 'Video';

const propTypes = {
  style: ViewPropTypes.style,
  source: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  posterSource: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  ratio: PropTypes.number.isRequired,
  fadeDuration: PropTypes.number,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  size: PropTypes.number,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  style: {},
  fadeDuration: 300,
  posterSource: null,
  onPress: null,
  onLongPress: null,
  size: 210
};

class Video extends Component {
  videoRef = React.createRef();

  state = {
    width: null,
    height: null,
    lastRatio: null // eslint-disable-line react/no-unused-state
  }

  static getDerivedStateFromProps(props, state) {
    const { ratio, size } = props;

    if (state.lastRatio === null || props.ratio !== state.lastRatio) {
      if (ratio > 1) {
        return {
          width: size,
          height: size / ratio,
          lastRatio: ratio
        };
      }

      return {
        width: size * ratio,
        height: size,
        lastRatio: ratio
      };
    }

    return null;
  }

  handleOnPress = () => {
    const { onPress } = this.props;

    this.videoRef.current.presentFullscreenPlayer();

    if (onPress) {
      onPress();
    }
  }

  handleOnFullScreenUpdate = ({ fullscreenUpdate }) => {
    if (fullscreenUpdate === NativeVideo.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT) {
      this.videoRef.current.playAsync();
    }

    if (fullscreenUpdate === NativeVideo.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS) {
      this.videoRef.current.stopAsync();
    }
  }

  handleOnPlaybackStatusUpdate = (status) => {
    const { didJustFinish } = status;

    // Reset the playback position when the video reached his end
    if (didJustFinish) {
      this.videoRef.current.setPositionAsync(0);
    }
  };

  render() {
    const {
      source,
      posterSource,
      style,
      theme,
      onPress,
      onLongPress,
      ratio,
      ...custom
    } = this.props;
    const {
      width,
      height
    } = this.state;
    const styles = getStyles(theme.colors);

    const containerStyle = [styles.container, { width, height }, style];
    const videoStyle = [styles.video, { width, height }];
    let playButtonSize = (width / 100) * 40;

    if (ratio > 1) {
      playButtonSize = (height / 100) * 40;
    }

    const playButtonStyle = [
      styles.playButton,
      { width: playButtonSize, height: playButtonSize, borderRadius: playButtonSize / 2 }
    ];
    const playIconStyle = { marginLeft: (playButtonSize / 2) * 0.15 };

    return (
      <TouchableWithoutFeedback
        onPress={this.handleOnPress}
        onLongPress={onLongPress}
        style={{ width, height }}
      >
        <View style={containerStyle}>
          <NativeVideo
            source={source}
            posterSource={posterSource}
            style={videoStyle}
            onFullscreenUpdate={this.handleOnFullScreenUpdate}
            onPlaybackStatusUpdate={this.handleOnPlaybackStatusUpdate}
            ref={this.videoRef}
            resizeMode="cover"
            {...custom}
          />
          <View style={playButtonStyle}>
            <IconPlay
              style={playIconStyle}
              size={playButtonSize / 2}
              color={theme.colors.darkGray}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Video.displayName = displayName;
Video.propTypes = propTypes;
Video.defaultProps = defaultProps;

export default Video;
