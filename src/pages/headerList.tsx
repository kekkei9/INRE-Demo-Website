import { HomePage } from "@components/HomePage";

export type Nav = {
  key: string;
  label: string;
};

export const headerList: Nav[] = [
  { key: "home", label: "Home" },
  { key: "offerings", label: "Our Offerings" },
  { key: "team", label: "Our Team" },
  { key: "contact", label: "Contact Us" },
  { key: "blogs", label: "Blogs" },
];

export const contentList = {
  home: <HomePage />,
  offerings: <div>Our Offerings</div>,
  team: <div>Our Team</div>,
  contact: <div>Contact</div>,
  blogs: <div>Blogs</div>,
};
