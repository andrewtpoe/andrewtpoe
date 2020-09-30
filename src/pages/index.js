import { graphql } from 'gatsby';
import React from 'react';

import Layout from 'src/components/layout';

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

function IndexPage({ data }) {
  const {
    site: {
      siteMetadata: { title },
    },
  } = data;

  return (
    <Layout>
      <p>This is text. Yay!</p>
    </Layout>
  );
}

export default IndexPage;
