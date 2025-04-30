
import { useState } from "react";
import emailjs from 'emailjs-com';
import { toast } from "sonner";

interface FormDataType {
  name: string;
  company: string;
  email: string;
  phone: string;
  plan: string;
  message: string;
}

const initialFormData: FormDataType = {
  name: "",
  company: "",
  email: "",
  phone: "",
  plan: "",
  message: ""
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const validateForm = () => {
    if (!formData.name.trim()) return "الرجاء إدخال الاسم";
    if (!formData.company.trim()) return "الرجاء إدخال اسم الشركة";
    if (!formData.email.trim()) return "الرجاء إدخال البريد الإلكتروني";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "الرجاء إدخال بريد إلكتروني صحيح";
    if (!formData.phone.trim()) return "الرجاء إدخال رقم الهاتف";
    return "";
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      toast.error(validationError);
      return;
    }
    
    setIsSubmitting(true);
    setError("");
    
    try {
      const templateParams = {
        from_name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        plan: formData.plan || 'Not selected',
        message: formData.message || 'No message provided',
        to_email: 'ehab.elshishiny@gmail.com'
      };
      
      await emailjs.send(
        'service_gl7sh1q',
        'template_zl91ycr',
        templateParams,
        'UWjI5jEmgM-g5P4ic'
      );
      
      console.log("Email sent successfully:", templateParams);
      
      setIsSubmitted(true);
      toast.success("تم إرسال طلبك بنجاح!");
      
      setFormData(initialFormData);
    } catch (err) {
      console.error("Error sending email:", err);
      setError("حدث خطأ أثناء إرسال النموذج. الرجاء المحاولة مرة أخرى.");
      toast.error("حدث خطأ أثناء إرسال النموذج. الرجاء المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    handleChange,
    handleSubmit
  };
};
