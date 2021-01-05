import React from 'react';
import Navmenu from '@/components/common/Navmenu';
import Layout, { Footer } from 'antd/lib/layout/layout';

const Contact: React.FC = () => (
  <Layout>
    <Navmenu page={1} />
    <Layout>
      <div className="container" />
    </Layout>
    <Footer />
  </Layout>
);

export default Contact;
