import { Nav } from "@src/types/nav";
import { Dispatch, SetStateAction } from "react";

interface ITopNavListProps {
  navElem: Nav;
  nav: string;
  setNav: Dispatch<SetStateAction<string>>;
}

const TopNav = ({ navElem, nav, setNav }: ITopNavListProps) => {
  const isSelected = navElem.key === nav;

  return (
    <div className="cursor-pointer" onClick={() => setNav(navElem.key)}>
      <div className="text-lg font-bold px-5">{navElem.label}</div>
      <div
        className={`h-1 w-full rounded-sm mt-[1.125rem]  ${
          isSelected ? "bg-[#01244A]" : "bg-white"
        }`}
      />
    </div>
  );
};

export default TopNav;
