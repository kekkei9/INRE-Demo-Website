import { HomePage } from "@components/HomePage";
import BlogSection from "@components/HomePage/BlogSection";
import ContactSection from "@components/HomePage/ContactSection";
import OfferingSection from "@components/HomePage/OfferingSection";
import { TeamTab } from "@components/HomePage/TeamSection.tsx";
import { Nav } from "@src/types/nav";

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
