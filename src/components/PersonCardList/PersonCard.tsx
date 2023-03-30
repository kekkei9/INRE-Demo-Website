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
      <div>
        <Image
          src={imgSrc}
          alt="person img"
          width={400}
          height={400}
          className="w-full h-auto max-h-[19.9375rem]"
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
