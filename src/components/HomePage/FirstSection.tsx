import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { TeamSection } from "./TeamSection.tsx";

const FirstSection = () => {
  return (
    <div className="div-section">
      <div
        className="flex justify-between items-center mb-9"
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        <div className="ml-[3.375rem] flex-1">
          <div>
            <Image
              src={"/assets/logo.svg"}
              alt="logo"
              width={96}
              height={90}
              className="filter invert sepia-0 saturate-0 hue-rotate(199deg) brightness-[1.04] contrast-[1.07]"
            />
          </div>
          <div className="mt-[2.375rem] text-3xl 2xl:text-[2.5rem] text-white capitalize font-['Solway']">
            <span>making your </span>
            <span className="text-[#FAFF00] font-bold text-4xl 2xl:text-5xl">
              real estate{" "}
            </span>
            <span>purchase journey faster and transparent</span>
          </div>
        </div>
        <div className="relative aspect-[1/4] sm:aspect-[1/2] md:aspect-square 2xl:aspect-[2/1] h-full flex-[2_2_0%]">
          <Image
            src={"/assets/home/img_1.png"}
            alt="home_1"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      <TeamSection />
    </div>
  );
};

export default FirstSection;
