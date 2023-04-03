import SocialSection, { SocialData } from "./SocialSection";

const SocialSectionList = ({ socialList }: { socialList: SocialData[] }) => {
  return (
    <div className="flex gap-[0.875rem] md:font-bold flex-col md:flex-row">
      {socialList.map((socialData) => (
        <SocialSection key={socialData.label} {...socialData} />
      ))}
    </div>
  );
};

export default SocialSectionList;
