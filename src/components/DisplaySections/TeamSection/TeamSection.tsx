import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const TeamSection = ({ isInTab }: { isInTab?: boolean }) => {
  return (
    <div>
      <div
        className={`py-[1.125rem] px-[1.6875rem] flex items-center flex-col 2xl:flex-row gap-[2.125rem]
      ${isInTab ? "bg-[#F2F4F6]" : "bg-[#F1F1F1]"}`}
      >
        <div className="flex-shrink-0">
          <Image
            src={"/assets/home/img_2.png"}
            alt="home_1"
            width={731}
            height={373}
          />
        </div>
        <div>
          <div className="text-[2.125rem] font-bold">Who We Are</div>
          <div className="mt-5 opacity-60">
            The Indian real estate sector is resilient despite global headwinds.
            Returns are impressive and the sector is expected to reach US$ 1
            trillion in market size by 2030 (Niti Aayog report, 2021). However,
            the whole real estate purchase journey is very tedious and takes
            more than 2 years on average. Further, as the ticket size of this
            investment is large, security and trust become quite critical.
            Problems compound when you are currently away from your purchase
            destination. If you are experiencing difficulties in the real estate
            purchase journey, we are here to make it fast and transparent.
          </div>
          <button className="mt-5 text-lg flex items-center gap-2">
            <div>Contact Now</div>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
