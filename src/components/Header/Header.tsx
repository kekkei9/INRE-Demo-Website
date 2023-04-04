import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { TopNavList } from "@components/Header/TopNavList";
import { Nav } from "@src/types/nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MobileNav } from "./MobileNav";

interface IHeaderComponentProps {
  navList: Nav[];
}

const Header = ({ navList }: IHeaderComponentProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="h-full relative">
      <div className="absolute left-1/2 -translate-x-1/2 sm:left-20 top-1/2 -translate-y-1/2">
        <div className="hidden sm:block">
          <Image src={"/assets/logo.svg"} alt="logo" width={68} height={42} />
        </div>
        <div className="block sm:hidden">
          <Image
            src={"/assets/logo_mobile.svg"}
            alt="logo_mobile"
            width={60}
            height={30}
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <TopNavList navList={navList} />
      </div>
      <MobileNav
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
        navList={navList}
      />
      <div
        className="block sm:hidden absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => setIsOpenMenu(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <button className="btn-primary absolute right-4 sm:right-20 top-1/2 -translate-y-1/2">
        Register Now
      </button>
    </div>
  );
};

export default Header;
