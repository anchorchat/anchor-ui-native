import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image as NativeImage, ViewPropTypes } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import Circle from 'react-native-progress/Circle';
import getStyles from './styles';
import Text from '../../text';
import Image from './image';
import MessageTime from '../message-time';

const propTypes = {
  align: PropTypes.oneOf(['right', 'left']).isRequired,
  bodyText: PropTypes.node,
  bodyTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  enableHyperlinks: PropTypes.bool.isRequired,
  hyperlinkProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  image: PropTypes.shape({
    ratio: PropTypes.number.isRequired,
    source: NativeImage.propTypes.source.isRequired,
    thumbnailSource: NativeImage.propTypes.source
  }).isRequired,
  imageComponent: PropTypes.any, // eslint-disable-line react/forbid-prop-types,
  imageProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  imageSize: PropTypes.number.isRequired,
  imageStyle: ViewPropTypes.style,
  onImageLongPress: PropTypes.func,
  onImagePress: PropTypes.func,
  progress: PropTypes.number,
  progressProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  statusIcon: PropTypes.node,
  style: ViewPropTypes.style,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
  timeText: PropTypes.node.isRequired,
  timeTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  bodyText: null,
  imageComponent: null,
  imageStyle: {},
  onImageLongPress: null,
  onImagePress: null,
  progress: null,
  statusIcon: null,
  style: {}
};

class ImageMessage extends Component {
  renderProgress = () => {
    const {
      align,
      image,
      imageSize,
      progress,
      progressProps,
      theme
    } = this.props;
    const styles = getStyles(theme.colors, align);

    if (progress === null || progress === 1) {
      return null;
    }

    let width = imageSize * image.ratio;
    let height = imageSize;

    if (image.ratio > 1) {
      width = imageSize;
      height = imageSize / image.ratio;
    }

    const style = [styles.progress, { width, height }];

    return (
      <View style={style}>
        <Circle
          size={50}
          progress={progress}
          borderWidth={0}
          color="#FFF"
          {...progressProps}
        />
      </View>
    );
  }

  render() {
    const {
      align,
      bodyText,
      bodyTextProps,
      enableHyperlinks,
      hyperlinkProps,
      image,
      imageComponent,
      imageProps,
      imageSize,
      imageStyle,
      onImageLongPress,
      onImagePress,
      statusIcon,
      style,
      theme,
      timeText,
      timeTextProps
    } = this.props;
    const styles = getStyles(theme.colors, align);
    let maxWidth = imageSize;

    if (image.ratio < 1) {
      maxWidth = imageSize * image.ratio;
    }

    const ImageComponent = imageComponent || Image;

    let content = null;

    if (bodyText) {
      content = (
        <Text
          style={[styles.bodyText, { maxWidth: maxWidth - 12 }]}
          type={align === 'right' ? 'body-contrast' : 'body'}
          {...bodyTextProps}
        >
          {bodyText}
        </Text>
      );
    }

    if (bodyText && enableHyperlinks) {
      content = (
        <Hyperlink linkStyle={styles.link} {...hyperlinkProps}>
          {content}
        </Hyperlink>
      );
    }

    return (
      <View style={[styles.container, style]}>
        <ImageComponent
          {...image}
          style={[styles.image, imageStyle]}
          onPress={onImagePress}
          onLongPress={onImageLongPress}
          size={imageSize}
          {...imageProps}
        />
        {this.renderProgress()}
        {content}
        <MessageTime
          align={align}
          statusIcon={statusIcon}
          timeText={timeText}
          timeTextProps={!bodyText ? { type: 'time-contrast', ...timeTextProps } : timeTextProps}
          style={bodyText ? styles.timeWithBody : styles.time}
        />
      </View>
    );
  }
}

ImageMessage.propTypes = propTypes;
ImageMessage.defaultProps = defaultProps;

export default ImageMessage;
