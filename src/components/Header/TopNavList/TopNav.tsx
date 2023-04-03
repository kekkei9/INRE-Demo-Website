import { Nav } from "@src/types/nav";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

interface ITopNavListProps {
  navElem: Nav;
}

const TopNav = ({ navElem }: ITopNavListProps) => {
  const router = useRouter();

  return (
    <Link href={navElem.path} className="cursor-pointer">
      <div className="font-bold px-5">{navElem.label}</div>
      <div
        className={`h-1 w-full rounded-sm mt-[1.125rem]  ${
          (router.asPath === "/" && navElem.path === "/home") ||
          router.asPath.includes(navElem.path)
            ? "bg-[#01244A]"
            : "bg-white"
        }`}
      />
    </Link>
  );
};

export default TopNav;
