import React from 'react';
import PropTypes from 'prop-types';
import { View, Image as NativeImage } from 'react-native';
import getStyles from './styles';
import Text from '../../text';
import Image from '../../image';

const propTypes = {
  bodyText: PropTypes.node.isRequired,
  time: PropTypes.node.isRequired,
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
}

const ImageMessage = ({ bodyText, time, align, statusIcon, theme, image }) => {
  const styles = getStyles(theme.colors, align);

  return (
    <View style={styles.container}>
      <Image {...image} style={{ marginBottom: 8 }} />
      <Text type={align === 'right' ? 'body-contrast' : 'body'}>{bodyText}</Text>
      <View style={styles.timeContainer}>
        <Text type={align === 'right' ? 'time-contrast' : 'time'}>{time}</Text>
        {statusIcon}
      </View>
    </View>
  );
};

ImageMessage.propTypes = propTypes;
ImageMessage.defaultProps = defaultProps;

export default ImageMessage;
