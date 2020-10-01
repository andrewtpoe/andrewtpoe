import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import Layout from 'src/components/layout';

export const pageQuery = graphql`
  query BlogPostPageQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        keywords
        title
      }
    }
  }
`;

function BlogPostPageTemplate({ data }) {
  const {
    mdx: {
      body,
      frontmatter: { keywords, title },
    },
  } = data;

  const getSEOProps = React.useCallback(
    () => ({
      article: true,
      keywords,
      title,
    }),
    [keywords, title],
  );

  return (
    <Layout getSEOProps={getSEOProps}>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
}

export default BlogPostPageTemplate;
