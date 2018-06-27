/* eslint jsx-a11y/anchor-is-valid: [0] */
import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../../anchor-ui-native/text';
import style from './style';
import Markdown from '../markdown';

const withTheme = `
\`\`\`jsx
import withTheme from 'anchor-ui-native/with-theme';
import MyComponent from './my-component';

export default withTheme(MyComponent);
\`\`\`
`;

const themeProp = `
\`\`\`js
const theme = {
  colors: {
    primary: 'primaryColor',
    lightPrimary: 'lightPrimaryColor',
    secondary: 'secondaryColor',
    black: 'blackColor',
    white: 'whiteColor',
    darkGray: 'darkGrayColor',
    gray: 'grayColor',
    lightGray: 'lightGrayColor',
    lighterGray: 'lighterGrayColor',
    divider: 'dividerColor'
  },
  fonts: {
    bold: fontFamily: { 'fontFamily-bold' }
    semiBold: fontFamily: { 'fontFamily-semibold' }
    regular: fontFamily: { 'fontFamily-regular' }
    italic: fontFamily: { 'fontFamily-italic' }
  }
};
\`\`\`
`;

const WithThemeDoc = () => (
  <section className="page">
    <section style={style.container}>
      <h1 className="heading-large">withTheme</h1>
      <span><Text type="body-light">A higher order component which applies theme to your component by passing the theme prop.</Text></span>
      <h2><Text type="heading">Arguments</Text></h2>
      <span><Text type="body-light" style={style.name}>Component</Text><Text>Component to apply theme to</Text></span>
      <h2><Text type="heading">Returns</Text></h2>
      <span><Text type="body-light" style={style.name}>ThemedComponent</Text><Text>Component with theme</Text></span>
      <Markdown title="Usage" markdown={withTheme} />
      <span><Text>The theme prop is an object containing the following values. See <Link to="/theme-provider">ThemeProvider</Link> for default values.</Text></span>
      <Markdown title="theme" markdown={themeProp} />
    </section>
  </section>
);

export default WithThemeDoc;
