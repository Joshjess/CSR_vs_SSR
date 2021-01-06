import React from 'react';
import Head from 'next/head';
import Navmenu from '@/components/common/Navmenu';
import Layout, { Footer } from 'antd/lib/layout/layout';
import Image from 'next/image';
import { Typography, Row, Col } from 'antd';

const imageUrl = `https://images.pexels.com/photos/754949/pexels-photo-754949.jpeg?cs=srgb&dl=pexels-simon-matzinger-754949.jpg&fm=jpg`;

const { Title, Paragraph } = Typography;

const Home: React.FC = () => (
  <Layout>
    <Navmenu page={1} />
    <Layout>
      <div className="container">
        <div id="title-header">
          <Title level={1}>
            Client Side Rendering <br /> vs <br /> Server Side Rendering
          </Title>
        </div>
        <Paragraph>
          Duis nunc nisi, rhoncus eu libero viverra, tempus consequat massa.
          Fusce pellentesque purus at fringilla consectetur. Proin in dolor
          vitae justo vulputate suscipit nec non arcu. Donec dapibus dui non
          augue aliquet ultricies. Nullam a sollicitudin lacus. Aliquam a in
          metus convallis pulvinar ac eget odio. Donec est ex, porta eget eget
          tincidunt in, laoreet nec diam.
        </Paragraph>
        <Paragraph>
          Suspendisse tellus sem, sollicitudin pulvinar odio eget, blandit
          pharetra magna. Suspendisse lobortis mattis nisl, at sagittis dui
          commodo et. Proin et erat eu dui semper auctor ut at dui. Maecenas
          nisl neque, fermentum tincidunt fringilla quis, consequat sed nisl.
          Morbi non justo purus. Etiam in tempor sapien. Nunc ornare nisi
          libero, non maximus lorem vestibulum et. Mauris ullamcorper, nulla et
          vehicula ullamcorper, nibh enim molestie massa, non rhoncus leo massa
          sit amet lorem. Cras eleifend scelerisque porta. Fusce rutrum, risus
          eget lobortis tempor, enim eros scelerisque quam, eget elementum purus
          erat et nisl. Proin sit amet dolor at est sodales elementum ut quis
          ex. Fusce sed condimentum dolor, nec aliquet ante. Curabitur
          ullamcorper arcu sed nisl sollicitudin vestibulum. Aenean sodales
          consectetur ante, vitae posuere enim imperdiet eget.
        </Paragraph>
        <Row justify="space-around">
          <Col span={8}>
            <Image src={imageUrl} alt="nature" width={500} height={500} />
          </Col>
          <Col span={8}>
            <img src={imageUrl} alt="nature" width={500} height={500} />
          </Col>
        </Row>
      </div>
    </Layout>
    <Footer />
  </Layout>
);

export default Home;
