import { FormElem } from "@src/types/form";

const CustomInputBox = ({
  label,
  hint,
  children,
}: FormElem & { children: React.ReactNode }) => {
  return (
    <div className="font-medium w-[17.875rem] relative">
      <div className="absolute bg-white left-6 top-[-0.84375rem] px-[0.375rem] z-10">
        {label}
      </div>
      {children}
      <div className="opacity-40">{hint}</div>
    </div>
  );
};

export default CustomInputBox;
