import { Tab } from "@src/types/tab";
import { useState } from "react";
import CustomTab from "./CustomTab";

interface ICustomTabListProps {
  tabList: Tab[];
}

const CustomTabList = ({ tabList }: ICustomTabListProps) => {
  const [currentTab, setCurrentTab] = useState(tabList[0].key);

  return (
    <div className="w-full">
      <div className="flex justify-between gap-7">
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
