import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
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
  /** URI of the image to be rendered in the Lightbox */
  imageUri: PropTypes.string.isRequired,
  /**
   * Custom props for the Image component
   *
   * See https://facebook.github.io/react-native/docs/image.html#props for available props.
   */
  imageProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Primary text for the footer element */
  primaryFooterText: PropTypes.node.isRequired,
  /** Secondary text for the footer element */
  secondaryFooterText: PropTypes.node.isRequired,
  /** Left button for the footer element */
  leftFooterButton: PropTypes.node.isRequired,
  /** Right button for the footer element */
  rightFooterButton: PropTypes.node.isRequired,
  /** Description text for the footer element */
  descriptionFooterText: PropTypes.node.isRequired,
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
  headerProps: {},
  imageProps: {}
};

/** Lightboxs group and separate content within lists and page layouts. */
const Lightbox = ({ headerProps, imageUri, imageProps, primaryFooterText, secondaryFooterText, leftFooterButton, rightFooterButton, descriptionFooterText, style, theme, safeArea, ...custom }) => {
  const styles = getStyles(theme.colors, safeArea);

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
      <View style={styles.footer}>
        {
          descriptionFooterText
          ? (
            <View style={styles.footerDescription}>
              <Text type="body-contrast" numberOfLines={1}>{descriptionFooterText}</Text>
            </View>
          )
          : null
        }
        <View style={styles.footerContainer}>
          <View style={styles.textContainer}>
            <Text type="heading" numberOfLines={1} style={styles.primaryFooterText}>
              {primaryFooterText}
            </Text>
            <Text type="heading-secondary" numberOfLines={1} style={styles.secondaryFooterText}>
              {secondaryFooterText}
            </Text>
          </View>
          {leftFooterButton ? <View style={styles.leftFooterButton}>{leftFooterButton}</View> : null}
          {rightFooterButton ? <View style={styles.rightFooterButton}>{rightFooterButton}</View> : null}
        </View>
      </View>
    </View>
  )
};

Lightbox.displayName = displayName;
Lightbox.propTypes = propTypes;
Lightbox.defaultProps = defaultProps;

export default Lightbox;
