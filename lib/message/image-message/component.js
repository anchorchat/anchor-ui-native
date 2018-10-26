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
  bodyText: PropTypes.node,
  style: ViewPropTypes.style,
  bodyTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  timeTextProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  imageProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  timeText: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['right', 'left']).isRequired,
  statusIcon: PropTypes.node,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
  image: PropTypes.shape({
    source: NativeImage.propTypes.source.isRequired,
    thumbnailSource: NativeImage.propTypes.source,
    ratio: PropTypes.number.isRequired
  }).isRequired,
  onImagePress: PropTypes.func,
  onImageLongPress: PropTypes.func,
  imageSize: PropTypes.number.isRequired,
  imageComponent: PropTypes.any, // eslint-disable-line react/forbid-prop-types,
  imageStyle: ViewPropTypes.style,
  hyperlinkProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  enableHyperlinks: PropTypes.bool.isRequired,
  progress: PropTypes.number,
  progressProps: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  bodyText: null,
  statusIcon: null,
  onImagePress: null,
  onImageLongPress: null,
  style: {},
  imageComponent: null,
  imageStyle: {},
  progress: null
};

class ImageMessage extends Component {
  renderProgress = () => {
    const {
      imageSize,
      progress,
      theme,
      align,
      image,
      progressProps
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
      style,
      bodyText,
      timeText,
      align,
      statusIcon,
      theme,
      image,
      bodyTextProps,
      timeTextProps,
      imageProps,
      onImagePress,
      imageSize,
      imageComponent,
      imageStyle,
      enableHyperlinks,
      hyperlinkProps,
      onImageLongPress
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
