import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import NavLink from './nav-link';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
    <nav
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          fontWeight: 700,
          marginRight: '1rem',
          textDecoration: `none`
        }}
      >
        {siteTitle}
      </Link>
      <NavLink to="/decisions">Make Decisions</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/sign-up">Sign Up</NavLink>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
