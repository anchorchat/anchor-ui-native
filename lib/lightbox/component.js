import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Animated, Modal, StatusBar, TouchableWithoutFeedback, ViewPropTypes } from 'react-native';
import Header from '../header';
import getStyles from './styles';

const displayName = 'Lightbox';

const propTypes = {
  /** Override the styles of the root element */
  style: ViewPropTypes.style,
  /**
   * Custom props for the Header component
   *
   * See Header page for available props.
   */
  headerProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** The image source (either a remote URL or a local file resource) */
  source: Image.propTypes.source.isRequired,
  /** Optional thumbnail source */
  thumbnailSource: Image.propTypes.source,
  /**
   * Custom props for the Image component
   *
   * See https://facebook.github.io/react-native/docs/image.html#props for available props.
   */
  imageProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the image contianer element */
  imageContainerStyle: ViewPropTypes.style,
  /** Duration of the cross fade animations */
  fadeDuration: PropTypes.number,
  /** Lightbox footer, useful for rendering buttons or text in. */
  footer: PropTypes.node,
  /** Override the styles of the footer element */
  footerStyle: ViewPropTypes.style,
  /** Determine whether Lighbox is visible. */
  visible: PropTypes.bool,
  /** The onRequestClose callback is called when the user taps the back button on Android */
  onRequestClose: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
  safeArea: PropTypes.shape({
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired
};

const defaultProps = {
  style: {},
  imageContainerStyle: {},
  headerProps: {},
  imageProps: {},
  thumbnailSource: null,
  fadeDuration: 300,
  visible: false,
  footer: null,
  footerStyle: {}
};

/** Lightboxes display highlighted images */
class Lightbox extends Component {
  state = {
    imageLoaded: false,
    visible: false, // eslint-disable-line react/no-unused-state
    interfaceVisible: true
  }

  static getDerivedStateFromProps(props, state) {
    if (props.visible && !state.visible) {
      return {
        visible: true
      };
    }

    if (state.visible && !props.visible) {
      return {
        imageLoaded: false,
        visible: false
      };
    }

    return null;
  }

  onThumbnailLoad = () => {
    const { fadeDuration } = this.props;

    Animated.timing(this.thumbnailOpacity, {
      toValue: 1,
      duration: fadeDuration,
      useNativeDriver: true
    }).start();
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

  hideInterface = () => {
    const { fadeDuration } = this.props;

    Animated.timing(this.interfaceOpacity, {
      toValue: 0,
      duration: fadeDuration,
      useNativeDriver: true
    }).start(() => {
      this.setState({
        interfaceVisible: false
      });
    });
  }

  showInterface = () => {
    const { fadeDuration } = this.props;

    this.setState({
      interfaceVisible: true
    });

    Animated.timing(this.interfaceOpacity, {
      toValue: 1,
      duration: fadeDuration,
      useNativeDriver: true
    }).start();
  }

  thumbnailOpacity = new Animated.Value(0)
  imageOpacity = new Animated.Value(0)
  interfaceOpacity = new Animated.Value(1)

  render() {
    const {
      headerProps,
      source,
      thumbnailSource,
      imageProps,
      style,
      imageContainerStyle,
      theme,
      safeArea,
      visible,
      onRequestClose,
      footer,
      footerStyle,
      ...custom
    } = this.props;
    const { imageLoaded, interfaceVisible } = this.state;
    const styles = getStyles(theme.colors, safeArea);

    const thumbnailStyle = [styles.image, { opacity: this.thumbnailOpacity }];
    const imageStyle = [styles.image, { opacity: this.imageOpacity }];

    let onImagePress = null;

    if (imageLoaded) {
      onImagePress = interfaceVisible ? this.hideInterface : this.showInterface;
    }

    const interfaceStyle = [{ opacity: this.interfaceOpacity }, !interfaceVisible ? { display: 'none' } : null];

    return (
      <Modal
        visible={visible}
        animationType="fade"
        supportedOrientations={['portrait', 'landscape']}
        onRequestClose={onRequestClose}
      >
        <View style={[styles.root, style]} {...custom}>
          {visible ? <StatusBar barStyle="light-content" /> : null}
          <Animated.View style={[styles.headerAnimated, interfaceStyle]}>
            <Header
              style={styles.header}
              containerStyle={styles.headerContainer}
              primaryTextStyle={styles.primaryHeaderText}
              inModal
              {...headerProps}
            />
          </Animated.View>
          <View style={[styles.imageContainer, imageContainerStyle]}>
            {
              thumbnailSource && !imageLoaded
                ? (
                  <Animated.Image
                    source={thumbnailSource}
                    resizeMode="contain"
                    style={thumbnailStyle}
                    blurRadius={10}
                    onLoad={this.onThumbnailLoad}
                    {...imageProps}
                  />
                )
                : null
            }
            <TouchableWithoutFeedback onPress={onImagePress} style={styles.image}>
              <Animated.Image
                source={source}
                resizeMode="contain"
                style={imageStyle}
                onLoad={this.onImageLoad}
                {...imageProps}
              />
            </TouchableWithoutFeedback>
          </View>
          {
            footer
            ? (
              <Animated.View style={[styles.footer, interfaceStyle, footerStyle]}>
                {footer}
              </Animated.View>
            )
            : null
          }
        </View>
      </Modal>
    );
  }
}

Lightbox.displayName = displayName;
Lightbox.propTypes = propTypes;
Lightbox.defaultProps = defaultProps;

export default Lightbox;
