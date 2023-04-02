import { NavData } from "@context/NavData";
import { Nav } from "@src/types/nav";
import { Dispatch, SetStateAction, useContext } from "react";
import TopNav from "./TopNav";

interface ITopNavListProps {
  navList: Nav[];
}

const TopNavList = ({ navList }: ITopNavListProps) => {
  return (
    <div>
      <div className="hidden md:block">
        <div className="w-fit flex">
          {navList.map((navElem) => (
            <TopNav navElem={navElem} key={navElem.key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNavList;
