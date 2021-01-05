import React from 'react';
import Head from 'next/head';
import Navmenu from '@/components/common/Navmenu';
import Layout, { Footer } from 'antd/lib/layout/layout';
import Image from 'next/image';
import { Typography, Row, Col } from 'antd';

const imageUrl = `https://images.pexels.com/photos/754949/pexels-photo-754949.jpeg?cs=srgb&dl=pexels-simon-matzinger-754949.jpg&fm=jpg`;

const { Title } = Typography;

const Home: React.FC = () => (
  <Layout>
    <Head>
      <meta httpEquiv="cache-control" content="no-cache" />
      <meta httpEquiv="expires" content="0" />
      <meta httpEquiv="pragma" content="no-cache" />
    </Head>
    <Navmenu page={1} />
    <Layout>
      <div className="container">
        <div id="title-header">
          <Title level={2}>
            Client Side Rendering vs Server Side Rendering
          </Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            tortor eros. Quisque vulputate maximus consectetur. Quisque
            convallis ut velit eget consequat. In euismod quis mauris in porta.
            Cras ut nulla eu enim ornare cursus ut a justo. Mauris tempor nibh
            sed dapibus fringilla. Sed pellentesque nulla erat, dictum lobortis
            ante molestie ut. Nunc tristique eleifend sem non pretium. Ut
            interdum erat finibus massa pulvinar imperdiet. Curabitur a est nec
            ante dictum tristique nec vitae tortor. Suspendisse non magna
            molestie, tincidunt sem hendrerit, faucibus dolor. Fusce dignissim
            blandit sapien, eu finibus ligula dictum vel. Ut nec lorem velit.
            Praesent dapibus viverra sapien id fringilla.
          </p>
          <p>
            Duis nunc nisi, rhoncus eu libero viverra, tempus consequat massa.
            Fusce pellentesque purus at fringilla consectetur. Proin in dolor
            vitae justo vulputate suscipit nec non arcu. Donec dapibus dui non
            augue aliquet ultricies. Nullam a sollicitudin lacus. Aliquam a
            tellus in metus convallis pulvinar ac eget odio. Donec est ex, porta
            eget tincidunt in, laoreet nec diam.
          </p>
          <p>
            Suspendisse tellus sem, sollicitudin pulvinar odio eget, blandit
            pharetra magna. Suspendisse lobortis mattis nisl, at sagittis dui
            commodo et. Proin et erat eu dui semper auctor ut at dui. Maecenas
            nisl neque, fermentum tincidunt fringilla quis, consequat sed nisl.
            Morbi non justo purus. Etiam in tempor sapien. Nunc ornare nisi
            libero, non maximus lorem vestibulum et. Mauris ullamcorper, nulla
            et vehicula ullamcorper, nibh enim molestie massa, non rhoncus leo
            massa sit amet lorem. Cras eleifend scelerisque porta. Fusce rutrum,
            risus eget lobortis tempor, enim eros scelerisque quam, eget
            elementum purus erat et nisl. Proin sit amet dolor at est sodales
            elementum ut quis ex. Fusce sed condimentum dolor, nec aliquet ante.
            Curabitur ullamcorper arcu sed nisl sollicitudin vestibulum. Aenean
            sodales consectetur ante, vitae posuere enim imperdiet eget.
          </p>
          <Row justify="space-around">
            <Col span={8}>
              <Image src={imageUrl} alt="nature" width={500} height={500} />
            </Col>
            <Col span={8}>
              <img src={imageUrl} alt="nature" width={500} height={500} />
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
    <Footer />
  </Layout>
);

export default Home;
