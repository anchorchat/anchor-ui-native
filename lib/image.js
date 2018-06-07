import React, { Component } from 'react'
import { View, Image, StyleSheet, Animated } from 'react-native'

export default class FullWidthImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: props.width || null,
      height: props.height || null,
      thumbnailLoaded: false,
      imageLoaded: false
    }
  }

  onLayout = (event) => {
    const { ratio, width, height, source, thumbnailSource } = this.props;
    const containerWidth = event.nativeEvent.layout.width;

    let imageRatio;

    if (ratio) {
      imageRatio = ratio;
    }

    if (width && height) {
      imageRatio = width / height;
    }

    if (imageRatio) {
      return this.setState({
        width: containerWidth,
        height: containerWidth / imageRatio
      })
    }

    return Image.getSize((thumbnailSource && thumbnailSource.uri) || source.uri, (width, height) => {
      this.setState({
        width: containerWidth,
        height: containerWidth / (width / height)
      })
    });
  }

  onLoadThumbnail = () => {
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

  onLoadImage = () => {
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
    const { source, thumbnailSource, style, placeholder } = this.props;
    const { width, height, thumbnailLoaded, imageLoaded } = this.state;

    const place = (
      <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#787878' }} />
    )

    return (
      <View onLayout={this.onLayout} style={[styles.container, { width, height }]}>
        {
          !thumbnailLoaded && !imageLoaded
          ? <Animated.View style={[styles.image, style, { opacity: this.placeholderOpacity }]}>{place}</Animated.View>
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
                onLoad={this.onLoadThumbnail}
              />
            )
            : null
        }
        <Animated.Image
          source={source}
          style={[
            styles.image,
            style,
            { width, height },
            { opacity: this.imageOpacity }
          ]}
          onLoad={this.onLoadImage}
        />
      </View>
    )
  }
}

FullWidthImage.defaultProps = {
  fadeDuration: 300
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    position: 'relative'
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
