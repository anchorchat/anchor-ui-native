import React from 'react';
import PropTypes from 'prop-types';
import { View, Image as NativeImage, ViewPropTypes } from 'react-native';
import SvgImage from 'react-native-svg-uri';
import getStyles from './styles';
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

const StickerMessage = ({
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
  onImageLongPress,
  ...custom
}) => {
  const styles = getStyles(theme.colors, align);
  const ImageComponent = imageComponent || SvgImage;

  return (
    <View style={[styles.container, style]} {...custom}>
      <ImageComponent
        {...image}
        style={[styles.image, imageStyle]}
        onPress={onImagePress}
        onLongPress={onImageLongPress}
        size={imageSize}
        {...imageProps}
      />
      <MessageTime
        align={align}
        statusIcon={statusIcon}
        timeText={timeText}
        timeTextProps={!bodyText ? { type: 'time-contrast', ...timeTextProps } : timeTextProps}
        style={bodyText ? styles.timeWithBody : styles.time}
      />
    </View>
  );
};

StickerMessage.propTypes = propTypes;
StickerMessage.defaultProps = defaultProps;

export default StickerMessage;
