import { HeaderContainer } from "@containers/Header";
import { Layout } from "antd";
import Image from "next/image";
import { useState } from "react";
import { contentList, headerList } from "./headerList";

const { Header, Content, Footer } = Layout;

export default function Home() {
  const [nav, setNav] = useState("home");

  return (
    <>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
          className="w-full h-28 bg-white px-20"
        >
          <HeaderContainer navList={headerList} nav={nav} setNav={setNav} />
        </Header>
        <Content className="site-layout">
          {contentList[nav as keyof typeof contentList]}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}
