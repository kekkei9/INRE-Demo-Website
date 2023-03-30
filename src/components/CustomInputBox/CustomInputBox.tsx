import { FormElem } from "@src/types/form";

const CustomInputBox = ({ label, placeholder, hint, name }: FormElem) => {
  return (
    <div className="font-medium w-[15rem] sm:w-[21.875rem] relative">
      <div className="absolute bg-white left-6 top-[-0.84375rem] px-[0.375rem]">
        {label}
      </div>

      <input
        placeholder={placeholder}
        className="w-full rounded-[0.25rem] px-6 py-[1.03125rem]"
        style={{ border: "1.5px solid #888888" }}
        name={name}
      ></input>
      <div className="opacity-40">{hint}</div>
    </div>
  );
};

export default CustomInputBox;
