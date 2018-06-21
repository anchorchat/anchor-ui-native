import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Animated, TouchableWithoutFeedback, ScrollView } from 'react-native';
import getStyles from './styles';

const displayName = 'FullScreenImage';

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
   * Callback fired when FullScreenImage is pressed
   *
   * function(event: object) => void
   */
  onPress: PropTypes.func,
  /**
  * The type of resizing the image component will handle.
  * By adjusting this, this component can be used as full width or height image.
  */
  type: PropTypes.oneOf(['width', 'height', 'auto']),
  zoomable: PropTypes.bool,
  maximumZoomScale: PropTypes.number,
  minimumZoomScale: PropTypes.number,
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
  type: 'auto',
  zoomable: false,
  maximumZoomScale: 5,
  minimumZoomScale: 1
};

/**
* Image component which resizes to the full width or height of it's parent.
* When given zoomable={true} the image component will become zoomable.
*/
class FullScreenImage extends Component {
  state = {
    width: null,
    height: null,
    thumbnailLoaded: false,
    imageLoaded: false
  }

  onLayout = (event) => {
    const { ratio, type } = this.props;
    const { width, height } = event.nativeEvent.layout;

    if (
      (ratio > 1 && (width / ratio) < height) ||
      ((height * ratio) > width && type === 'auto') ||
      type === 'width'
    ) {
      return this.setState({
        width,
        height: width / ratio
      });
    }

    return this.setState({
      width: height * ratio,
      height
    });
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
      zoomable,
      maximumZoomScale,
      minimumZoomScale,
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

    let Parent = View;
    let parentProps = {
      style: width && height ? containerStyle : styles.container
    };

    if (zoomable) {
      Parent = ScrollView;
      parentProps = {
        centerContent: true,
        maximumZoomScale,
        minimumZoomScale,
        showsHorizontalScrollIndicator: false,
        showsVerticalScrollIndicator: false,
        contentContainerStyle: width && height ? containerStyle : styles.container
      };
    }

    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        onLayout={this.onLayout}
        style={{ width, height }}
      >
        <Parent {...parentProps}>
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
        </Parent>
      </TouchableWithoutFeedback>
    );
  }
}

FullScreenImage.displayName = displayName;
FullScreenImage.propTypes = propTypes;
FullScreenImage.defaultProps = defaultProps;

export default FullScreenImage;