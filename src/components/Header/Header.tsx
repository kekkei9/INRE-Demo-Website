import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { TopNavList } from "@components/Header/TopNavList";
import { Nav } from "@src/types/nav";

interface IHeaderComponentProps {
  navList: Nav[];
}

const Header = ({ navList }: IHeaderComponentProps) => {
  return (
    <div className="h-full relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <Image src={"/assets/logo.svg"} alt="logo" width={68} height={42} />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <TopNavList navList={navList} />
      </div>
      <button className="btn-primary absolute right-0 top-1/2 -translate-y-1/2">
        Register Now
      </button>
    </div>
  );
};

export default Header;
