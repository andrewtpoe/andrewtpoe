import React from 'react';

import H1 from '../components/h1';
import Hr from '../components/hr';

import SiteNav from './site-nav';

function Header() {
  return (
    <>
      <H1>Andrew T. Poe</H1>
      <Hr />
      <SiteNav />
    </>
  );
}

export default Header;
