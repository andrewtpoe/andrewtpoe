import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles } from 'twin.macro';

import MDXProvider from './MDXProvider';
import Header from './header';
import SEO from './seo';

const CustomGlobalStyle = createGlobalStyle`
  body {
    ${tw`font-light text-gray-800`}
  }
`;

function Layout({ children, getSEOProps = noop }) {
  return (
    <>
      <CustomGlobalStyle />
      <GlobalStyles />
      <SEO {...getSEOProps()} />
      <Header />
      <main
        css={tw`
          max-w-screen-md
          mx-auto
          px-2
          md:px-4
          lg:px-8
          pb-24
          md:pb-32
        `}
      >
        <MDXProvider>{children}</MDXProvider>
      </main>
    </>
  );
}

Layout.propTypes = {
  getSEOProps: PropTypes.func,
};

export default Layout;
