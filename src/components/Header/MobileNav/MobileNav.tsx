import { Nav } from "@src/types/nav";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

interface IMobileNavProps {
  isOpenMenu: boolean;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
  navList: Nav[];
}

const MobileNav = ({ isOpenMenu, setIsOpenMenu, navList }: IMobileNavProps) => {
  const router = useRouter();

  return (
    <div>
      <div
        className={`flex flex-col fixed left-0 top-0 z-20 h-screen bg-white w-[19.6875rem] trans ease-in-out duration-300 text-primary text-lg ${
          isOpenMenu ? "!translate-x-0" : "translate-x-[-19.6875rem]"
        }`}
      >
        <div className="py-[0.625rem] px-[1.5625rem] bg-primary">
          <div className="block sm:hidden">
            <Image
              src={"/assets/logo_horizontal.svg"}
              alt="logo_mobile"
              width={130}
              height={34}
            />
          </div>
        </div>
        <div className="py-[0.9375rem] px-[1.5625rem] bg-[#CCD3DC]">
          <div className="font-semibold text-xl">Jones Ferdinand</div>
          <div className="text-sm">Freelancer</div>
        </div>
        {navList.map((nav) => (
          <Link
            key={nav.key}
            href={nav.path}
            onClick={() => setIsOpenMenu(false)}
            className={`py-[0.9375rem] px-[1.5625rem] ${
              ((router.asPath === "/" && nav.path === "/home") ||
                router.asPath.includes(nav.path)) &&
              "font-semibold"
            }`}
          >
            {nav.label}
          </Link>
        ))}
        <div className="absolute bottom-14 left-[1.5625rem]">Log out</div>
      </div>
      {isOpenMenu && (
        <div
          className="fixed left-0 top-0 z-10 opacity-60 bg-black w-screen h-screen"
          onClick={() => setIsOpenMenu(false)}
        />
      )}
    </div>
  );
};

export default MobileNav;
