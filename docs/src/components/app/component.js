import React from 'react';
import AppHeader from 'anchor-ui/app-header';
import ThemeProvider from 'anchor-ui/theme-provider';
import { HashRouter } from 'react-router-dom';
import colors from '../../anchor-ui-native/config/colors';
import Nav from '../nav';
import Router from './router';

const App = () => (
  <HashRouter>
    <ThemeProvider color={colors.primary}>
      <main>
        <AppHeader text="AnchorUI Native" />
        <article>
          <Nav />
          <Router />
        </article>
      </main>
    </ThemeProvider>
  </HashRouter>
);

export default App;
