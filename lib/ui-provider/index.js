import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from '../theme-provider';
import { DimensionsProvider } from '../dimensions';

const displayName = 'UIProvider';

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
  /** Children to apply theme and dimensions to  */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

const defaultProps = {
  colors: undefined,
  fonts: undefined
};

/** Provide theme and dimensions to all children using context */
const UIProvider = ({ children, colors, fonts }) => (
  <ThemeProvider colors={colors} fonts={fonts}>
    <DimensionsProvider>
      {children}
    </DimensionsProvider>
  </ThemeProvider>
);

UIProvider.propTypes = propTypes;
UIProvider.defaultProps = defaultProps;
UIProvider.displayName = displayName;

export default UIProvider;
