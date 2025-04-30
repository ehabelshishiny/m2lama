
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { toast } from "sonner";
import emailjs from 'emailjs-com';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface EmailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pdfUrl: string;
}

const EmailDialog: React.FC<EmailDialogProps> = ({ open, onOpenChange, pdfUrl }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  // Handler to validate email
  const isValidEmail = (email: string) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  // Handler to send email and open PDF
  const handleSendAndOpen = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidEmail(email)) {
      toast.error("الرجاء إدخال بريد إلكتروني صحيح");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send email to the user
      const userTemplateParams = {
        from_name: "زائر موقع ترانزكيت",
        company: "غير معروف",
        email: email,
        phone: "غير معروف",
        plan: "طلب دراسة حالة",
        message: `طلب دراسة حالة شركة الجودة من خلال الموقع. رابط الملف: ${pdfUrl}`,
        to_email: email
      };
      
      await emailjs.send(
        'service_gl7sh1q',
        'template_zl91ycr',
        userTemplateParams,
        'UWjI5jEmgM-g5P4ic'
      );
      
      // Send notification email to you
      const notificationTemplateParams = {
        from_name: "نظام موقع ترانزكيت",
        company: "غير معروف",
        email: "system@tranzkit.com",
        phone: "غير معروف",
        plan: "إشعار بطلب دراسة حالة",
        message: `تم طلب دراسة حالة شركة الجودة من قبل: ${email}`,
        to_email: 'ehab.elshishiny@gmail.com'
      };
      
      await emailjs.send(
        'service_gl7sh1q',
        'template_zl91ycr',
        notificationTemplateParams,
        'UWjI5jEmgM-g5P4ic'
      );
      
      // Open the PDF in a new tab with a custom filename
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = "Tranzkit Case Study - AlGawda.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success("تم إرسال الملف إلى بريدك الإلكتروني وفتحه في نافذة جديدة");
      onOpenChange(false);
      setEmail('');
    } catch (error) {
      console.error("Error:", error);
      toast.error("حدث خطأ أثناء إرسال البريد الإلكتروني");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-right">{t('case.email.title')}</DialogTitle>
          <DialogDescription className="text-right">
            {t('case.email.desc')}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSendAndOpen} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-muted-foreground">
              <Mail size={18} />
            </div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@company.com"
              className="pr-10 text-right"
              required
            />
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">{t('case.email.cancel')}</Button>
            </DialogClose>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="relative"
            >
              {isSubmitting ? (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  </div>
                  <span className="opacity-0">{t('case.email.button')}</span>
                </>
              ) : (
                t('case.email.button')
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailDialog;
