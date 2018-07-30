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

const ui = `
\`\`\`jsx
import UIProvider from 'anchor-ui-native/ui-provider';
import MyComponent from './my-component';

const App = () => (
  <UIProvider>
    <MyComponent />
  </UIProvider>
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
          Your application needs to be wrapped in <Link to="/ui-provider">UIProvider</Link> for the components to work. {/* eslint-disable-line max-len */}
        </Text>
      </span>
      <Markdown markdown={ui} title="Using UIProvider" />
    </section>
  </section>
);

export default Home;
