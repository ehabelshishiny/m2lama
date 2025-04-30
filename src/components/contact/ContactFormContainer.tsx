
import React, { useRef, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import ContactFormFields from "./ContactFormFields";
import FormSubmissionSuccess from "./FormSubmissionSuccess";
import { useContactForm } from "./useContactForm";

interface ContactFormContainerProps {
  className?: string;
}

const ContactFormContainer: React.FC<ContactFormContainerProps> = ({ className }) => {
  const formRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    handleChange,
    handleSubmit
  } = useContactForm();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <Toaster position="top-center" />
      <div className="w-full h-full flex justify-center items-center">
        <div ref={formRef} className={`transition-all duration-1000 ease-out max-w-2xl w-full
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mx-auto flex justify-center items-center">
            <div className={`card-glass p-8 w-full ${className || ''}`}>
              <h3 className="text-2xl font-bold mb-6 text-center">احجز عرض توضيحي</h3>
              
              {isSubmitted ? <FormSubmissionSuccess /> : <ContactFormFields formData={formData} handleChange={handleChange} isSubmitting={isSubmitting} error={error} handleSubmit={handleSubmit} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormContainer;
