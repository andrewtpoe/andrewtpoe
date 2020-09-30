import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import tw from 'twin.macro';

import H2 from 'src/components/h2';
import Layout from 'src/components/layout';

export const pageQuery = graphql`
  query BlogPostsIndexPageQuery($limit: Int!, $skip: Int!) {
    allMdx(
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            author
            date(formatString: "YYYY-MM-DD")
            description
            title
          }
        }
      }
    }
  }
`;

function PostSummary({ post }) {
  const {
    node: {
      fields: { slug },
      frontmatter: { title, author, date, description },
    },
  } = post;

  return (
    <article css={tw`py-4`}>
      <header>
        <H2>{title}</H2>
        <div css={tw`text-xs text-gray-600 pb-2`}>
          <span>{author}</span> | <span>{date}</span>
        </div>
        <MDXRenderer>{description}</MDXRenderer>
        <div css={tw`pt-5`}>
          <Link
            css={tw`rounded p-3 text-white bg-teal-500 hover:bg-teal-600`}
            to={`/blog${slug}`}
          >
            Read More
          </Link>
        </div>
      </header>
    </article>
  );
}

function BlogPostListPageTemplate({ data }) {
  const {
    allMdx: { edges: posts },
  } = data;

  const getSEOProps = React.useCallback(() => {}, []);

  return (
    <Layout getSEOProps={getSEOProps}>
      {posts.map((post) => (
        <PostSummary key={post.node.fields.slug} post={post} />
      ))}
    </Layout>
  );
}

export default BlogPostListPageTemplate;
