import { Person } from "@src/types/person";
import PersonCard from "./PersonCard";

const PersonCardList = ({ personList }: { personList: Person[] }) => {
  return (
    <div className="gap-card flex flex-row flex-wrap h-[31rem] sm:h-[37.1875rem] overflow-hidden">
      {personList.map((person, index) => (
        <div
          className="h-[31rem] md:h-[37.1875rem] w-[22.5rem] md:w-[28.5rem]"
          key={index}
        >
          <PersonCard {...person} />
        </div>
      ))}
    </div>
  );
};

export default PersonCardList;
