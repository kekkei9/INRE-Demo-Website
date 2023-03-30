import { createContext, Dispatch, SetStateAction } from "react";

export type NavDataType = {
  nav: string;
  setNav: Dispatch<SetStateAction<string>>;
};

export const NavData = createContext<NavDataType>({
  nav: "",
  setNav: () => {},
});
