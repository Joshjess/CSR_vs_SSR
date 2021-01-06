import React from 'react';
import Navmenu from '@/components/common/Navmenu';
import Layout, { Footer } from 'antd/lib/layout/layout';
import { Typography, Button } from 'antd';
import dynamic from 'next/dynamic';
import router from 'next/router';

const Content = dynamic(() => import(`../components/common/Content`));

const { Paragraph, Title } = Typography;

let pageLoadTime = 0;

const CSR: React.FC = () => {
  if (typeof window !== `undefined`) {
    const perfData = window.performance.timing;
    pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  }
  return (
    <Layout>
      <Navmenu page={2} />
      <Layout>
        <div className="container">
          <div id="title-header">
            <Title level={1}>Client Side Rendering</Title>
            <Title level={2}>
              Everyting below this title is renderderd client side
            </Title>
          </div>
          <Content environment="client" />
          <div className="timer">
            <Title level={2}>It took {pageLoadTime} to load this page</Title>
            <Button type="primary" onClick={router.reload}>
              Start measuring
            </Button>
          </div>
        </div>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default CSR;
