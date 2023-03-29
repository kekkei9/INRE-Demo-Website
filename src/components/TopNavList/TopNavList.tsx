import { Nav } from "@pages/headerList";
import { Dispatch, SetStateAction } from "react";
import TopNav from "./TopNav";

interface ITopNavListProps {
  navList: Nav[];
  nav: string;
  setNav: Dispatch<SetStateAction<string>>;
}

const TopNavList = ({ navList, nav, setNav }: ITopNavListProps) => {
  return (
    <div className="w-fit flex">
      {navList.map((navElem) => (
        <TopNav navElem={navElem} nav={nav} setNav={setNav} key={navElem.key} />
      ))}
    </div>
  );
};

export default TopNavList;
