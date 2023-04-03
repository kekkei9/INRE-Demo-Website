import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav } from "@src/types/nav";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

interface ICustomDropdownNavProps {
  navList: Nav[];
  label: string;
}

const CustomDropdownNav = ({ navList, label }: ICustomDropdownNavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-5 md:gap-6">
      <div
        className="flex justify-between items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="text-xl md:text-[1.875rem]">{label}</div>
        <FontAwesomeIcon
          icon={faCaretDown}
          className={`md:hidden transition-all ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {isOpen && (
        <>
          {navList.map((nav) => (
            <Link href={nav.path} key={nav.key} className="opacity-60">
              {nav.label}
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default CustomDropdownNav;
