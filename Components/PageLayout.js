import React from 'react';
import Head from 'next/head'

export default function PageLayout({ children, title }) {
  return <div>
      <Head>
          <title>
              { title }
          </title>
      </Head>
      {children}
  </div>;
}
