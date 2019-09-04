import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';
import getStyles from './styles';

const displayName = 'Image';

const propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  source: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  thumbnailSource: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  ratio: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  fadeDuration: PropTypes.number,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  size: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  style: {},
  fadeDuration: 300,
  thumbnailSource: null,
  onPress: null,
  onLongPress: null,
  size: 210
};

class Image extends Component {
  thumbnailOpacity = new Animated.Value(0)

  imageOpacity = new Animated.Value(0)

  placeholderOpacity = new Animated.Value(1)

  state = {
    width: null,
    height: null,
    thumbnailLoaded: false,
    imageLoaded: false,
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

  onThumbnailLoad = () => {
    const { fadeDuration } = this.props;

    Animated.sequence([
      Animated.timing(this.thumbnailOpacity, {
        toValue: 1,
        duration: fadeDuration,
        useNativeDriver: true
      }),
      Animated.timing(this.placeholderOpacity, {
        toValue: 0,
        duration: fadeDuration,
        useNativeDriver: true
      })
    ]).start(() => {
      this.setState({
        thumbnailLoaded: true
      });
    });
  }

  onImageLoad = () => {
    const { fadeDuration } = this.props;

    Animated.sequence([
      Animated.timing(this.imageOpacity, {
        toValue: 1,
        duration: fadeDuration,
        useNativeDriver: true
      }),
      Animated.timing(this.thumbnailOpacity, {
        toValue: 0,
        duration: fadeDuration,
        useNativeDriver: true
      })
    ]).start(() => {
      this.setState({
        imageLoaded: true
      });
    });
  }

  render() {
    const {
      source,
      thumbnailSource,
      style,
      theme,
      onPress,
      onLongPress
    } = this.props;
    const {
      width,
      height,
      thumbnailLoaded,
      imageLoaded
    } = this.state;
    const styles = getStyles(theme.colors);

    const containerStyle = [styles.container, { width, height }, style];
    const placeholderStyle = [
      styles.image,
      styles.placeholder,
      { width, height, opacity: this.placeholderOpacity }
    ];
    const thumbnailStyle = [styles.image, { width, height, opacity: this.thumbnailOpacity }];
    const imageStyle = [styles.image, { width, height, opacity: this.imageOpacity }];

    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        onLongPress={onLongPress}
        style={{ width, height }}
      >
        <View style={containerStyle}>
          {
            !thumbnailLoaded && !imageLoaded
              ? <Animated.View style={placeholderStyle} />
              : null
          }
          {
            thumbnailSource && !imageLoaded
              ? (
                <Animated.Image
                  source={thumbnailSource}
                  style={thumbnailStyle}
                  blurRadius={10}
                  onLoad={this.onThumbnailLoad}
                />
              )
              : null
          }
          <Animated.Image
            source={source}
            style={imageStyle}
            onLoad={this.onImageLoad}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Image.displayName = displayName;
Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
