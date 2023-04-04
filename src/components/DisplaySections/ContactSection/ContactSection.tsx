import { CustomInputBox } from "@components/CustomInputBox";
import { FormElem } from "@src/types/form";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { countries } from "./countries";

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
    children: (
      <IntlTelInput
        containerClassName="intl-tel-input"
        inputClassName="form-control"
      />
    ),
  },
  {
    label: "Country",
    name: "country",
    placeholder: "Bangalore",
    children: (
      <select
        id="dropdown"
        className="w-full rounded-[0.25rem] px-6 py-[1.03125rem]"
        style={{ border: "1.5px solid #888888" }}
      >
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    ),
  },
  {
    label: "Stages",
    name: "stage",
    placeholder: "I have booked but registration is not done",
    children: (
      <select
        id="dropdown"
        className="w-full rounded-[0.25rem] px-6 py-[1.03125rem]"
        style={{ border: "1.5px solid #888888" }}
      >
        {[
          "I am still searching",
          "I have registered and taken possession",
          "I have booked but registration is not done",
          "I have booked but registration is not done",
        ].map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    ),
  },
];

const ContactSection = ({ isInTab }: { isInTab?: boolean }) => (
  <div
    className={`div-section ${
      isInTab ? "py-[1.875rem] sm:py-[4.375rem]" : "pb-12"
    }`}
  >
    <div
      className="flex sm:px-16 sm:py-[3.6875rem] justify-between items-center flex-col-reverse xl:flex-row gap-5 xl:gap-0"
      style={{ boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.07)" }}
    >
      <div className="flex-[7_7_0%]">
        <div className="font-bold text-2xl">
          Get In Touch With Us To Connect
        </div>
        <div className="mt-7 font-semibold">Contact Us</div>
        <div className="flex flex-wrap gap-y-7 gap-x-6 mt-7">
          {formList.map((formData) => {
            const { placeholder, name, children } = formData;
            return (
              <CustomInputBox key={formData.name} {...formData}>
                {children || (
                  <input
                    placeholder={placeholder}
                    className="w-full rounded-[0.25rem] px-6 py-[1.03125rem]"
                    style={{ border: "1.5px solid #888888" }}
                    name={name}
                  />
                )}
              </CustomInputBox>
            );
          })}
        </div>
        <div className="mt-7">
          <button className="btn-primary w-[17.875rem]">Submit</button>
        </div>
      </div>
      <div className="flex-[3_3_0%]">
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
