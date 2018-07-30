/* eslint jsx-a11y/anchor-is-valid: [0] */
import React from 'react';
import { Link } from 'react-router-dom';
import find from 'lodash/find';
import map from 'lodash/map';
import Text from '../../anchor-ui-native/text';
import style from './style';
import components from '../../components.json';
import Props from '../props';
import { colors } from '../../anchor-ui-native/config';

const componentData = find(components, { displayName: 'UIProvider' });

const UIProviderDoc = () => (
  <section className="page">
    <h1 className="heading-large">UIProvider</h1>
    <span><Text type="body-light">{componentData.description}</Text></span>
    <span>
      <Text type="body">
        Adds the <Link to="/theme-provider">ThemeProvider</Link> to your app.
      </Text>
      <Text type="body">
        Adds the <Link to="/dimensions-provider">DimensionsProvider</Link> to your app.
      </Text>
    </span>
  </section>
);

export default UIProviderDoc;
