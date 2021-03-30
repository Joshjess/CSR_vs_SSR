import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import Image from 'next/image';
import { GetServerSideProps } from 'next';

const { Paragraph } = Typography;

const imageUrl = `https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;

type contentProps = {
  environment: string;
  data: string;
};

function Content({ environment, data }: contentProps) {
  return (
    <div>
      <Paragraph>
        Duis nunc nisi, rhoncus eu libero viverra, tempus consequat massa.
        pellentesque purus at fringilla consectetur. Proin in dolor vitae justo
        vulputate suscipit nec non arcu. Donec dapibus dui non augue aliquet
        ultricies. Nullam a sollicitudin lacus. Aliquam a tellus in metus
        convallis pulvinar ac eget odio. Donec est ex, porta eget tincidunt in,
        laoreet nec diam.
      </Paragraph>
      <Paragraph data-testid="fetched-text">{data}</Paragraph>
      <Paragraph>
        Duis nunc nisi, rhoncus eu libero viverra, tempus consequat massa.
        pellentesque purus at fringilla consectetur. Proin in dolor vitae justo
        vulputate suscipit nec non arcu. Donec dapibus dui non augue aliquet
        ultricies. Nullam a sollicitudin lacus. Aliquam a tellus in metus
        convallis pulvinar ac eget odio. Donec est ex, porta eget tincidunt in,
        laoreet nec diam.
      </Paragraph>
      <div className="image-div">
        {environment === `client` ? (
          <img src={imageUrl} alt="bird" height={400} width={600} />
        ) : (
          <Image src={imageUrl} alt="bird" height={400} width={600} />
        )}
      </div>
    </div>
  );
}

export default Content;
