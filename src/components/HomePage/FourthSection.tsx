import { CustomInputBox } from "@components/CustomInputBox";
import { FormElem } from "@src/types/form";
import Image from "next/image";

const formList: FormElem[] = [
  {
    label: "Full name",
    name: "name",
    hint: "Not more than 50 characters",
  },
  {
    label: "Email address",
    name: "email",
    placeholder: "lorem@gmail.com",
    hint: "Please enter a valid email address",
  },
  {
    label: "Mobile number",
    name: "phone",
    placeholder: "+91 9876543210",
  },
  {
    label: "Country",
    name: "country",
    placeholder: "Bangalore",
  },
  {
    label: "Stages",
    name: "stage",
    placeholder: "I have booked but registration is not done",
  },
];

const FourthSection = () => (
  <div className="px-[13.5rem] pt-9 pb-[4.1875rem]">
    <div
      className="flex px-16 py-[3.6875rem] justify-between"
      style={{ boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.07)" }}
    >
      <div>
        <div className="font-bold text-2xl">
          Get In Touch With Us To Connect
        </div>
        <div className="mt-7 font-semibold">Contact Us</div>
        <div className="flex flex-wrap gap-y-7 gap-x-6 mt-7">
          {formList.map((formData) => (
            <CustomInputBox key={formData.name} {...formData} />
          ))}
        </div>
        <div className="mt-7">
          <button className="primary w-[21.875rem]">Submit</button>
        </div>
      </div>
      <div className="flex-shrink-0">
        <Image
          src="/assets/home/Happy announcement-pana.png"
          alt="Happy announcement-pana"
          width={447}
          height={401}
        />
      </div>
    </div>
  </div>
);

export default FourthSection;
