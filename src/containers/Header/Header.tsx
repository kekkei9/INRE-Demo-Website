import { HeaderComponent } from "@components/Header";
import { Nav } from "@pages/headerList";
import { Dispatch, SetStateAction } from "react";

interface IHeaderContainerProps {
  navList: Nav[];
  nav: string;
  setNav: Dispatch<SetStateAction<string>>;
}

const Header = ({ navList, nav, setNav }: IHeaderContainerProps) => (
  <div className="h-full">
    <HeaderComponent navList={navList} nav={nav} setNav={setNav} />
  </div>
);

export default Header;
