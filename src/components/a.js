import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import tw, { styled } from 'twin.macro';

function A({ href, to, ...rest }) {
  if (href) {
    return <a href={href} rel="noopener" target="_blank" {...rest} />;
  }

  return <GatsbyLink to={to} {...rest} />;
}

export default styled(A)`
  ${tw`underline text-blue-600 visited:text-red-600 hover:text-red-800`}
`;
