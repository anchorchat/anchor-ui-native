import React from 'react';
import AppHeader from 'anchor-ui/app-header';
import ThemeProvider from 'anchor-ui/theme-provider';
import Text from './anchor-ui-native/text';
import colors from './anchor-ui-native/config/colors';

const App = () => (
  <ThemeProvider color={colors.primary}>
    <article>
      <AppHeader text="AnchorUI Native" />
      <main>
        <Text>This is native</Text>g
      </main>
    </article>
  </ThemeProvider>
);

export default App;
