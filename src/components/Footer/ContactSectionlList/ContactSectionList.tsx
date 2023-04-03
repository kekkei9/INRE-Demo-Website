import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactSection, { ContactData } from "./ContactSection";

interface IContactSectionListProps {
  contactList: ContactData[];
}

const ContactSectionList = ({ contactList }: IContactSectionListProps) => {
  return (
    <div className="max-md:font-normal">
      {contactList.map((contact) => (
        <ContactSection key={contact.label} {...contact} />
      ))}
    </div>
  );
};

export default ContactSectionList;
