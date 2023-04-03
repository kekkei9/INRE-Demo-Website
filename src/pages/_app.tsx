import { HeaderComponent } from "@components/Header";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "@components/Footer";
import { Nav } from "@src/types/nav";

export const headerList: Nav[] = [
  { key: "home", label: "Home", path: "/home" },
  { key: "offerings", label: "Our Offerings", path: "/offerings" },
  { key: "team", label: "Our Team", path: "/team" },
  { key: "contact", label: "Contact Us", path: "/contact" },
  { key: "blogs", label: "Blogs", path: "/blogs" },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="w-full h-[3.625rem] md:h-28 bg-white fixed top-0 z-10 shadow">
        <HeaderComponent navList={headerList} />
      </div>
      <div className="mt-[3.625rem] md:mt-28">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
