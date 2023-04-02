import { TeamSection } from "@components/DisplaySections/TeamSection";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const FirstSection = () => {
  return (
    <div className="div-section pt-0 max-md:px-0 md:pt-[4.375rem] pb-0">
      <div className="flex justify-between items-center mb-9 bg-primary">
        <div className="ml-4 md:ml-[3.375rem] flex-[3_3_0%] md:flex-1">
          <div className="md:text-lg xl:text-2xl 2xl:text-[2.5rem] 2xl:leading-[3.5rem] text-white capitalize font-['Solway']">
            <span>making your </span>
            <span className="text-green md:text-[#FAFF00] font-bold md:text-xl xl:text-3xl 2xl:text-5xl">
              real estate{" "}
            </span>
            <span>purchase journey faster and transparent</span>
          </div>
        </div>
        <div className="hidden md:block relative aspect-[2/1] h-full flex-[2_2_0%]">
          <Image
            src={"/assets/home/img_1.png"}
            alt="home_1"
            fill
            className="object-fill"
          />
        </div>
        <div className="block md:hidden relative aspect-[3/2] h-full flex-[7_7_0%]">
          <Image
            src={"/assets/home/img_1_mobile.png"}
            alt="home_1"
            fill
            className="object-fill"
          />
        </div>
      </div>
      <TeamSection />
    </div>
  );
};

export default FirstSection;
