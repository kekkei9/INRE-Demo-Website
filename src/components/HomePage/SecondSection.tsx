import { BeginSection } from "@components/BeginSection";
import { CustomTabList } from "@components/CustomTabList";
import { tabList } from "./tabList";

const SecondSection = () => {
  return (
    <div className="px-[14.25rem] mt-9 flex flex-col items-center">
      <BeginSection label="Our Offerings" />
      <div className="my-5 font-semibold">
        <span>
          This whole purchase journey can be divided into three stages. For more
          details,{" "}
        </span>
        <a className="underline text-[#0A009B]">Click Here</a>
      </div>
      <CustomTabList tabList={tabList} />
    </div>
  );
};

export default SecondSection;
