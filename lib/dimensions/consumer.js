import React, { forwardRef } from 'react';
import { Consumer } from './context';

const DimensionsConsumer = forwardRef(({ children }, ref) => (
  <Consumer>
    { dimensions => children({ dimensions, ref }) }
  </Consumer>
));

export default DimensionsConsumer;
