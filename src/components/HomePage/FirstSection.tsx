import { TeamSection } from "@components/DisplaySections/TeamSection";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const FirstSection = () => {
  return (
    <div className="div-section pt-[4.375rem] pb-0">
      <div
        className="flex justify-between items-center mb-9"
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        <div className="ml-[3.375rem] flex-1">
          <div className="text-[2.5rem] text-white capitalize font-['Solway']">
            <span>making your </span>
            <span className="text-[#FAFF00] font-bold text-4xl 2xl:text-5xl">
              real estate{" "}
            </span>
            <span>purchase journey faster and transparent</span>
          </div>
        </div>
        <div className="relative aspect-[2/1] h-full flex-[2_2_0%]">
          <Image
            src={"/assets/home/img_1.png"}
            alt="home_1"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <TeamSection />
    </div>
  );
};

export default FirstSection;
