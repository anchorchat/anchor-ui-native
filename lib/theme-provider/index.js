import React from 'react';
import PropTypes from 'prop-types';
import { colors, fonts, ThemeContext } from '../config';

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
    lighterGray: PropTypes.string
  }),
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
  /** Children to apply theme color to  */
  children: PropTypes.node.isRequired
};
const defaultProps = {
  colors,
  fonts
};

const ThemeProvider = (props) => {
  const value = {
    colors: {
      ...colors,
      ...props.colors
    },
    fonts: {
      ...fonts,
      ...props.fonts
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.displayName = displayName;
ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;