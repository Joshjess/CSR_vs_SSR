import React from 'react';
import { Typography } from 'antd';
import Image from 'next/image';

const { Paragraph } = Typography;

const imageUrl = `https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;

type contentProps = {
  environment: string;
};

export default function Content({ environment }: contentProps) {
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
      <Paragraph>
        Suspendisse tellus sem, sollicitudin pulvinar odio eget, blandit
        pharetra magna. Suspendisse lobortis mattis nisl, at sagittis dui
        commodo et. Proin et erat eu dui semper auctor ut at dui. Maecenas nisl
        neque, fermentum tincidunt fringilla quis, consequat sed nisl. Morbi non
        justo purus. Etiam in tempor sapien. Nunc ornare nisi libero, non
        maximus lorem vestibulum et. Mauris ullamcorper, nulla et vehicula
        ullamcorper, nibh enim molestie massa, non rhoncus leo massa sit amet
        lorem. Cras eleifend scelerisque porta. Fusce rutrum, risus eget
        lobortis tempor, enim eros scelerisque quam, eget elementum purus erat
        et nisl. Proin sit amet dolor at est sodales elementum ut quis ex. Fusce
        sed condimentum dolor, nec aliquet ante. Curabitur ullamcorper arcu sed
        nisl sollicitudin vestibulum. Aenean sodales consectetur ante, vitae
        posuere enim imperdiet eget.
      </Paragraph>
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
