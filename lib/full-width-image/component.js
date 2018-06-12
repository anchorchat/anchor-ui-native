import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Animated, TouchableWithoutFeedback } from 'react-native';
import getStyles from './styles';

const displayName = 'FullWidthImage';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** The image source (either a remote URL or a local file resource) */
  source: Image.propTypes.source.isRequired,
  /** Optional thumbnail source */
  thumbnailSource: Image.propTypes.source,
  /** The image ratio (imageWidth/imageHeight) */
  ratio: PropTypes.number.isRequired,
  /** Duration of the cross fade animations */
  fadeDuration: PropTypes.number,
  /**
   * Callback fired when FullWidthImage is pressed
   *
   * function(event: object) => void
   */
  onPress: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  style: {},
  fadeDuration: 300,
  thumbnailSource: null,
  onPress: null
};

/** Full width image with placeholder and optional thumbnail */
class FullWidthImage extends Component {
  state = {
    width: null,
    height: null,
    thumbnailLoaded: false,
    imageLoaded: false
  }

  onLayout = (event) => {
    const { ratio, source, thumbnailSource } = this.props;
    const containerWidth = event.nativeEvent.layout.width;

    if (ratio) {
      return this.setState({
        width: containerWidth,
        height: containerWidth / ratio
      });
    }

    return Image.getSize(
      (thumbnailSource && thumbnailSource.uri) || source.uri,
      (width, height) => {
        this.setState({
          width: containerWidth,
          height: containerWidth / (width / height)
        });
      }
    );
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

  thumbnailOpacity = new Animated.Value(0)
  imageOpacity = new Animated.Value(0)
  placeholderOpacity = new Animated.Value(1)

  render() {
    const {
      source,
      thumbnailSource,
      style,
      theme,
      onPress,
      ...custom
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
        onLayout={this.onLayout}
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
                  {...custom}
                />
              )
              : null
          }
          <Animated.Image
            source={source}
            style={imageStyle}
            onLoad={this.onImageLoad}
            {...custom}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

FullWidthImage.displayName = displayName;
FullWidthImage.propTypes = propTypes;
FullWidthImage.defaultProps = defaultProps;

export default FullWidthImage;
