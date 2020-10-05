const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                author
                date
                description
                title
              }
              id
            }
          }
        }
      }
    `,
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMdx.edges;

    // Create blog posts pages.
    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: `posts${post.node.fields.slug}`,
        component: path.resolve(`./src/page-templates/blog-post.js`),
        context: {
          id: post.node.id,
          next,
          previous,
          slug: post.node.fields.slug,
        },
      });
    });

    // Create blog post index pages.
    const postsPerIndexPage = 6;
    const numPages = Math.ceil(posts.length / postsPerIndexPage);
    createPage({
      path: '/',
      component: path.resolve('./src/page-templates/blog-post-list.js'),
      context: {
        currentPage: 1,
        limit: postsPerIndexPage,
        numPages,
        skip: 0,
      },
    });
    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/posts` : `/posts/${index + 1}`,
        component: path.resolve(`./src/page-templates/blog-post-list.js`),
        context: {
          currentPage: index + 1,
          limit: postsPerIndexPage,
          numPages,
          skip: index * postsPerIndexPage,
        },
      });
    });

    return null;
  });
};

exports.createSchemaCustomization = ({
  actions: { createTypes, createFieldExtension },
  createContentDigest,
}) => {
  createFieldExtension({
    name: 'mdx',
    extend() {
      return {
        type: 'String',
        resolve(source, args, context, info) {
          // Grab field
          const value = source[info.fieldName];
          // Isolate MDX
          const mdxType = info.schema.getType('Mdx');
          // Grab just the body contents of what MDX generates
          const { resolve } = mdxType.getFields().body;
          return resolve(
            {
              rawBody: value,
              internal: {
                contentDigest: createContentDigest(value), // Used for caching
              },
            },
            args,
            context,
            info,
          );
        },
      };
    },
  });

  createTypes(`
    type MdxFrontmatter {
      description: String @mdx
    }

    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }
  `);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
