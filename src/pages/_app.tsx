import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/common/config.less';
import '../styles/common/index.less';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}>
      <Head>
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
      </Head>
    </Component>
  );
}

export default MyApp;
