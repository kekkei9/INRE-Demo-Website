import { FormElem } from "@src/types/form";
import IntlTelInput from "react-intl-tel-input";
import { countries } from "./countries";

export const formList: FormElem[] = [
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
