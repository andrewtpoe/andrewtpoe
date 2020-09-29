import 'tailwindcss/dist/base.min.css';

import React from 'react';

function Layout({ children, title }) {
  return (
    <>
      <header>{title}</header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
