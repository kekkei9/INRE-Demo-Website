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
      isInTab ? "py-[1.875rem] md:py-[4.375rem]" : "pb-12"
    }`}
  >
    <div
      className="flex md:px-16 md:py-[3.6875rem] justify-between items-center flex-col-reverse 2xl:flex-row gap-5"
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
          <button className="btn-primary w-[21.875rem]">Submit</button>
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

export default ContactSection;
