import React, { useState } from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/layout';

export default () => {
  const [name, setName] = useState('');
  const handleInput = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    navigate('/surprise/', { state: { name } });
  };

  return (
    <Layout>
      <h1>Sign Up</h1>
      <p>For what, you ask? It’s a surprise!</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={handleInput}
            style={{ display: 'block', fontSize: '1rem', padding: '0.25rem' }}
          />
        </label>
        <button
          type="submit"
          style={{
            background: 'rebeccapurple',
            border: 'none',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 900,
            padding: '0.5rem 1rem'
          }}
        >
          Sign Up
        </button>
      </form>
    </Layout>
  );
};
