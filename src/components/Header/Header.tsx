import Image from "next/image";
import { Button, Menu } from "antd";
import { Dispatch, SetStateAction } from "react";
import { Nav } from "@pages/headerList";

interface IHeaderComponentProps {
  navList: Nav[];
  nav: string;
  setNav: Dispatch<SetStateAction<string>>;
}

const Header = ({ navList, nav, setNav }: IHeaderComponentProps) => {
  return (
    <div className="flex justify-between items-center h-full">
      <div>
        <Image src={"assets/logo.svg"} alt="logo" width={68} height={42} />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[nav]}
        items={navList}
        overflowedIndicator={false}
        className="self-end w-[34.85rem] text-lg font-bold"
        style={{ backgroundColor: "white", color: "#01244A" }}
        onSelect={(nav) => setNav(nav.key)}
      />
      <Button
        type="primary"
        className="font-semibold text-lg py-3 px-[1.725rem] h-fit"
      >
        Register Now
      </Button>
    </div>
  );
};

export default Header;
