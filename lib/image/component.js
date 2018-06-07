import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Animated } from 'react-native';
import getStyles from './styles';

const displayName = 'FullWidthImage';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** The image source (either a remote URL or a local file resource) */
  source: Image.propTypes.source.isRequired,
  /** Optional thumbnail source */
  thumbnailSource: Image.propTypes.source,
  /** The image ratio */
  ratio: PropTypes.number.isRequired,
  /** Duration of the cross fade animations */
  fadeDuration: PropTypes.number,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
}

const defaultProps = {
  style: {},
  fadeDuration: 300,
  thumbnailSource: null
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
      })
    }

    return Image.getSize((thumbnailSource && thumbnailSource.uri) || source.uri, (width, height) => {
      this.setState({
        width: containerWidth,
        height: containerWidth / (width / height)
      })
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
      this.setState(() => ({
        thumbnailLoaded: true
      }))
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
      this.setState(() => ({
        imageLoaded: true
      }))
    });
  }

  thumbnailOpacity = new Animated.Value(0)
  imageOpacity = new Animated.Value(0)
  placeholderOpacity = new Animated.Value(1)

  render() {
    const { source, thumbnailSource, style, theme } = this.props;
    const { width, height, thumbnailLoaded, imageLoaded } = this.state;
    const styles = getStyles(theme.colors);

    return (
      <View onLayout={this.onLayout} style={[styles.container, { width, height }, style]}>
        {
          !thumbnailLoaded && !imageLoaded
          ? <Animated.View style={[styles.image, style, { opacity: this.placeholderOpacity }]}><View style={styles.placeholder} /></Animated.View>
          : null
        }
        {
          thumbnailSource && !imageLoaded
            ? (
              <Animated.Image
                source={thumbnailSource}
                style={[
                  styles.image,
                  style,
                  {
                    width,
                    height,
                    opacity: this.thumbnailOpacity
                  }
                ]}
                blurRadius={10}
                onLoad={this.onThumbnailLoad}
              />
            )
            : null
        }
        <Animated.Image
          source={source}
          style={[
            styles.image,
            style,
            {
              width,
              height,
              opacity: this.imageOpacity
            }
          ]}
          onLoad={this.onImageLoad}
        />
      </View>
    )
  }
}

FullWidthImage.displayName = displayName;
FullWidthImage.propTypes = propTypes;
FullWidthImage.defaultProps = defaultProps;

export default FullWidthImage;
