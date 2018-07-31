import React from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import hoistStatics from 'hoist-non-react-statics';
import { getSafeArea, getOrientation } from '../config/platform';
import { DimensionsConsumer } from '../dimensions';

const withSafeArea = (Component) => {
  const WithSafeArea = props => (
    <DimensionsConsumer>
      {
        ({ dimensions, ref }) => (
          <Component
            {...props}
            ref={ref}
            safeArea={getSafeArea(dimensions.window)}
            orientation={getOrientation(dimensions.window)}
          />
        )
      }
    </DimensionsConsumer>
  );

  WithSafeArea.displayName = wrapDisplayName(Component, 'withSafeArea');

  return hoistStatics(WithSafeArea, Component);
};

export default withSafeArea;
