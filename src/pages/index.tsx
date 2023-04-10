import OfferingSection from "@components/DisplaySections/OfferingSection/OfferingSection";
import ContactSection from "@components/DisplaySections/ContactSection/ContactSection";
import { FirstSection, ThirdSection } from "@components/HomePage";

import { BeginSection } from "@components/DisplaySections/BeginSection";
import { PersonCard } from "@components/CardLists/PersonCard";

import Head from "next/head";
import { Person } from "@src/types/person";
import useSWR from "swr";
import { CardList } from "@components/CardLists/CardList";

export default function Home() {
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
}
