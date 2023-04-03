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
    <div className="px-[1.875rem] md:px-[8.25rem] py-8 bg-[#01244A] text-white">
      <div className="flex justify-between md:font-bold flex-col md:flex-row max-md:gap-5">
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
      <div className="mt-5 md:mt-24 flex justify-between flex-col-reverse md:flex-row gap-[2.4375rem] text-xl md:text-lg">
        <div className="max-md:text-[#CCD3DC] max-md:text-base">
          <span>Copyright 2023. Designed by </span>
          <span className="md:font-bold">INRE Global</span>
        </div>
        <SocialSectionList socialList={socialList} />
      </div>
    </div>
  );
};

export default Footer;
