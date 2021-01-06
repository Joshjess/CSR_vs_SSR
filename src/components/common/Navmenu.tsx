import React from 'react';
import Link from 'next/link';
import { Menu, Layout } from 'antd';

const { Header } = Layout;

type MenuProps = {
  page: number;
};

export default function Navmenu({ page }: MenuProps) {
  return (
    <Header>
      <Menu
        id="navMenu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[page.toString()]}
      >
        <Menu.Item key="1">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link prefetch={false} href="/csr">
            CSR
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link prefetch={false} href="/ssr">
            SSR
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/frameworks">Frameworks</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link href="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link href="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
