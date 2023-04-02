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
        className="text-xl md:text-[1.875rem]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {label}
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
