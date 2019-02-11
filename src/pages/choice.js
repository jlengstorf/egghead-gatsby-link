import React from 'react';
import Layout from '../components/layout';

export default ({ location }) => (
  <Layout>
    <h1>You chose {location.state.choice}.</h1>
    <p>
      Great choice! Press the “back” button in your browser to keep making
      decisions.
    </p>
  </Layout>
);
