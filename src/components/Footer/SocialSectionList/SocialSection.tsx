import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type SocialData = {
  icon: IconProp;
  label: string;
};

const SocialSection = ({ icon, label }: SocialData) => {
  return (
    <div className="flex gap-[0.875rem] items-center">
      <FontAwesomeIcon icon={icon} />
      <div>{label}</div>
    </div>
  );
};

export default SocialSection;
