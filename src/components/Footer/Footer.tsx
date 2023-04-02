import { NavData } from "@context/NavData";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headerList } from "@pages/_app";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useContext } from "react";

const Footer = () => {
  return (
    <div className="px-[1.875rem] md:px-[8.25rem] py-8 bg-[#01244A] text-white">
      <div className="flex justify-between font-bold flex-col md:flex-row">
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
        <div className="flex flex-col gap-6">
          <div className="text-[1.875rem]">Company</div>
          {headerList
            .filter((nav) => ["home", "team", "contact"].includes(nav.key))
            .map((nav) => (
              <Link href={nav.path} key={nav.key}>
                {nav.label}
              </Link>
            ))}
        </div>
        <div>
          <div className="text-[1.875rem] mb-4">Useful Link</div>
          <Link href="blogs">Blogs</Link>
        </div>

        <div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <div className="ml-5">
              <div className="text-2xl font-semibold">Email: </div>
              <div className="font-medium">support@inreglobal.com</div>
            </div>
          </div>

          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <div className="ml-5">
              <div className="text-2xl font-semibold">Phone:</div>
              <div className="font-medium">+91 | 7019305889</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 flex justify-between flex-col-reverse md:flex-row gap-[2.4375rem] text-xl md:text-lg">
        <div className="max-md:text-[#CCD3DC] max-md:text-base">
          <span>Copyright 2023. Designed by </span>
          <span className="md:font-bold">INRE Global</span>
        </div>
        <div className="flex gap-[0.875rem] font-bold flex-col md:flex-row">
          <div className="flex gap-[0.875rem] items-center">
            <FontAwesomeIcon icon={faLinkedinIn} />
            <div>LinkedIn</div>
          </div>
          <div className="flex gap-[0.875rem] items-center">
            <FontAwesomeIcon icon={faFacebook} />
            <div>Facebook</div>
          </div>
          <div className="flex gap-[0.875rem] items-center">
            <FontAwesomeIcon icon={faTwitter} />
            <div>Twitter</div>
          </div>
          <div className="flex gap-[0.875rem] items-center">
            <FontAwesomeIcon icon={faInstagram} />
            <div>Instagram</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
