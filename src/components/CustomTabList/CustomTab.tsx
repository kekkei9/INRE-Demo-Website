import { Dispatch, SetStateAction } from "react";

export type Tab = {
  key: string;
  label: string;
  children: React.ReactNode;
};

interface ICustomTabProps {
  tab: Tab;
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
}

const CustomTab = ({ tab, currentTab, setCurrentTab }: ICustomTabProps) => {
  const isSelected = tab.key === currentTab;

  return (
    <div
      className={`cursor-pointer bg-[#F8F8F8] flex py-5 items-center justify-center gap-3 w-[30%] ${
        isSelected && "bg-[#ECECEC]"
      }`}
      onClick={() => setCurrentTab(tab.key)}
    >
      <div
        className={`w-12 h-12 rounded-full bg-white flex items-center justify-center ${
          isSelected && "bg-[#D9D9D9]"
        }`}
      >
        {tab.key}
      </div>
      <div className="max-w-[8rem]">{tab.label}</div>
    </div>
  );
};

export default CustomTab;
