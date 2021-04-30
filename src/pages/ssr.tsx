import React, { ReactElement, useState } from 'react';
import Navmenu from '@/components/common/Navmenu';
import Layout, { Footer } from 'antd/lib/layout/layout';
import { Typography, Button } from 'antd';
import Content from '@/components/common/Content';
import fetchedText from 'api/common/index';
import { GetServerSideProps } from 'next';

const { Title } = Typography;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data: string = await fetchedText();
  return {
    props: {
      data,
    },
  };
};

interface Props {
  data: string;
}

function SSR({ data }: Props): ReactElement {
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
          {console.log}
          <Content environment="client" data={data} />
        </div>
      </Layout>
      <Footer />
    </Layout>
  );
}

export default SSR;
