import React from 'react';
import PropTypes from 'prop-types';
import { View, Image as NativeImage } from 'react-native';
import getStyles from './styles';
import Text from '../../text';
import Image from './image';
import MessageTime from '../message-time';

const propTypes = {
  bodyText: PropTypes.node,
  style: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
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
  imageSize: PropTypes.number.isRequired
};

const defaultProps = {
  bodyText: null,
  statusIcon: null,
  onImagePress: null
};

const ImageMessage = ({
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
  ...custom
}) => {
  const styles = getStyles(theme.colors, align);
  let maxWidth = imageSize;

  if (image.ratio < 1) {
    maxWidth = imageSize * image.ratio;
  }

  return (
    <View style={[styles.container, style]} {...custom}>
      <Image
        {...image}
        style={styles.image}
        onPress={onImagePress}
        size={imageSize}
        {...imageProps}
      />
      {
        bodyText
        ? (
          <Text
            style={[styles.bodyText, { maxWidth: maxWidth - 12 }]}
            type={align === 'right' ? 'body-contrast' : 'body'}
            {...bodyTextProps}
          >
            {bodyText}
          </Text>
        )
        : null
      }
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

ImageMessage.propTypes = propTypes;
ImageMessage.defaultProps = defaultProps;

export default ImageMessage;
