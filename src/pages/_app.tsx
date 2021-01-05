import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/common/config.less';
import '../styles/common/index.less';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
