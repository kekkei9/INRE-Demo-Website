import OfferingSection from "@components/DisplaySections/OfferingSection/OfferingSection";
import ContactSection from "@components/DisplaySections/ContactSection/ContactSection";
import { FirstSection, ThirdSection } from "@components/HomePage";

import { BeginSection } from "@components/DisplaySections/BeginSection";
import { PersonCardList } from "@components/CardLists/PersonCardList";

import Head from "next/head";
import { Person } from "@src/types/person";
import useSWR from "swr";

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
          <PersonCardList personList={teamMembers || []} />
        </div>
        <ThirdSection />
        <ContactSection />
      </div>
    </>
  );
}
