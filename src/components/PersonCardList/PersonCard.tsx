import { Person } from "@src/types/person";
import Image from "next/image";

const PersonCard = ({ imgSrc, name, description }: Person) => {
  return (
    <div className="p-6 flex flex-col">
      <div>
        <Image
          src={imgSrc}
          alt="person img"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <div>{name}</div>
      <div>{description}</div>
      <button className="self-end">View More</button>
    </div>
  );
};

export default PersonCard;
