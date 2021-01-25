import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import Image from 'next/image';
import fetchedText from 'api/common/index';

const { Paragraph } = Typography;

const imageUrl = `https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;

type contentProps = {
  environment: string;
};
/*
Page.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const json = await res.json();
  return { stars: json.stargazers_count };
};
*/

function Content({ environment }: contentProps) {
  const [text, setText] = useState(``);
  useEffect(() => {
    (async function handle() {
      setText(await fetchedText());
    })();
  });
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
      <Paragraph>{text}</Paragraph>
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
