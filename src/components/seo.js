/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook.
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import { useLocation } from '@reach/router';

function SEO({
  article = false,
  children,
  description,
  image,
  keywords,
  title,
}) {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            defaultDescription: description
            defaultImage: image
            defaultTitle
            siteUrl
            titleTemplate
            twitterUsername
          }
        }
      }
    `,
  );

  const {
    defaultDescription,
    defaultImage,
    defaultTitle,
    siteUrl,
    titleTemplate,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    defaultTitle: defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    keywords,
    title: title,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      defaultTitle={seo.defaultTitle}
      title={seo.title}
      titleTemplate={titleTemplate}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}

      {article && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      {children}
    </Helmet>
  );
}

SEO.propTypes = {
  article: PropTypes.bool,
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string,
  title: PropTypes.string,
};

export default SEO;
