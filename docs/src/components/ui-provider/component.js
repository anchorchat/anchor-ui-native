/* eslint jsx-a11y/anchor-is-valid: [0] */
import React from 'react';
import { Link } from 'react-router-dom';
import find from 'lodash/find';
import Text from '../../anchor-ui-native/text';
import components from '../../components.json';
import Props from '../props';

const componentData = find(components, { displayName: 'UIProvider' });

const UIProviderDoc = () => (
  <section className="page">
    <h1 className="heading-large">UIProvider</h1>
    <span><Text type="body-light">{componentData.description}</Text></span>
    <span>
      <Text type="body">
        Adds <Link to="/theme-provider">ThemeProvider</Link> and <Link to="/dimensions-provider">DimensionsProvider</Link> to your app. {/* eslint-disable-line max-len */}
      </Text>
    </span>
    <Props props={componentData.props} />
  </section>
);

export default UIProviderDoc;
