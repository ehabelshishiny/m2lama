import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsAndPolicy from "./pages/TermsAndPolicy";
import Contact from "./pages/Contact";
import AppDetailPage from "./components/apps/AppDetailPage";
import { LanguageProvider } from "./contexts/LanguageContext";

// App-specific pages for better SEO
import CaptainAppPage from "./pages/CaptainAppPage";
import SupervisorAppPage from "./pages/SupervisorAppPage";
import RiderAppPage from "./pages/RiderAppPage";
import ClientDashboardPage from "./pages/ClientDashboardPage";
import OperationsDashboardPage from "./pages/OperationsDashboardPage";

// Payment pages
import PaymentBasic from "./pages/payment/PaymentBasic";
import PaymentPro from "./pages/payment/PaymentPro";
import PaymentEnterprise from "./pages/payment/PaymentEnterprise";
import PaymentSuccess from "./pages/payment/PaymentSuccess";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/terms-policy" element={<TermsAndPolicy />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Static routes for app pages (better for SEO) */}
              <Route path="/app-captain" element={<CaptainAppPage />} />
              <Route path="/app-supervisor" element={<SupervisorAppPage />} />
              <Route path="/app-rider" element={<RiderAppPage />} />
              <Route path="/app-client-dashboard" element={<ClientDashboardPage />} />
              <Route path="/app-operations-dashboard" element={<OperationsDashboardPage />} />
              
              {/* Payment routes */}
              <Route path="/payment/basic" element={<PaymentBasic />} />
              <Route path="/payment/pro" element={<PaymentPro />} />
              <Route path="/payment/enterprise" element={<PaymentEnterprise />} />
              <Route path="/payment/success" element={<PaymentSuccess />} />
              
              {/* Keep the dynamic route for backward compatibility */}
              <Route path="/app/:id" element={<AppDetailPage />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
