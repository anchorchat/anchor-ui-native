/* eslint jsx-a11y/anchor-is-valid: [0] */
import React from 'react';
import { Link } from 'react-router-dom';
import find from 'lodash/find';
import Text from '../../anchor-ui-native/text';
import components from '../../components.json';

const componentData = find(components, { displayName: 'DimensionsProvider' });

const DimensionsProviderDoc = () => (
  <section className="page">
    <h1 className="heading-large">DimensionsProvider</h1>
    <span><Text type="body-light">{componentData.description}</Text></span>
    <span>
      <Text type="body">
        Use the <Link to="/with-safe-area">withSafeArea</Link> to pass safeArea to your components.
      </Text>
    </span>
    <span>
      <Text type="body">
        Or use the DimensionsConsumer from 'anchor-ui-native/dimensions' to add dimensions to your components.
      </Text>
    </span>
  </section>
);

export default DimensionsProviderDoc;
