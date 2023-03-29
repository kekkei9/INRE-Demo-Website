import Image from "next/image";

const FirstSection = () => {
  return (
    <div className="px-[14.25rem] pt-[4.375rem]">
      <div
        className="h-[22.05rem] flex justify-around items-center"
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        <div className="ml-9">
          <div>
            <Image
              src={"/assets/logo.svg"}
              alt="logo"
              width={96}
              height={90}
              className="filter invert sepia-0 saturate-0 hue-rotate(199deg) brightness-[1.04] contrast-[1.07]"
            />
          </div>
          <div className="w-[20rem] mt-[2.375rem] text-4xl text-white capitalize">
            <span>making your </span>
            <span className="text-[#FAFF00] font-bold">real estate </span>
            <span>purchase journey faster and transparent</span>
          </div>
        </div>
        <div className="w-full h-full relative max-w-[50rem]">
          <Image
            src={"/assets/home/img_1.png"}
            alt="home_1"
            fill={true}
            className="object-contain"
          />
        </div>
      </div>
      <div className="bg-[#F1F1F1] h-[20.5rem] mt-9 py-[1.125rem] px-[1.6875rem] flex items-center">
        <div className="w-1/2 h-full relative ">
          <Image
            src={"/assets/home/img_2.png"}
            alt="home_1"
            fill={true}
            className="object-contain"
          />
        </div>
        <div className="max-w-[50%] ml-[2.125rem]">
          <div className="text-3xl font-bold">Who We Are</div>
          <div className="mt-5">
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
