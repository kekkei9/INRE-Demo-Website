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

const ContactSection = ({ isInTab }: { isInTab?: boolean }) => (
  <div
    className={`div-section lg:px-[13.5rem] ${
      isInTab ? "py-[4.375rem]" : "pb-12"
    }`}
  >
    <div
      className="flex px-16 py-[3.6875rem] justify-between items-center"
      style={{ boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.07)" }}
    >
      <div>
        <div className="font-bold text-2xl">
          Get In Touch With Us To Connect
        </div>
        <div className="mt-7 font-semibold">Contact Us</div>
        <div className="flex flex-wrap gap-y-7 gap-x-6 mt-7 justify-center 2xl:justify-start">
          {formList.map((formData) => (
            <CustomInputBox key={formData.name} {...formData} />
          ))}
        </div>
        <div className="mt-7 flex flex-col items-center 2xl:justify-start">
          <button className="btn-primary w-[15rem] sm:w-[21.875rem]">
            Submit
          </button>
        </div>
      </div>
      <div className="flex-shrink-0 hidden 2xl:block">
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

export default ContactSection;
