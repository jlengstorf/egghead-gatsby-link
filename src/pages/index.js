import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Let’s have fun with links!</h1>
    <p>This the the home page. “Home” should be active in the nav bar.</p>
    <p>
      <Link to="/decisions/">Make some decisions &rarr;</Link>
    </p>
  </Layout>
);

export default IndexPage;
