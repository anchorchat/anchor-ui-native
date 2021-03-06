/* eslint jsx-a11y/anchor-is-valid: [0] */
import React from 'react';
import { Link } from 'react-router-dom';
import find from 'lodash/find';
import Text from '../../anchor-ui-native/text';
import components from '../../components.json';
import Props from '../props';

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
        Or use the DimensionsConsumer from &apos;anchor-ui-native/dimensions&apos; to add dimensions to your components. {/* eslint-disable-line max-len */}
      </Text>
    </span>
    <Props props={componentData.props} />
  </section>
);

export default DimensionsProviderDoc;
