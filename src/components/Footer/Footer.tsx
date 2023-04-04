import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headerList } from "@pages/_app";
import Image from "next/image";
import { CustomDropdownNav } from "./CustomDropdownNav";
import { SocialData } from "./SocialSectionList/SocialSection";
import { SocialSectionList } from "./SocialSectionList";
import { ContactData } from "./ContactSectionlList/ContactSection";
import { ContactSectionList } from "./ContactSectionlList";

const socialList: SocialData[] = [
  {
    label: "LinkedIn",
    icon: faLinkedinIn,
  },
  {
    label: "Facebook",
    icon: faFacebook,
  },
  {
    label: "Twitter",
    icon: faTwitter,
  },
  {
    label: "Instagram",
    icon: faInstagram,
  },
];

const contactList: ContactData[] = [
  {
    icon: faEnvelope,
    label: "Email:",
    info: "support@inreglobal.com",
  },
  {
    icon: faPhone,
    label: "Phone:",
    info: "+91 | 7019305889",
  },
];

const Footer = () => {
  return (
    <div className="px-[1.875rem] sm:px-[8.25rem] py-8 bg-[#01244A] text-white">
      <div className="flex justify-between sm:font-bold flex-col sm:flex-row max-sm:gap-5">
        <div>
          <div>
            <Image
              src={"/assets/logo.svg"}
              alt="logo"
              width={70}
              height={65}
              className="filter invert sepia-0 saturate-0 hue-rotate(199deg) brightness-[1.04] contrast-[1.07]"
            />
          </div>
        </div>
        <CustomDropdownNav
          label="Company"
          navList={headerList.filter((nav) =>
            ["home", "team", "contact"].includes(nav.key)
          )}
        />
        <CustomDropdownNav
          label="Useful Link"
          navList={[{ path: "/blogs", label: "Blog", key: "blogs" }]}
        />

        <ContactSectionList contactList={contactList} />
      </div>
      <div className="mt-5 sm:mt-24 flex justify-between flex-col-reverse sm:flex-row gap-[2.4375rem] text-xl sm:text-lg">
        <div className="max-sm:text-[#CCD3DC] max-sm:text-base">
          <span>Copyright 2023. Designed by </span>
          <span className="sm:font-bold">INRE Global</span>
        </div>
        <SocialSectionList socialList={socialList} />
      </div>
    </div>
  );
};

export default Footer;
