import { Tab } from "@src/types/tab";
import { useState } from "react";
import CustomTab from "./CustomTab";

interface ICustomTabListProps {
  tabList: Tab[];
  initialTab?: string;
}

const CustomTabList = ({ tabList, initialTab }: ICustomTabListProps) => {
  const [currentTab, setCurrentTab] = useState(
    initialTab || (tabList.length ? tabList[0].key : "0")
  );

  return (
    <div className="w-full">
      <div className="flex justify-between gap-7 mb-[2.125rem]">
        {tabList.map((tab) => (
          <CustomTab
            tab={tab}
            key={tab.key}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        ))}
      </div>
      {tabList.find((tab) => tab.key === currentTab)?.children}
    </div>
  );
};

export default CustomTabList;
