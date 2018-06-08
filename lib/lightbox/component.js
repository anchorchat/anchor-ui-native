import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import Header from '../header';
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
  /** URI of the image to be rendered in the Lightbox */
  imageUri: PropTypes.string.isRequired,
  /**
   * Custom props for the Image component
   *
   * See https://facebook.github.io/react-native/docs/image.html#props for available props.
   */
  imageProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
};

const defaultProps = {
  style: {},
  headerProps: {},
  imageProps: {}
};

/** Lightboxs group and separate content within lists and page layouts. */
const Lightbox = ({ headerProps, imageUri, imageProps, theme, style, ...custom }) => {
  const styles = getStyles(theme.colors);

  return (
    <View style={styles.root} {...custom}>
      <Header
        style={styles.header}
        containerStyle={styles.headerContainer}
        primaryTextStyle={styles.primaryHeaderText}
        {...headerProps}
      />
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUri }} resizeMode="contain" style={styles.image} {...imageProps} />
      </View>
    </View>
  )
};

Lightbox.displayName = displayName;
Lightbox.propTypes = propTypes;
Lightbox.defaultProps = defaultProps;

export default Lightbox;
