import React from 'react';
import PropTypes from 'prop-types';
import { View, Image as NativeImage, ViewPropTypes } from 'react-native';
import getStyles from './styles';
import MessageTime from '../message-time';

const propTypes = {
  style: ViewPropTypes.style,
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
    source: NativeImage.propTypes.source.isRequired
  }).isRequired,
  onImagePress: PropTypes.func,
  onImageLongPress: PropTypes.func,
  imageSize: PropTypes.number.isRequired,
  imageComponent: PropTypes.any, // eslint-disable-line react/forbid-prop-types,
  imageStyle: ViewPropTypes.style
};

const defaultProps = {
  statusIcon: null,
  onImagePress: null,
  onImageLongPress: null,
  style: {},
  imageComponent: null,
  imageStyle: {}
};

const StickerMessage = ({
  style,
  timeText,
  align,
  statusIcon,
  theme,
  image,
  timeTextProps,
  imageProps,
  onImagePress,
  imageSize,
  imageComponent,
  imageStyle,
  onImageLongPress
}) => {
  const styles = getStyles(theme.colors, align, imageSize);
  const ImageComponent = imageComponent || NativeImage;

  return (
    <View style={[styles.container, style]}>
      <ImageComponent
        {...image}
        style={[styles.image, imageStyle]}
        onPress={onImagePress}
        onLongPress={onImageLongPress}
        size={imageSize}
        resizeMode="contain"
        resizeMethod="scale"
        {...imageProps}
      />
      <MessageTime
        align={align}
        statusIcon={statusIcon}
        timeText={timeText}
        timeTextProps={{ type: 'time-contrast', ...timeTextProps }}
        style={styles.time}
      />
    </View>
  );
};

StickerMessage.propTypes = propTypes;
StickerMessage.defaultProps = defaultProps;

export default StickerMessage;
