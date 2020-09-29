import { StaticQuery, graphql } from 'gatsby';
// import { normalize } from 'polished';
// import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { MDXProvider } from '@mdx-js/react';

// import A from '../components/a';
// import H1 from '../components/h1';
// import H2 from '../components/h2';
// import H3 from '../components/h3';
// import Hr from '../components/hr';
// import Img from '../components/img';
// import P from '../components/p';

// import Footer from '../compositions/footer';
// import Header from '../compositions/header';
// import { siteMetadata } from '../../gatsby-config';

// const SPACE_UNIT = 8;

// const theme = {
//   colors: {
//     grey0: '#ffffff',
//     grey1: '#eeeeee',
//     grey2: '#e0e0e0',
//     grey3: '#9e9e9e',
//     grey4: '#666666',
//     grey5: '#333333',
//     primary: '#32a8ba',
//     secondary: '#756A3F',
//     danger: '#C72B2B',
//     info: '#622ED1',
//     success: '#47D12E',
//     warning: '#E8970C',
//     text: '#333333',
//     textLight: '#666666',
//   },
//   dimensions: {
//     fontSizeXS: `${SPACE_UNIT}px`,
//     fontSizeSM: `${SPACE_UNIT * 1.5}px`,
//     fontSize: `${SPACE_UNIT * 2}px`,
//     fontSizeLG: `${SPACE_UNIT * 3.5}px`,
//     fontSizeXL: `${SPACE_UNIT * 7}px`,
//     spaceUnit: `${SPACE_UNIT}px`,
//   },
// };

const GlobalStyle = createGlobalStyle`
  ${'' /* ${normalize()}

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    color: ${({ theme }) => theme.colors.text};
    font-family: -apple-system,
                 BlinkMacSystemFont,
                 "Segoe UI",
                 Roboto,
                 Helvetica,
                 Arial,
                 sans-serif,
                 "Apple Color Emoji",
                 "Segoe UI Emoji",
                 "Segoe UI Symbol";
    font-size: ${({ theme }) => theme.dimensions.fontSize};
    letter-spacing: 1px;
    line-height: 1.5;
  } */}
`;

const AppWrapper = styled.div`
  /* margin: 0 auto;
  max-width: 600px;

  @media all and (max-width: 640px) {
    margin: 0 20px;
  } */
`;

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
    >
      {({ site }) => (
        <>
          <Helmet
            title={site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: site.siteMetadata.description,
              },
              {
                name: 'keywords',
                content:
                  'Andrew Poe, Andrew T. Poe, andrewtpoe, web developer, frontend developer, software engineer',
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyle />
              <MDXProvider
                components={{
                  a: A,
                  h1: H1,
                  h2: H2,
                  h3: H3,
                  hr: Hr,
                  img: Img,
                  p: P,
                }}
              >
                <AppWrapper>
                  <Header />
                  {children}
                  <Footer />
                </AppWrapper>
              </MDXProvider>
            </>
          </ThemeProvider>
        </>
      )}
    </StaticQuery>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
