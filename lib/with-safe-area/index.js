import React from 'react';
import { getSafeArea, getOrientation } from '../config/platform';
import { DimensionsConsumer } from '../dimensions';

const withSafeArea = Component => props => (
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

export default withSafeArea;
