import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { TopNavList } from "@components/TopNavList";
import { Nav } from "@src/types/nav";

interface IHeaderComponentProps {
  navList: Nav[];
  nav: string;
  setNav: Dispatch<SetStateAction<string>>;
}

const Header = ({ navList, nav, setNav }: IHeaderComponentProps) => {
  return (
    <div className="flex justify-between items-center h-full">
      <div>
        <Image src={"/assets/logo.svg"} alt="logo" width={68} height={42} />
      </div>
      <div className="self-end">
        <TopNavList navList={navList} nav={nav} setNav={setNav} />
      </div>
      <button className="primary">Register Now</button>
    </div>
  );
};

export default Header;
