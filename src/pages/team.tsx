import { TeamSection } from "@components/DisplaySections/TeamSection";
import { personList } from "./home";
import Image from "next/image";

const TeamPage = () => {
  return (
    <div>
      <div className="bg-[#E6EAEE] div-section">
        <TeamSection isInTab />
      </div>
      <div className="px-[0.9375rem] py-5 md:px-[14.25rem] md:py-[2.1875rem] flex flex-col gap-5 md:gap-[2.1875rem]">
        {personList.map((person, index) => (
          <div
            key={index}
            className="bg-[#F2F4F6] p-5 md:px-[3.1875rem] md:py-[2.3125rem]"
          >
            <div className="flex items-center">
              <div>
                <Image
                  src={person.imgSrc}
                  alt="person img"
                  width={85}
                  height={85}
                />
              </div>
              <div className="ml-[0.9375rem] md:ml-[2.625rem]">
                <div className="text-2xl md:text-[1.75rem] font-semibold">
                  {person.name}
                </div>
                <div className="text-base md:text-2xl mt-[0.3125rem] opacity-40">
                  {person.role}
                </div>
              </div>
            </div>
            <div className="text-lg md:text-xl mt-3 md:mt-5 opacity-60">
              {person.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
