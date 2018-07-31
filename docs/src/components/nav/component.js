import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'anchor-ui/menu';
import MenuItem from 'anchor-ui/menu-item';
import pushRoute from '../../utils/push-route';
import anchorUiNative from '../../anchor-ui-native/package.json';

const propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const Nav = ({ history }) => (
  <Menu header={`Version: ${anchorUiNative.version}`} style={{ width: '200px' }}>
    <MenuItem text="Getting started" onClick={() => pushRoute(history, '/')} />
    <MenuItem text="Styleguide" onClick={() => pushRoute(history, '/style-guide')} />
    <MenuItem text="AlphabetPicker" onClick={() => pushRoute(history, '/alphabet-picker')} />
    <MenuItem text="Avatar" onClick={() => pushRoute(history, '/avatar')} />
    <MenuItem text="Button" onClick={() => pushRoute(history, '/button')} />
    <MenuItem text="ContactList" onClick={() => pushRoute(history, '/contact-list')} />
    <MenuItem text="ContentItem" onClick={() => pushRoute(history, '/content-item')} />
    <MenuItem text="ContextMenu" onClick={() => pushRoute(history, '/context-menu')} />
    <MenuItem text="Counter" onClick={() => pushRoute(history, '/counter')} />
    <MenuItem text="DimensionsProvider" onClick={() => pushRoute(history, '/dimensions-provider')} />  {/* eslint-disable-line max-len */}
    <MenuItem text="Divider" onClick={() => pushRoute(history, '/divider')} />
    <MenuItem text="Header" onClick={() => pushRoute(history, '/header')} />
    <MenuItem text="Icons" onClick={() => pushRoute(history, '/icons')} />
    <MenuItem text="Lightbox" onClick={() => pushRoute(history, '/lightbox')} />
    <MenuItem text="ListItem" onClick={() => pushRoute(history, '/list-item')} />
    <MenuItem text="Message" onClick={() => pushRoute(history, '/message')} />
    <MenuItem text="MessageHighlight" onClick={() => pushRoute(history, '/message-highlight')} />
    <MenuItem text="MessageInput" onClick={() => pushRoute(history, '/message-input')} />
    <MenuItem text="MessageSeparator" onClick={() => pushRoute(history, '/message-separator')} />
    <MenuItem text="Picker" onClick={() => pushRoute(history, '/picker')} />
    <MenuItem text="Text" onClick={() => pushRoute(history, '/text')} />
    <MenuItem text="TextInput" onClick={() => pushRoute(history, '/text-input')} />
    <MenuItem text="ThemeProvider" onClick={() => pushRoute(history, '/theme-provider')} />
    <MenuItem text="Touchable" onClick={() => pushRoute(history, '/touchable')} />
    <MenuItem text="withSafeArea" onClick={() => pushRoute(history, '/with-safe-area')} />
    <MenuItem text="withTheme" onClick={() => pushRoute(history, '/with-theme')} />
    <MenuItem text="UIProvider" onClick={() => pushRoute(history, '/ui-provider')} />
  </Menu>
);

Nav.propTypes = propTypes;

export default Nav;
