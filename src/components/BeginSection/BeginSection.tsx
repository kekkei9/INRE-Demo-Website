const BeginSection = ({ label }: { label: string }) => (
  <div className="text-center">
    <div className="font-semibold text-[1.75rem]">{label}</div>
    <div className="w-[12.5rem] h-[0.3125rem] bg-[#1A1A1A] rounded-sm mt-[1.375rem]"></div>
  </div>
);

export default BeginSection;
