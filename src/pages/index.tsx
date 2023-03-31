import { Footer } from "@components/Footer";
import { HeaderComponent } from "@components/Header";
import Image from "next/image";
import { useState } from "react";
import { NavData } from "@context/NavData";
import { Nav } from "@src/types/nav";
import { HomePage } from "@components/HomePage";
import OfferingSection from "@components/DisplaySections/OfferingSection/OfferingSection";
import ContactSection from "@components/DisplaySections/ContactSection/ContactSection";
import { TeamTab } from "@components/DisplaySections/TeamSection";
import { BlogSection } from "@components/DisplaySections/BlogSection";

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
  contact: <ContactSection isInTab />,
  blogs: <BlogSection />,
};

export default function Home() {
  const [nav, setNav] = useState(headerList[0].key);

  return (
    <NavData.Provider value={{ nav, setNav }}>
      <div className="w-full h-[3.625rem] md:h-28 bg-white py-[0.625rem] px-4 md:px-20 absolute top-0 z-10 shadow">
        <HeaderComponent navList={headerList} />
      </div>
      <div className="mt-[3.625rem] md:mt-28">
        {contentList[nav as keyof typeof contentList]}
      </div>
      <Footer />
    </NavData.Provider>
  );
}
