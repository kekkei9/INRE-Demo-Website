import { Footer } from "@components/Footer";
import { HeaderComponent } from "@components/Header";
import Image from "next/image";
import { useState } from "react";
import { NavData } from "@context/NavData";
import { Nav } from "@src/types/nav";
import { HomePage } from "@components/HomePage";
import OfferingSection from "@components/HomePage/OfferingSection";
import { TeamTab } from "@components/HomePage/TeamSection.tsx";
import ContactSection from "@components/HomePage/ContactSection";
import BlogSection from "@components/HomePage/BlogSection";

export const headerList: Nav[] = [
  { key: "home", label: "Home" },
  { key: "offerings", label: "Our Offerings" },
  { key: "team", label: "Our Team" },
  { key: "contact", label: "Contact Us" },
  { key: "blogs", label: "Blogs" },
];

export const contentList = {
  home: <HomePage />,
  offerings: <OfferingSection isInTab />,
  team: <TeamTab />,
  contact: <ContactSection />,
  blogs: <BlogSection />,
};

export default function Home() {
  const [nav, setNav] = useState("home");

  return (
    <NavData.Provider value={{ nav, setNav }}>
      <div className="w-full h-28 bg-white px-20 absolute top-0 z-10 shadow">
        <HeaderComponent navList={headerList} />
      </div>
      <div className="mt-28">
        {contentList[nav as keyof typeof contentList]}
      </div>
      <Footer />
    </NavData.Provider>
  );
}
