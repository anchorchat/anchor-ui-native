import React from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import ThemeContext from '../config/theme-context';

const withTheme = (Component) => {
  const ThemedComponent = props => (
    <ThemeContext.Consumer>
      {theme => <Component {...props} theme={theme} />}
    </ThemeContext.Consumer>
  );

  ThemedComponent.displayName = wrapDisplayName(Component, 'withTheme');

  return ThemedComponent;
};

export default withTheme;
