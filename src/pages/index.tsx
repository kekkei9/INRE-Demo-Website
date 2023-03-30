import { Footer } from "@components/Footer";
import { HeaderComponent } from "@components/Header";
import Image from "next/image";
import { useState } from "react";
import { contentList, headerList } from "./headerList";

export default function Home() {
  const [nav, setNav] = useState("home");

  return (
    <>
      <div className="w-full h-28 bg-white px-20 absolute top-0 z-10 shadow">
        <HeaderComponent navList={headerList} nav={nav} setNav={setNav} />
      </div>
      <div className="mt-28">
        {contentList[nav as keyof typeof contentList]}
      </div>
      <Footer />
    </>
  );
}
