import React from 'react';

import { MDXProvider as BaseMDXProvider } from '@mdx-js/react';

import A from './a';
import H1 from './h1';
import H2 from './h2';
import H3 from './h3';
import P from './p';

function MDXProvider({ children, components, ...rest }) {
  return (
    <BaseMDXProvider
      components={{
        a: A,
        h1: H1,
        h2: H2,
        h3: H3,
        p: P,
        ...components,
      }}
      {...rest}
    >
      {children}
    </BaseMDXProvider>
  );
}

export default MDXProvider;
