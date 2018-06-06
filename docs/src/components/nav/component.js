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
  <Menu>
    <MenuItem text="Getting started" onClick={() => pushRoute(history, '/')} />
    <MenuItem text="Styleguide" onClick={() => pushRoute(history, '/style-guide')} />
    <MenuItem text="Button" onClick={() => pushRoute(history, '/button')} />
    <MenuItem text="Header" onClick={() => pushRoute(history, '/header')} />
    <MenuItem text="ListItem" onClick={() => pushRoute(history, '/list-item')} />
    <MenuItem text="MessageHighlight" onClick={() => pushRoute(history, '/message-highlight')} />
    <MenuItem text="MessageInput" onClick={() => pushRoute(history, '/message-input')} />
    <MenuItem text="TextInput" onClick={() => pushRoute(history, '/text-input')} />
  </Menu>
);

Nav.propTypes = propTypes;

export default Nav;
