import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>There are so many decisions!</h1>
    <p>Choose wisely.</p>
    <ul>
      <li>
        <Link to="/decisions/#pancakes-or-waffles">Pancakes or waffles?</Link>
      </li>
      <li>
        <Link to="/decisions/#chocoloate-or-vanilla">
          Chocolate or vanilla?
        </Link>
      </li>
    </ul>
    <h2 id="pancakes-or-waffles">Pancakes or waffles?</h2>
    <p>What is your favorite breakfast food?</p>
    <p>
      <Link to="/confirm/" state={{ choice: 'pancakes' }}>
        Pancakes
      </Link>{' '}
      or{' '}
      <Link to="/confirm/" state={{ choice: 'waffles' }}>
        Waffles
      </Link>
    </p>
    <h2 id="chocoloate-or-vanilla">Chocolate or vanilla?</h2>
    <p>What is your favorite flavor?</p>
    <p>
      <Link to="/confirm/" state={{ choice: 'chocolate' }}>
        Chocolate
      </Link>{' '}
      or{' '}
      <Link to="/confirm/" state={{ choice: 'vanilla' }}>
        Vanilla
      </Link>
    </p>
  </Layout>
);

export default SecondPage;
