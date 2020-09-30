import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles } from 'twin.macro';

import Header from './header';
import SEO from './seo'

const CustomGlobalStyle = createGlobalStyle`
  body {
    ${tw`text-gray-700`}
  }
`;

function Layout({ children }) {
  return (
    <>
      <CustomGlobalStyle />
      <GlobalStyles />
      <SEO />
      <Header />
      <main css={tw`max-w-screen-md mx-auto p-2`}>{children}</main>
    </>
  );
}

export default Layout;
