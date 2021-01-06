import React from 'react';
import Navmenu from '@/components/common/Navmenu';
import Layout, { Footer } from 'antd/lib/layout/layout';
import { Typography, Button } from 'antd';
import Content from '@/components/common/Content';
import router from 'next/router';

const { Paragraph, Title } = Typography;

let pageLoadTime = 0;

const SSR: React.FC = () => {
  if (typeof window !== `undefined`) {
    const perfData = window.performance.timing;
    pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  }
  return (
    <Layout>
      <Navmenu page={3} />
      <Layout>
        <div className="container">
          <div id="title-header">
            <Title level={1}>Server Side Rendering</Title>
            <Title level={2}>
              Everyting on this page server side renderderd
            </Title>
          </div>
          <Content environment="client" />
          <div className="timer">
            <Title level={2}>It took {pageLoadTime} to load this page</Title>
            <Button onClick={router.reload}>Start measuring</Button>
          </div>
        </div>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default SSR;
