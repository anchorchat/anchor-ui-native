import React from 'react';
import AppHeader from 'anchor-ui/app-header';
import ThemeProvider from 'anchor-ui/theme-provider';
import Text from '../anchor-ui-native/text';
import Avatar from '../anchor-ui-native/avatar';
import colors from '../anchor-ui-native/config/colors';
import Nav from './nav';

const App = () => (
  <ThemeProvider color={colors.primary}>
    <main>
      <AppHeader text="AnchorUI Native" />
      <article>
        <Nav />
        <section className="page">
          <h1 className="heading-large">React Native UI kit for Chat Engines</h1>
          <h2><Text type="heading">Getting started</Text></h2>
          <span><Text>Install from npm</Text></span>
          <span><Text type="body-accent">npm i -S anchor-ui-native</Text></span>
          <Avatar text="PK" color="hotpink" />
        </section>
      </article>
    </main>
  </ThemeProvider>
);

export default App;
