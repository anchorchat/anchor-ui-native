/* eslint jsx-a11y/anchor-is-valid: [0] */
import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../../anchor-ui-native/text';
import style from './style';

const WithThemeDoc = () => (
  <section className="page" style={style.container}>
    <h1 className="heading-large">withTheme</h1>
    <span><Text type="body-light">A higher order component which applies theme to your component by passing the theme prop. Theme contains a colors and fonts object. See <Link to="/theme-provider">ThemeProvider</Link>.</Text></span>
    <h2><Text type="heading">Arguments</Text></h2>
    <span><Text type="body-light" style={style.name}>Component</Text><Text>Component to apply theme to</Text></span>
    <h2><Text type="heading">Returns</Text></h2>
    <span><Text type="body-light" style={style.name}>ThemedComponent</Text><Text>Component with theme</Text></span>
  </section>
);

export default WithThemeDoc;
