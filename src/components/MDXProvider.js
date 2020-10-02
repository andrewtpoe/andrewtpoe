import React from 'react';

import { MDXProvider as BaseMDXProvider } from '@mdx-js/react';

import A from './a';
import H1 from './h1';
import H2 from './h2';
import H3 from './h3';
import H4 from './h4';
import HR from './hr';
import Img from './img';
import Li from './li';
import P from './p';
import Ul from './ul';

function MDXProvider({ children, components, ...rest }) {
  return (
    <BaseMDXProvider
      components={{
        a: A,
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        hr: HR,
        img: Img,
        li: Li,
        p: P,
        ul: Ul,
        ...components,
      }}
      {...rest}
    >
      {children}
    </BaseMDXProvider>
  );
}

export default MDXProvider;
