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
      <h2><Text type="heading">Theme</Text></h2>
      <span>
        <Text>
          Your application needs to be wrapped in <Link to="/style-guide">ThemeProvider</Link> for the components to work. {/* eslint-disable-line max-len */}
        </Text>
      </span>
      <Markdown markdown={theme} title="Using ThemeProvider" />
    </section>
  </section>
);

export default Home;
