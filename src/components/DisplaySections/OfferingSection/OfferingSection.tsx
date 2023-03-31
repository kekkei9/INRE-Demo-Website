import { BeginSection } from "@components/DisplaySections/BeginSection";
import { CustomTabList } from "@components/CustomTabList";
import { PersonCardList } from "@components/CardLists/PersonCardList";
import { NavData } from "@context/NavData";
import { Person } from "@src/types/person";
import { useContext } from "react";
import { tabList } from "@components/HomePage/tabList";

interface IOfferingSectionTab {
  isInTab?: boolean;
}

const OfferingSection = ({ isInTab }: IOfferingSectionTab) => {
  const { setNav } = useContext(NavData);

  return (
    <div className="px-10 lg:px-[14.25rem] py-9 flex flex-col items-center">
      <BeginSection label="Our Offerings" />
      {!isInTab && (
        <div className="mt-5 font-semibold">
          <span>
            This whole purchase journey can be divided into three stages. For
            more details,{" "}
          </span>
          <a
            className="underline text-[#0A009B] cursor-pointer"
            onClick={() => setNav("offerings")}
          >
            Click Here
          </a>
        </div>
      )}
      <div className="mt-5">
        <CustomTabList tabList={tabList} />
      </div>
    </div>
  );
};

export default OfferingSection;
