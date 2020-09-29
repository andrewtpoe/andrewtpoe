import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

function A({ href, to, ...rest }) {
  if (href) {
    return <a href={href} rel="noopener" target="_blank" {...rest} />;
  }

  return <GatsbyLink to={to} {...rest} />;
}

export default styled(A)``;
