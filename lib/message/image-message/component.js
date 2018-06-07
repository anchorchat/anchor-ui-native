import React from 'react';
import PropTypes from 'prop-types';
import { View, Image as NativeImage } from 'react-native';
import getStyles from './styles';
import Text from '../../text';
import Image from '../../image';
import MessageTime from '../message-time';

const propTypes = {
  bodyText: PropTypes.node.isRequired,
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
  }).isRequired
};

const defaultProps = {
  statusIcon: null
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
  imageProps
}) => {
  const styles = getStyles(theme.colors, align);

  return (
    <View style={[styles.container, style]}>
      <Image {...image} style={styles.image} {...imageProps} />
      <Text type={align === 'right' ? 'body-contrast' : 'body'} {...bodyTextProps}>{bodyText}</Text>
      <MessageTime align={align} statusIcon={statusIcon} timeText={timeText} timeTextProps={timeTextProps} />
    </View>
  );
};

ImageMessage.propTypes = propTypes;
ImageMessage.defaultProps = defaultProps;

export default ImageMessage;
