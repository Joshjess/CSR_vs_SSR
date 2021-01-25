import React from 'react';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import { NextPage } from 'next';

import '../styles/common/config.less';
import '../styles/common/index.less';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  switch (metric.name) {
    case `Next.js-hydration`:
      (window as any).RenderTime = metric.value;
      console.log(`Hydration: ${metric.value}`);
      break;
    case `Next.js-route-change-to-render`:
      // handle route-change to render results
      break;
    case `Next.js-render`:
      console.log(`Render: ${metric.value}`);
      break;
    default:
      break;
  }
}

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
