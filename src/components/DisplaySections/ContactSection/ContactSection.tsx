import { CustomInputBox } from "@components/CustomInputBox";
import { FormElem } from "@src/types/form";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { useRouter } from "next/router";
import { formList } from "./formList";

const ContactSection = () => {
  const router = useRouter();
  const isInTab = router.asPath.includes("/offerings");

  return (
    <div
      className={`div-section max-sm:px-[1.25rem] ${
        isInTab ? "py-[1.875rem] sm:py-[4.375rem]" : "sm:pb-12"
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
            <button className="btn-primary w-[21.875rem] sm:w-[17.875rem]">
              Submit
            </button>
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
};

export default ContactSection;
