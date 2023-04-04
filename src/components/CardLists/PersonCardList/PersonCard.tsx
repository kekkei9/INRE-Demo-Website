import { Person } from "@src/types/person";
import Image from "next/image";
import { useState } from "react";

const PersonCard = ({ imgSrc, name, description }: Person) => {
  const [isViewMore, setIsViewMore] = useState(false);

  return (
    <div className="div-card flex flex-col deep-shadow">
      <div className="relative aspect-[5/4]">
        <Image src={imgSrc} alt="person img" fill className="object-contain" />
      </div>
      <div className="mt-5 title-text">{name}</div>
      <div className="block sm:hidden mt-3"></div>
      <div
        className={`description-text mt-3 ${
          isViewMore ? "" : "line-clamp-4 sm:line-clamp-3"
        }`}
      >
        {description}
      </div>
      <a
        className="self-end cursor-pointer mt-6"
        onClick={() => setIsViewMore((prev) => !prev)}
      >
        {isViewMore ? "View Less" : "View More"}
      </a>
    </div>
  );
};

export default PersonCard;
