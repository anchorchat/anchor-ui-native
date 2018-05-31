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
  </Menu>
);

Nav.propTypes = propTypes;

export default Nav;
