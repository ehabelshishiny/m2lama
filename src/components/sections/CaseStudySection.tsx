
import React, { useState } from 'react';
import EmailDialog from '../case-study/EmailDialog';
import CaseStudyContent from '../case-study/CaseStudyContent';

const CaseStudySection = () => {
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const pdfUrl = "https://32cae09aae05cbfc041528c084a1f3f5.cdn.bubble.io/f1740014736520x161473966181199230/Al%20Gawda%20Digital%20Transformation%20With%20Tranzkit.pdf?_gl=1*1uhfpnm*_gcl_au*MTkwNjM0MjUxNy4xNzQxNTM4NzY1*_ga*MjA3MTQ2Njk0Mi4xNzM5NTcwNzEx*_ga_BFPVR2DEE2*MTc0MjA5MTU4My4yNS4xLjE3NDIwOTE3NDkuNjAuMC4w";

  // Handler to open the email dialog
  const handleRequestCaseStudy = () => {
    setShowEmailDialog(true);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/95 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-tranzkit-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-tranzkit-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <CaseStudyContent onRequestStudy={handleRequestCaseStudy} />
      </div>

      {/* Email Collection Dialog */}
      <EmailDialog 
        open={showEmailDialog} 
        onOpenChange={setShowEmailDialog} 
        pdfUrl={pdfUrl} 
      />
    </section>
  );
};

export default CaseStudySection;
