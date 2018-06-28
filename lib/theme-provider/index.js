import React from 'react';
import PropTypes from 'prop-types';
import { colors as defaultColors, fonts as defaultFonts, ThemeContext } from '../config';

const displayName = 'ThemeProvider';

const propTypes = {
  /** Your theme's colors */
  colors: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    black: PropTypes.string,
    white: PropTypes.string,
    darkGray: PropTypes.string,
    gray: PropTypes.string,
    lightGray: PropTypes.string,
    lighterGray: PropTypes.string,
    divider: PropTypes.string
  }),
  /** Your theme's fonts */
  fonts: PropTypes.shape({
    regular: PropTypes.shape({
      fontFamily: PropTypes.string
    }),
    semiBold: PropTypes.shape({
      fontFamily: PropTypes.string
    }),
    bold: PropTypes.shape({
      fontFamily: PropTypes.string
    }),
    italic: PropTypes.shape({
      fontFamily: PropTypes.string
    }),
  }),
  /** Children to apply theme to  */
  children: PropTypes.node.isRequired
};

const defaultProps = {
  colors: defaultColors,
  fonts: defaultFonts
};

/** Provide theme to all children using context */
const ThemeProvider = ({
  colors,
  fonts,
  children,
  ...custom
}) => {
  const value = {
    colors: {
      ...colors,
      ...colors
    },
    fonts: {
      ...fonts,
      ...fonts
    }
  };

  return (
    <ThemeContext.Provider value={value} {...custom}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.displayName = displayName;
ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;
