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
      className={`cursor-pointer flex py-5 items-center justify-center gap-3 flex-1 ${
        isSelected ? "bg-[#ECECEC]" : "bg-[#F8F8F8]"
      }`}
      onClick={() => setCurrentTab(tab.key)}
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${
          isSelected ? "bg-[#D9D9D9]" : "bg-white"
        }`}
      >
        {tab.key}
      </div>
      <div className="max-w-[8rem]">{tab.label}</div>
    </div>
  );
};

export default CustomTab;
