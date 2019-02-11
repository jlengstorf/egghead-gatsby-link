import React from 'react';
import { Link } from 'gatsby';

const linkStyles = {
  color: 'white',
  display: 'inline-block',
  margin: '0 0.5rem',
  padding: '0.25rem',
  textDecoration: 'none'
};

const activeStyles = {
  background: 'white',
  color: 'rebeccapurple'
};

const NavLink = ({ children, ...props }) => (
  <Link
    {...props}
    style={linkStyles}
    activeStyle={activeStyles}
    getProps={({ isPartiallyCurrent }) =>
      isPartiallyCurrent ? { style: { ...linkStyles, ...activeStyles } } : null
    }
  >
    {children}
  </Link>
);

export default NavLink;
