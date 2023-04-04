import { BeginSection } from "@components/DisplaySections/BeginSection";
import { CustomTabList } from "@components/CustomTabList";
import { PersonCardList } from "@components/CardLists/PersonCardList";
import { NavData } from "@context/NavData";
import { Person } from "@src/types/person";
import { useContext } from "react";
import { tabList } from "./tabList";

interface IOfferingSectionTab {
  isInTab?: boolean;
}

const OfferingSection = ({ isInTab }: IOfferingSectionTab) => {
  const { setNav } = useContext(NavData);

  return (
    <div
      className={`div-section flex flex-col items-center ${
        isInTab && "py-[1.875rem] sm:py-[4.375rem]"
      }`}
    >
      <BeginSection label="Our Offerings" />
      {!isInTab && (
        <div className="mt-[0.625rem] sm:mt-[2.1875rem] font-semibold text-center">
          <span>
            This whole purchase journey can be divided into three stages. For
            more details,{" "}
          </span>
          <a
            className="text-text-link-primary cursor-pointer font-bold"
            onClick={() => setNav("offerings")}
          >
            Click Here
          </a>
        </div>
      )}
      <div className="mt-[0.625rem] sm:mt-[2.9375rem]">
        <CustomTabList tabList={tabList} />
      </div>
    </div>
  );
};

export default OfferingSection;
