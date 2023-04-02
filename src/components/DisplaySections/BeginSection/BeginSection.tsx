const BeginSection = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center w-full">
    <div className="w-fit flex flex-col items-center">
      <div className="font-semibold text-base sm:text-[1.75rem]">{label}</div>
      <div className="w-2/3 sm:w-[12.5rem] h-[0.1875rem] sm:h-[0.3125rem] bg-text-primary rounded-sm mt-[0.3125rem] sm:mt-[1.375rem]" />
    </div>
  </div>
);

export default BeginSection;
