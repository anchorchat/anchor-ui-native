import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Animated, Text as NativeText, Modal, StatusBar, TouchableWithoutFeedback } from 'react-native';
import Header from '../header';
import Text from '../text';
import getStyles from './styles';

const displayName = 'Lightbox';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
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
  imageContainerStyle: View.propTypes.style,
  /** Duration of the cross fade animations */
  fadeDuration: PropTypes.number,
  /** Primary text for the footer element */
  primaryFooterText: PropTypes.node.isRequired,
  /** Override the styles of the primaryFooterText element */
  primaryFooterTextStyle: NativeText.propTypes.style,
  /** Secondary text for the footer element */
  secondaryFooterText: PropTypes.node.isRequired,
  /** Override the styles of the secondaryFooterText element */
  secondaryFooterTextStyle: NativeText.propTypes.style,
  /** Left button for the footer element */
  leftFooterButton: PropTypes.node.isRequired,
  /** Override the styles of the leftFooterButton element */
  leftFooterButtonStyle: View.propTypes.style,
  /** Override the styles of the rightFooterButton element */
  rightFooterButtonStyle: View.propTypes.style,
  /** Right button for the footer element */
  rightFooterButton: PropTypes.node.isRequired,
  /** Override the styles of the footer element */
  footerStyle: View.propTypes.style,
  /** Description text for the footer element */
  descriptionFooterText: PropTypes.node.isRequired,
  /** Override the styles of the primaryText element */
  descriptionFooterTextStyle: NativeText.propTypes.style,
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
  footerStyle: {},
  descriptionFooterTextStyle: {},
  primaryFooterTextStyle: {},
  secondaryFooterTextStyle: {},
  leftFooterButtonStyle: {},
  rightFooterButtonStyle: {},
  headerProps: {},
  imageProps: {},
  thumbnailSource: null,
  fadeDuration: 300,
  visible: false
};

/** Lightboxs group and separate content within lists and page layouts. */
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
      this.setState(() => ({
        imageLoaded: true
      }));
    });
  }

  hideInterface = () => {
    const { fadeDuration } = this.props;

    Animated.timing(this.interfaceOpacity, {
      toValue: 0,
      duration: fadeDuration,
      useNativeDriver: true
    }).start(() => {
      this.setState(() => ({
        interfaceVisible: false
      }));
    });
  }

  showInterface = () => {
    const { fadeDuration } = this.props;

    Animated.timing(this.interfaceOpacity, {
      toValue: 1,
      duration: fadeDuration,
      useNativeDriver: true
    }).start(() => {
      this.setState(() => ({
        interfaceVisible: true
      }));
    });
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
      primaryFooterText,
      secondaryFooterText,
      leftFooterButton,
      rightFooterButton,
      descriptionFooterText,
      style,
      imageContainerStyle,
      footerStyle,
      descriptionFooterTextStyle,
      primaryFooterTextStyle,
      secondaryFooterTextStyle,
      leftFooterButtonStyle,
      rightFooterButtonStyle,
      theme,
      safeArea,
      visible,
      onRequestClose,
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

    return (
      <Modal
        visible={visible}
        animationType="fade"
        supportedOrientations={['portrait', 'landscape']}
        onRequestClose={onRequestClose}
      >
        <View style={[styles.root, style]} {...custom}>
          {visible ? <StatusBar barStyle="light-content" /> : null}
          <Animated.View style={{ opacity: this.interfaceOpacity }}>
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
          <Animated.View style={[styles.footer, footerStyle, { opacity: this.interfaceOpacity }]}>
            {
              descriptionFooterText
              ? (
                <View style={styles.footerDescription}>
                  <Text
                    type="body-contrast"
                    numberOfLines={1}
                    style={descriptionFooterTextStyle}
                  >
                    {descriptionFooterText}
                  </Text>
                </View>
              )
              : null
            }
            <View style={styles.footerContainer}>
              <View style={styles.textContainer}>
                <Text
                  type="heading"
                  numberOfLines={1}
                  style={[styles.primaryFooterText, primaryFooterTextStyle]}
                >
                  {primaryFooterText}
                </Text>
                <Text
                  type="heading-secondary"
                  numberOfLines={1}
                  style={[styles.secondaryFooterText, secondaryFooterTextStyle]}
                >
                  {secondaryFooterText}
                </Text>
              </View>
              {
                leftFooterButton
                ? (
                  <View style={[styles.leftFooterButton, leftFooterButtonStyle]}>
                    {leftFooterButton}
                  </View>
                )
                : null
              }
              {
                rightFooterButton
                ? (
                  <View style={[styles.rightFooterButton, rightFooterButtonStyle]}>
                    {rightFooterButton}
                  </View>
                )
                : null
              }
            </View>
          </Animated.View>
        </View>
      </Modal>
    );
  }
}

Lightbox.displayName = displayName;
Lightbox.propTypes = propTypes;
Lightbox.defaultProps = defaultProps;

export default Lightbox;
