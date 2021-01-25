import React, { useState } from 'react';
import Navmenu from '@/components/common/Navmenu';
import Layout, { Footer } from 'antd/lib/layout/layout';
import { Typography, Button } from 'antd';
import dynamic from 'next/dynamic';
import router from 'next/router';

const Content = dynamic(() => import(`../components/common/Content`), {
  ssr: false,
});

const { Paragraph, Title } = Typography;

const CSR: React.FC = () => {
  const [renderTime, setRenderTime] = useState(0);
  const getLoadTime = () => {
    if (renderTime === (window as any).RenderTime) {
      router.reload();
    } else setRenderTime((window as any).RenderTime);
  };
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
            <Title level={2}>It took {renderTime} to load this page</Title>
            <Button onClick={getLoadTime}>Start measuring</Button>
          </div>
        </div>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default CSR;
