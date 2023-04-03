import {
  faArrowLeft,
  faArrowRight,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { BeginSection } from "@components/DisplaySections/BeginSection";
import BlogCard from "@components/CardLists/BlogCardList/BlogCard";
import { blogList } from "@components/HomePage/ThirdSection";
import { BlogCardList } from "@components/CardLists/BlogCardList";
import Link from "next/link";

const Blog = () => {
  const router = useRouter();
  const { blogId } = router.query;

  return (
    <div>
      <div className="div-section text-base md:text-xl flex flex-col gap-5 md:gap-[2.1875rem]">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => router.back()} />
          <div className="ml-[1.125rem]">
            Guide for personal property Buying{" "}
          </div>
        </div>
        <div className="block md:hidden aspect-[4/3] relative">
          <Image
            src="/assets/home/blogs/1/img_1.png"
            alt="img blog 1"
            fill
            className="object-fill"
          />
        </div>
        <div className="hidden md:block aspect-[10/3] relative">
          <Image
            src="/assets/home/blogs/1/img_1_desktop.png"
            alt="img blog 1"
            fill
            className="object-fill"
          />
        </div>
        <div className="flex max-md:justify-between gap-[8.125rem] md:text-2xl">
          <div className="flex gap-[0.875rem]">
            <div>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>By Admin</div>
          </div>
          <div className="flex gap-[0.875rem]">
            <FontAwesomeIcon icon={faCalendar} />
            <div>09 jun 2022</div>
          </div>
        </div>
        <div className="p-[0.9375rem] bg-[#F2F4F6] relative md:px-12">
          <div className="opacity-60">
            This whole purchase journey of real estate purchase can be divided
            into three broad stages. For more details, click here
          </div>
          <div className="h-full w-[0.3125rem] left-0 top-0 absolute bg-primary rounded-[0.3125rem]"></div>
        </div>
        <div className="opacity-60 md:text-2xl">
          The first one is the pre-booking stage. In this stage, you are
          evaluating various prospective properties, deciding on the budget and
          the size of the property to invest which meet the requirements and
          deliverables which is the final outcome from the builder side. Virtual
          visits at Pre- Booking stage: This requires multiple visits in
          multiple places deferring the buying process by more than 45 days.
          Also, it is difficult for people to compare two properties just based
          on visits. Here, InRe brings the proposition of “ Virtual visits at
          Pre- Booking stage”. We help the customer to visit the site with the
          help of AI enabled UAVs. This can replace the physical visit to the
          maximum possible extent by providing the live streaming feature. It
          also makes the virtual visits experience user friendly and
          interactive. Further, we provide you recordings of the visit which can
          ease the comparison between two properties. Overall, your purchase
          process is faster and transparent. Background verification of Project/
          Developer: It is observed that people invest more than 10 years of
          savings in real estate. Hence, they are automatically conscious about
          developer brand, past track record of project delivered, the project
          progress and the financial acumen of the developer. This is especially
          significant in the case of primary transactions. Here, InRe brings the
          proposition of “ Background verification of developers”. Based on the
          experience and Industry expertise, we have identified the various
          factors that will assist in determining the trustworthiness of project
          and developer. These details are collected from the most authentic
          source of information and we are providing details of sources in the
          verification report. This makes your property buying experience more
          safer,faster and transparent. Post Booking- Pre registration: The
          second stage of property buying is post booking but pre-registration,
          this is the stage when you have in-principal decided to purchase the
          property and have paid the token advance but you are yet to get the
          title report from lawyer, pay the remaining amount, take the
          possession of the property and plan for the registration (i.e.
          transfer of ownership). During this process you also wish to regularly
          check, if construction activities are going per schedule, is there any
          third party rights created on the property you intend to purchase
          without informing you, is the construction quality up to mark before
          it sets for delivery etc. Compliance with Income tax, Capital gain
          savings on purchase of assets, implications on foreign remittances
          etc. Hassle free registration especially when you are not in the city
          where the property is situated.
        </div>
        <div className="py-[4.375rem] hidden md:block">
          <div className="border" />
          <div className="mt-[4.375rem] flex justify-between">
            <Link href={`/blogs/${blogId ? Number(blogId) - 1 : ""}`}>
              <button>Previous Post</button>
            </Link>
            <Link href={`/blogs/${blogId ? Number(blogId) + 1 : ""}`}>
              <button className="btn-primary">Next Post</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md: justify-between gap-5">
          <div className="flex flex-col gap-5">
            <div className="font-semibold text-primary text-2xl mt-[0.625rem]">
              Share this Post and Follow us on :
            </div>
            <div className="opacity-60 text-[1.125rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeius modtempor
            </div>
            <div className="flex gap-[1.125rem]">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-semibold">
              Register Now For Regular Updates :
            </div>
            <button className="text-lg flex items-center gap-2 justify-center w-fit">
              <div className="block md:hidden">Register Now</div>
              <div className="hidden md:block">Contact Now</div>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <div className="div-section flex flex-col gap-5 bg-[#CCD3DC] md:bg-[#F2F4F6]">
        <BeginSection label="You May Also Like This" />
        <div className="block md:hidden">
          <BlogCard {...blogList[0]} />
        </div>
        <div className="hidden md:block">
          <BlogCardList blogList={blogList} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
