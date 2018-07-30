import React from 'react';
import AppHeader from 'anchor-ui/app-header';
import Button from 'anchor-ui/button';
import ThemeProvider from 'anchor-ui/theme-provider';
import { HashRouter } from 'react-router-dom';
import colors from '../../anchor-ui-native/config/colors';
import Nav from '../nav';
import Router from './router';
import logo from '../../assets/images/logo.svg';
import github from '../../assets/images/github.svg';

const App = () => (
  <HashRouter>
    <ThemeProvider color={colors.primary}>
      <main>
        <AppHeader
          text="AnchorUI Native"
          icon={<img src={logo} alt="Anchor.Chat" style={{ height: '100%' }} />}
          rightButton={(
            <a
              href="https://github.com/anchorchat/anchor-ui-native"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button iconButton>
                <img style={{ width: 24, height: 24 }} src={github} alt="Github" />
              </Button>
            </a>
          )}
        />
        <article>
          <Nav />
          <Router />
        </article>
      </main>
    </ThemeProvider>
  </HashRouter>
);

export default App;
