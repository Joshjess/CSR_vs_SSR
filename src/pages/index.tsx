import React from 'react';
import Navmenu from '@/components/common/Navmenu';
import Layout, { Footer } from 'antd/lib/layout/layout';
import CSR from '../assets/image/CSR.png';
import SSR from '../assets/image/SSR.png';
import SSG from '../assets/image/SSG.png';
import { Col, Row, Typography } from 'antd';

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
        <img src={CSR}></img>
        <Row justify="center">
          <Col xs={10} md={8} lg={6}>
            <Title level={5}>Pros</Title>
            <ul>
              <li>Easy in development</li>
              <li>Low server load</li>
            </ul>
          </Col>
          <Col xs={10} md={8} lg={6}>
            <Title level={5}>Cons</Title>
            <ul>
              <li>Bad SEO performance out of the box</li>
              <li>Longer initial rendering time</li>
            </ul>
          </Col>
        </Row>
        <Title level={3}>Server Side Rendering</Title>
        <Paragraph className="paragraph">
          Server side rendering works different the rendering process does not
          happen on the client side but on the server side. The JavaScript codes
          gets executed on server and HTML page get’s renderd on the server and
          send to the client.
        </Paragraph>
        <img src={SSR}></img>
        <Row justify="center">
          <Col xs={10} md={8} lg={6}>
            <Title level={5}>Pros</Title>
            <ul>
              <li>More SEO friendly</li>
              <li>No client side fetching</li>
            </ul>
          </Col>
          <Col xs={10} md={8} lg={6}>
            <Title level={5}>Cons</Title>
            <ul>
              <li>More difficult in development</li>
              <li>Longer time to first byte</li>
            </ul>
          </Col>
        </Row>
        <Title level={3}>Static Site Generation</Title>
        <Paragraph className="paragraph">
          The last method that will be explained is Static Site Generation.
          Using this method, a static page gets generated at build time. This
          especially nice for website that do not have a lot of changing
          content.
        </Paragraph>
        <img src={SSG}></img>
        <Row justify="center">
          <Col xs={10} md={8} lg={6}>
            <Title level={5}>Pros</Title>
            <ul>
              <li>SEO friendly</li>
              <li>Very fast</li>
            </ul>
          </Col>
          <Col xs={10} md={8} lg={6}>
            <Title level={5}>Cons</Title>
            <ul>
              <li>No dynamic data</li>
              <li>Needs to be rebuild when data changes</li>
            </ul>
          </Col>
        </Row>
      </div>
    </Layout>
    <Footer />
  </Layout>
);

export default Home;
