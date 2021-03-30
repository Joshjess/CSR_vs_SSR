import React, { ReactElement, useState } from 'react';
import Navmenu from '@/components/common/Navmenu';
import Layout, { Footer } from 'antd/lib/layout/layout';
import { Typography, Button } from 'antd';
import Content from '@/components/common/Content';
import fetchedText from 'api/common/index';
import { GetServerSideProps } from 'next';

const { Paragraph, Title } = Typography;

export async function getStaticProps(context) {
  const data: string = await fetchedText();
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
interface Props {
  data: string;
}

function SSR({ data }: Props): ReactElement {
  return (
    <Layout>
      <Navmenu page={4} />
      <Layout>
        <div className="container">
          <div id="title-header">
            <Title level={1}>Static Site Generation</Title>
            <Title level={2}>
              Everyting on this page is generated staticly at build time
            </Title>
          </div>
          <Content environment="client" data={data} />
        </div>
      </Layout>
      <Footer />
    </Layout>
  );
}

export default SSR;
