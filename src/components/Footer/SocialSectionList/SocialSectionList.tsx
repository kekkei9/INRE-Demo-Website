import SocialSection, { SocialData } from "./SocialSection";

const SocialSectionList = ({ socialList }: { socialList: SocialData[] }) => {
  return (
    <div className="flex gap-[0.875rem] sm:font-bold flex-col sm:flex-row">
      {socialList.map((socialData) => (
        <SocialSection key={socialData.label} {...socialData} />
      ))}
    </div>
  );
};

export default SocialSectionList;
