import { createContext, Dispatch, SetStateAction } from "react";

export type NavDataType = {
  nav: string;
  setNav: any;
};

export const NavData = createContext<NavDataType>({
  nav: "",
  setNav: () => {},
});
