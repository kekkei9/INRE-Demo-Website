import { Person } from "@src/types/person";
import PersonCard from "./PersonCard";

const PersonCardList = ({ personList }: { personList: Person[] }) => {
  return (
    <div>
      <div className="sm:hidden md:flex flex flex-row max-sm:flex-col gap-card items-center">
        {personList.map((person, index) => (
          <div className="w-[22.5rem] sm:w-[19rem]" key={index}>
            <PersonCard {...person} />
          </div>
        ))}
      </div>
      <div className="hidden sm:flex md:hidden justify-center gap-card">
        {personList.slice(0, 2).map((person, index) => (
          <div className="w-[22.5rem] sm:w-[19rem]" key={index}>
            <PersonCard {...person} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonCardList;
