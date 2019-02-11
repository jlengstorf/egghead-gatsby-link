import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

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
      <Link to="/" style={linkStyles} activeStyle={activeStyles}>
        Home
      </Link>
      <Link
        to="/decisions"
        style={linkStyles}
        getProps={({ isPartiallyCurrent }) =>
          isPartiallyCurrent
            ? { style: { ...linkStyles, ...activeStyles } }
            : null
        }
      >
        Make Decisions
      </Link>
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
