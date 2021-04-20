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
          <Title level={1}>CSR vs SSR vs SSG</Title>
        </div>
        <Paragraph className="paragraph">
          Welcom to my website! I made this website to educate people on the
          topic of different React rendering methods. Although that this website
          used the React framework the principles also carryover to other
          frameworks like Angular and Vue. On this website you can find three
          pages the content is the same, but they are rendered differently.The
          rendering methods i will talk about on this website are Client Side
          Rendering(SSG), Server Side Rendering(SSR) and Static Site
          Generation(SSG). This website is made up of different pages one for
          each rendering method the page is also renderd using the coresponing
          method.If you read further on this page you can read more about the
          different rendering methods and there pros and cons you can also see
          an image with the google lighthouse score so you can test it yourself.
        </Paragraph>
        <Title level={3}>Client Side Rendering</Title>
        <Paragraph className="paragraph">
          When the website is using client side rendering the server sends a
          blank page with links to JavaScript code. The JavaScript code gets
          executed on the browser and renders the HTML elements.
        </Paragraph>
        <Title level={5}>Pros</Title>
        <ul>
          <li>Easy in development</li>
          <li>Low server load</li>
        </ul>
        <Title level={5}>Cons</Title>
        <ul>
          <li>Bad SEO performance out of the box</li>
          <li>Longer initial rendering time</li>
        </ul>
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
