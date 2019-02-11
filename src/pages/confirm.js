import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const choiceStyles = {
  display: 'inline-block',
  margin: '0 1rem 0 0'
};

export default ({ location }) => (
  <Layout>
    <h1>Are you sure you want to choose {location.state.choice}?</h1>
    <p>
      No pressure, but this is <em>really</em> important.
    </p>
    <p>
      <Link
        style={choiceStyles}
        to="/choice/"
        state={{ choice: location.state.choice }}
        replace
      >
        Yes, I’m sure.
      </Link>
      <Link style={choiceStyles} to="/decisions/">
        No! What a fool I’ve been!
      </Link>
    </p>
  </Layout>
);
