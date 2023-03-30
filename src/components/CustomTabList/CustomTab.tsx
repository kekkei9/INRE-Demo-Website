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
      className={`relative cursor-pointer flex py-5 items-center justify-center gap-3 flex-1 font-semibold ${
        isSelected ? "bg-[#ECECEC]" : "bg-[#F8F8F8]"
      }`}
      onClick={() => setCurrentTab(tab.key)}
    >
      <div
        className={`w-12 h-12 rounded-full hidden xl:flex items-center justify-center ${
          isSelected ? "bg-[#D9D9D9]" : "bg-white"
        }`}
      >
        {tab.key}
      </div>
      <div className="max-w-[11.875rem] text-center">{tab.label}</div>
      {isSelected && (
        <div className="absolute w-full bg-black h-[0.3125rem] bottom-0"></div>
      )}
    </div>
  );
};

export default CustomTab;
