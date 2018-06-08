/* eslint jsx-a11y/anchor-is-valid: [0] */
import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../../anchor-ui-native/text';
import style from './style';
import Markdown from '../markdown';

const install = `
\`\`\`bash
npm i -S anchor-ui-native
\`\`\`
`;

const fonts = `
\`\`\`js
Font.loadAsync({
  'nunito-bold': require('<pathToAssets>/Nunito-Bold.ttf'),
  'nunito-italic': require('<pathToAssets>/Nunito-Italic.ttf'),
  'nunito-regular': require('<pathToAssets>/Nunito-Regular.ttf'),
  'nunito-semibold': require('<pathToAssets>/Nunito-SemiBold.ttf')
});
\`\`\`
`;

const theme = `
\`\`\`jsx
import ThemeProvider from 'anchor-ui-native/theme-provider';
import MyComponent from './my-component';

const App = () => (
  <ThemeProvider>
    <MyComponent />
  </ThemeProvider>
);

export default App;
\`\`\`
`;

const Home = () => (
  <section className="page">
    <section style={style.container}>
      <h1 className="heading-large">React Native UI kit for Chat Engines</h1>
      <h2><Text type="heading">Getting started</Text></h2>
      <Markdown markdown={install} title="Install from npm" />
      <h2><Text type="heading">Fonts</Text></h2>
      <span><Text>AnchorUI Native is designed with <a href="https://fonts.google.com/specimen/Nunito" target="blank" rel="noopener noreferrer">Nunito</a> but you can also supply your own font using the <Link to="/style-guide">ThemeProvider</Link> component.</Text></span>
      <span><Text>See the Expo documentation on how to <a href="https://docs.expo.io/versions/latest/guides/using-custom-fonts" target="blank" rel="noopener noreferrer">install custom fonts</a>.</Text></span>
      <span><Text>Make sure to name your fonts according to following code example</Text></span>
      <Markdown markdown={fonts} title="Install fonts" />
      <h2><Text type="heading">Theme</Text></h2>
      <span><Text>Your application needs to be wrapped in <Link to="/style-guide">ThemeProvider</Link> for the components to work.</Text></span>
      <Markdown markdown={theme} title="Using ThemeProvider" />
    </section>
  </section>
);

export default Home;
