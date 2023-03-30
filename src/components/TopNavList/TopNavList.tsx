import { NavData } from "@context/NavData";
import { Nav } from "@src/types/nav";
import { Dispatch, SetStateAction, useContext } from "react";
import TopNav from "./TopNav";

interface ITopNavListProps {
  navList: Nav[];
}

const TopNavList = ({ navList }: ITopNavListProps) => {
  const { nav, setNav } = useContext(NavData);

  return (
    <div className="hidden md:block">
      <div className="w-fit flex">
        {navList.map((navElem) => (
          <TopNav
            navElem={navElem}
            nav={nav}
            setNav={setNav}
            key={navElem.key}
          />
        ))}
      </div>
    </div>
  );
};

export default TopNavList;
