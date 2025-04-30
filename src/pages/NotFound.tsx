
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-tranzkit-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-tranzkit-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 z-10">
        <div className="glass-card p-10 max-w-2xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4 text-white"
          >
            404
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            عذراً، الصفحة التي تبحث عنها غير موجودة
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = '/'}
            >
              العودة إلى الصفحة الرئيسية
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
