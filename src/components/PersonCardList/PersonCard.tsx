import { Person } from "@src/types/person";
import Image from "next/image";
import { useState } from "react";

const PersonCard = ({ imgSrc, name, description }: Person) => {
  const [isViewMore, setIsViewMore] = useState(false);

  return (
    <div
      className="p-6 flex flex-col rounded-[0.625rem]"
      style={{ boxShadow: "0px 4px 61px rgba(0, 0, 0, 0.16)" }}
    >
      <div className="relative aspect-[5/4]">
        <Image
          src={imgSrc}
          alt="person img"
          fill={true}
          className="object-contain"
        />
      </div>
      <div className="mt-5 text-[1.625rem] font-semibold">{name}</div>
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
