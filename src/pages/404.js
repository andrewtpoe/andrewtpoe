import React from 'react';

import Layout from '../components/layout';
import H1 from '../components/h1';
import P from '../components/p';

function NotFoundPage() {
  return (
    <Layout>
      <H1>PAGE NOT FOUND</H1>
      <P>You just hit a route that doesn&#39;t exist.</P>
    </Layout>
  );
}

export default NotFoundPage;
