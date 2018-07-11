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

const componentData = find(components, { displayName: 'ThemeProvider' });

const ThemeProviderDoc = () => (
  <section className="page">
    <h1 className="heading-large">ThemeProvider</h1>
    <span><Text type="body-light">{componentData.description}</Text></span>
    <span><Text type="body">Use the <Link to="/with-theme">withTheme</Link> to pass theme to your components.</Text></span>
    <h2><Text type="heading">Defaults</Text></h2>
    <h2><Text type="heading-secondary">Colors</Text></h2>
    {map(colors, (color, name) => <span key={name}><Text type="body-light" style={style.name}>{name}:</Text> <Text>{color}</Text></span>)}
    <h2><Text type="heading-secondary">Fonts</Text></h2>
    <span>
      <Text>
        See <a href="https://github.com/anchorchat/anchor-ui-native/blob/develop/lib/config/fonts.js" target="blank" rel="noopener noreferrer">fonts.js</a> for default values and see the <Link to="/style-guide">Styleguide</Link> for a representation.
      </Text>
    </span>
    <Props props={componentData.props} />
    <span>
      <Text type="body-light">
        Other properties are applied to the root element. See <a href="https://facebook.github.io/react-native/docs/view.html#props" target="blank" rel="noopener noreferrer">https://facebook.github.io/react-native/docs/view.html#props</a> for all available props.
      </Text>
    </span>
  </section>
);

export default ThemeProviderDoc;
