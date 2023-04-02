import { PersonCardList } from "@components/CardLists/PersonCardList";
import { BeginSection } from "@components/DisplaySections/BeginSection";
import { ContactSection } from "@components/DisplaySections/ContactSection";
import { OfferingSection } from "@components/DisplaySections/OfferingSection";
import FirstSection from "@components/HomePage/FirstSection";
import ThirdSection from "@components/HomePage/ThirdSection";
import { Person } from "@src/types/person";

export const personList: Person[] = [
  {
    imgSrc: "/assets/home/person/img_1.png",
    name: "Brajesh Pathak",
    role: "Co-Founder",
    description:
      "A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been part of the managing committee and execution committee of Azure Capital (100 Crore realty focused funds), he has been part of the execution committee of various special purpose vehicle of investee companies for plotted development, villa projects, and apartments including development work & construction management. He is deeply involved in the fund raising process including investors relationship. Retail sales, NRI relationship handling for real estates advisory. Recently, Lead the process of fund raising of various startups from seed round to series- B round.",
  },
  {
    imgSrc: "/assets/home/person/img_2.png",
    name: "Deepak Shukla",
    role: "Co-Founder",
    description:
      "Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience of 11 years in firms like Credit Suisse, FICO, Alvarez and Marsal and The World Bank across geographies. In the past few years, his focus is in solving real world challenges using AI. He has engaged in development of voicebots for contact centres, automated training and validation for Autonomous vehicles applications.",
  },
  {
    imgSrc: "/assets/home/person/img_3.png",
    name: "Alok Kumar Singh",
    role: "Advisor",
    description:
      "Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real Estate Private Equity Fund and Azven Realty, a full service Real Estate Development firm in Bangalore. Set-up and managed a SEBI registered VC fund under Azure Capital. Actively involved in mentoring and advising seed and growth stage startups  at C-Level in Visioning, Governance, Strategy Development & Implementation, Growth Planning, Goal Setting and Investment Structuring & Management.",
  },
];

const HomePage = () => {
  return (
    <div>
      <FirstSection />
      <OfferingSection />
      <BeginSection label="Our Team Members" />
      <div className="div-section">
        <PersonCardList personList={personList} />
      </div>
      <ThirdSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
