import OfferingSection from "@components/DisplaySections/OfferingSection/OfferingSection";
import ContactSection from "@components/DisplaySections/ContactSection/ContactSection";
import FirstSection from "@components/HomePage/FirstSection";
import { BeginSection } from "@components/DisplaySections/BeginSection";
import { PersonCardList } from "@components/CardLists/PersonCardList";
import ThirdSection from "@components/HomePage/ThirdSection";
import { personList } from "./home";

export default function Home() {
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
}
