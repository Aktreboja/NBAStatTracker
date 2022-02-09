import React from 'react';
import Head from 'next/head'
import styles from './Layout.module.css'

export default function PageLayout({ children, title }) {
  return <div className= {styles.Container}>
      <Head>
          <title>
              { title }
          </title>
      </Head>
      {children}
  </div>;
}
