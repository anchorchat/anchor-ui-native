import React from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import hoistStatics from 'hoist-non-react-statics';
import ThemeContext from '../config/theme-context';

const withTheme = (Component) => {
  const ThemedComponent = props => (
    <ThemeContext.Consumer>
      {theme => <Component {...props} theme={theme} />}
    </ThemeContext.Consumer>
  );

  ThemedComponent.displayName = wrapDisplayName(Component, 'withTheme');

  return hoistStatics(ThemedComponent, Component);
};

export default withTheme;
