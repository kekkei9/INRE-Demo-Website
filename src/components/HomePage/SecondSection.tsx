import { BeginSection } from "@components/BeginSection";
import { CustomTabList } from "@components/CustomTabList";
import { PersonCardList } from "@components/PersonCardList";
import { Person } from "@src/types/person";
import { tabList } from "./tabList";

const personList: Person[] = [
  {
    imgSrc: "/assets/home/person/img_1.png",
    name: "Brajesh Pathak",
    description:
      "A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been part of the managing committee and execution committee of Azure Capital (100 Crore realty focused funds), he has been part of the execution committee of various special purpose vehicle of investee companies for plotted development, villa projects, and apartments including development work & construction management. He is deeply involved in the fund raising process including investors relationship. Retail sales, NRI relationship handling for real estates advisory. Recently, Lead the process of fund raising of various startups from seed round to series- B round.",
  },
  {
    imgSrc: "/assets/home/person/img_2.png",
    name: "Deepak Shukla",
    description:
      "Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience of 11 years in firms like Credit Suisse, FICO, Alvarez and Marsal and The World Bank across geographies. In the past few years, his focus is in solving real world challenges using AI. He has engaged in development of voicebots for contact centres, automated training and validation for Autonomous vehicles applications.",
  },
  {
    imgSrc: "/assets/home/person/img_3.png",
    name: "Alok Kumar Singh",
    description:
      "Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real Estate Private Equity Fund and Azven Realty, a full service Real Estate Development firm in Bangalore. Set-up and managed a SEBI registered VC fund under Azure Capital. Actively involved in mentoring and advising seed and growth stage startups  at C-Level in Visioning, Governance, Strategy Development & Implementation, Growth Planning, Goal Setting and Investment Structuring & Management.",
  },
];

const SecondSection = () => {
  return (
    <div className="px-[14.25rem] mt-9 flex flex-col items-center pb-9">
      <BeginSection label="Our Offerings" />
      <div className="my-5 font-semibold">
        <span>
          This whole purchase journey can be divided into three stages. For more
          details,{" "}
        </span>
        <a className="underline text-[#0A009B] cursor-pointer">Click Here</a>
      </div>
      <CustomTabList tabList={tabList} />
      <div className="mt-9 mb-4">
        <BeginSection label="Our Team Members" />
      </div>
      <PersonCardList personList={personList} />
    </div>
  );
};

export default SecondSection;
