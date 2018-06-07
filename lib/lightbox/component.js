import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Header from '../header';
import getStyles from './styles';

const displayName = 'Lightbox';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** Primary text for the Header component */
  primaryHeaderText: PropTypes.node.isRequired,
  /** Left button for the Header component */
  leftHeaderButton: PropTypes.node.isRequired,
  /**
   * Custom props for the label Text component
   *
   * See Header page for available props.
   */
  headerProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
};

const defaultProps = {
  style: {},
  headerProps: {}
};

/** Lightboxs group and separate content within lists and page layouts. */
const Lightbox = ({ primaryHeaderText, leftHeaderButton, headerProps, theme, style, ...custom }) => {
  const styles = getStyles(theme.colors);

  return (
    <View {...custom}>
      <Header
        primaryText={primaryHeaderText}
        leftButton={leftHeaderButton}
        {...headerProps}
      />
    </View>
  )
};

Lightbox.displayName = displayName;
Lightbox.propTypes = propTypes;
Lightbox.defaultProps = defaultProps;

export default Lightbox;
