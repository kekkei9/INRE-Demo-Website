import { Tab } from "@src/types/tab";
import { Dispatch, SetStateAction } from "react";

interface ICustomTabProps {
  tab: Tab;
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
}

const CustomTab = ({ tab, currentTab, setCurrentTab }: ICustomTabProps) => {
  const isSelected = tab.key === currentTab;

  return (
    <div
      className={`relative text-[0.875rem] xl:text-2xl cursor-pointer center-flex md:flex-1 p-2 md:p-5 gap-[0.625rem] md:gap-5 font-semibold h-16 md:h-[6.25rem] min-w-[4rem] ${
        isSelected ? "bg-[#ECECEC] flex-1" : "bg-[#F8F8F8]"
      }`}
      onClick={() => setCurrentTab(tab.key)}
    >
      <div className="w-12 h-12 rounded-full center-flex bg-white hidden md:flex">
        {tab.key}
      </div>
      <div className="center-flex md:hidden">{`${tab.key}${
        isSelected ? "." : ""
      }`}</div>
      <div
        className={`max-w-[70%] text-center md:block md:font-normal xl:max-w-[12rem] ${
          isSelected ? "block" : "hidden"
        }`}
      >
        {tab.label}
      </div>
      {isSelected && (
        <div className="absolute w-full bg-black h-[0.3125rem] bottom-0"></div>
      )}
    </div>
  );
};

export default CustomTab;
