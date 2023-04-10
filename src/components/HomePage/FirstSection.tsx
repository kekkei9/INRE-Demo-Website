import { TeamSection } from "@components/DisplaySections/TeamSection";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const FirstSection = () => {
  return (
    <div className="div-section pt-0 max-sm:px-0 sm:pt-[4.375rem] pb-0">
      <div className="flex justify-between items-center bg-primary sm:mb-[2.1875rem]">
        <div className="ml-4 sm:ml-[3.375rem] flex-[3_3_0%] sm:flex-1">
          <div className="sm:text-lg xl:text-2xl 2xl:text-[2.5rem] 2xl:leading-[3.5rem] text-white capitalize font-['Solway']">
            <span>making your </span>
            <span className="text-green sm:text-[#FAFF00] font-bold sm:text-xl xl:text-3xl 2xl:text-5xl">
              real estate{" "}
            </span>
            <span>purchase journey faster and transparent</span>
          </div>
        </div>
        <div className="hidden sm:block relative aspect-[2/1] h-full flex-[2_2_0%]">
          <Image
            src={"/assets/home/img_1.png"}
            alt="home_1"
            fill
            className="object-fill"
          />
        </div>
        <div className="block sm:hidden relative aspect-[3/2] h-full flex-[7_7_0%]">
          <Image
            src={"/assets/home/img_1_mobile.png"}
            alt="home_1"
            fill
            className="object-fill"
          />
        </div>
      </div>
      <div className="max-sm:div-section !pb-0">
        <TeamSection />
      </div>
    </div>
  );
};

export default FirstSection;
