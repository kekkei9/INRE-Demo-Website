import { personList } from "@components/HomePage/HomePage";
import Image from "next/image";
import TeamSection from "./TeamSection";

const TeamTab = () => {
  return (
    <div>
      <div className="bg-[#E6EAEE] px-10 lg:px-[14.25rem] py-[2.1875rem]">
        <TeamSection isInTab />
      </div>
      <div className="px-10 lg:px-[14.25rem] py-[2.1875rem] flex flex-col gap-[2.1875rem]">
        {personList.map((person, index) => (
          <div
            key={index}
            className="bg-[#F2F4F6] px-[3.1875rem] py-[2.3125rem]"
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
              <div className="ml-[2.625rem]">
                <div className="text-[1.75rem] font-semibold">
                  {person.name}
                </div>
                <div className="text-2xl mt-[0.3125rem]">{person.role}</div>
              </div>
            </div>
            <div className="text-xl mt-5">{person.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamTab;
