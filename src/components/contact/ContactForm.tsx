
import React from "react";
import ContactFormContainer from "./ContactFormContainer";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  return <ContactFormContainer className={className} />;
};

export default ContactForm;
