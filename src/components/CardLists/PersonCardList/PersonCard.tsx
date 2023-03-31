import { Person } from "@src/types/person";
import Image from "next/image";
import { useState } from "react";

const PersonCard = ({ imgSrc, name, description }: Person) => {
  const [isViewMore, setIsViewMore] = useState(false);

  return (
    <div className="div-card deep-shadow">
      <div className="relative aspect-[5/4]">
        <Image
          src={imgSrc}
          alt="person img"
          fill={true}
          className="object-contain"
        />
      </div>
      <div className="mt-5 title-text">{name}</div>
      <div className={`text-base ${isViewMore ? "" : "line-clamp-3"}`}>
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
