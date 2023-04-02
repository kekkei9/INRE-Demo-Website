import { Person } from "@src/types/person";
import PersonCard from "./PersonCard";

const PersonCardList = ({ personList }: { personList: Person[] }) => {
  return (
    <div className="flex w-full gap-card flex-col 2xl:flex-row">
      {personList.map((person, index) => (
        <div className="flex flex-1" key={index}>
          <PersonCard {...person} />
        </div>
      ))}
    </div>
  );
};

export default PersonCardList;
