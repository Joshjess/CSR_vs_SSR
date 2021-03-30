import React, { useEffect, useState } from 'react';
import Navmenu from '@/components/common/Navmenu';
import Layout, { Footer } from 'antd/lib/layout/layout';
import { Typography, Button } from 'antd';
import Content from '../components/common/Content';
import fetchedText from 'api/common/index';

const { Paragraph, Title } = Typography;

const CSR: React.FC = () => {
  if (typeof window !== 'undefined') {
    const [text, setText] = useState(``);
    useEffect(() => {
      (async function handle() {
        setText(await fetchedText());
      })();
    });
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
            <Content data={text} environment="client" />
          </div>
        </Layout>
        <Footer />
      </Layout>
    );
  }
  return <Layout></Layout>;
};

export default CSR;
