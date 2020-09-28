import React, { ReactHTMLElement } from 'react';
import Head from 'next/head';
import Navigation from '../components/common/Navigation';
import Header from '../components/common/Header';

const indexPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Header />
    </>
  );
};

export default indexPage;
