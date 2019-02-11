import React from 'react';
import Layout from '../components/layout';

export default ({ location }) => (
  <Layout>
    <h1>Surprise, {location.state.name}! 🎉</h1>
    <p>You signed up!</p>
  </Layout>
);
