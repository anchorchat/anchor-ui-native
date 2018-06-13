import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'anchor-ui/menu';
import MenuItem from 'anchor-ui/menu-item';
import pushRoute from '../../utils/push-route';

const propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const Nav = ({ history }) => (
  <Menu style={{ width: '200px' }}>
    <MenuItem text="Getting started" onClick={() => pushRoute(history, '/')} />
    <MenuItem text="Styleguide" onClick={() => pushRoute(history, '/style-guide')} />
    <MenuItem text="Avatar" onClick={() => pushRoute(history, '/avatar')} />
    <MenuItem text="Button" onClick={() => pushRoute(history, '/button')} />
    <MenuItem text="ContentItem" onClick={() => pushRoute(history, '/content-item')} />
    <MenuItem text="ContextMenu" onClick={() => pushRoute(history, '/context-menu')} />
    <MenuItem text="Divider" onClick={() => pushRoute(history, '/divider')} />
    <MenuItem text="FullWidthImage" onClick={() => pushRoute(history, '/full-width-image')} />
    <MenuItem text="Header" onClick={() => pushRoute(history, '/header')} />
    <MenuItem text="Lightbox" onClick={() => pushRoute(history, '/lightbox')} />
    <MenuItem text="ListItem" onClick={() => pushRoute(history, '/list-item')} />
    <MenuItem text="Message" onClick={() => pushRoute(history, '/message')} />
    <MenuItem text="MessageHighlight" onClick={() => pushRoute(history, '/message-highlight')} />
    <MenuItem text="MessageInput" onClick={() => pushRoute(history, '/message-input')} />
    <MenuItem text="Picker" onClick={() => pushRoute(history, '/picker')} />
    <MenuItem text="Text" onClick={() => pushRoute(history, '/text')} />
    <MenuItem text="TextInput" onClick={() => pushRoute(history, '/text-input')} />
    <MenuItem text="ThemeProvider" onClick={() => pushRoute(history, '/theme-provider')} />
    <MenuItem text="withSafeArea" onClick={() => pushRoute(history, '/with-safe-area')} />
    <MenuItem text="withTheme" onClick={() => pushRoute(history, '/with-theme')} />
  </Menu>
);

Nav.propTypes = propTypes;

export default Nav;
