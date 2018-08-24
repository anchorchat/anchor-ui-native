import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, ViewPropTypes } from 'react-native';
import { Video as NativeVideo } from 'expo';
import getStyles from './styles';

const displayName = 'Video';

const propTypes = {
  style: ViewPropTypes.style,
  source: NativeVideo.propTypes.source.isRequired,
  posterSource: NativeVideo.propTypes.posterSource,
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

  render() {
    const {
      source,
      posterSource,
      style,
      theme,
      onPress,
      onLongPress,
      ...custom
    } = this.props;
    const {
      width,
      height
    } = this.state;
    const styles = getStyles(theme.colors);

    const containerStyle = [styles.container, { width, height }, style];
    const videoStyle = [styles.video, { width, height }];

    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        onLongPress={onLongPress}
        style={{ width, height }}
      >
        <View style={containerStyle}>
          <NativeVideo
            source={source}
            posterSource={posterSource}
            style={videoStyle}
            useNativeControls
            {...custom}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Video.displayName = displayName;
Video.propTypes = propTypes;
Video.defaultProps = defaultProps;

export default Video;
