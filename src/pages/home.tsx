import BlogCard from "@components/CardLists/BlogCard/BlogCard";
import { CardList } from "@components/CardLists/CardList";
import { PersonCard } from "@components/CardLists/PersonCard";
import { BeginSection } from "@components/DisplaySections/BeginSection";
import { ContactSection } from "@components/DisplaySections/ContactSection";
import { OfferingSection } from "@components/DisplaySections/OfferingSection";
import { FirstSection, ThirdSection } from "@components/HomePage";
import { Person } from "@src/types/person";
import Head from "next/head";
import useSWR from "swr";

const HomePage = () => {
  const { data: teamMembers } = useSWR<Person[]>({
    url: "/teamMembers",
    args: {},
  });

  return (
    <>
      <Head>
        <title>INRE Global landing page</title>
      </Head>
      <div>
        <FirstSection />
        <OfferingSection />
        <BeginSection label="Our Team Members" />
        <div className="div-section">
          <CardList dataList={teamMembers}>
            <PersonCard />
          </CardList>
        </div>
        <ThirdSection />
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
