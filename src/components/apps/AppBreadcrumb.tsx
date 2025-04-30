
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { appsData } from '@/data/appsData';

interface AppBreadcrumbProps {
  appId: string;
}

const AppBreadcrumb: React.FC<AppBreadcrumbProps> = ({ appId }) => {
  const app = appsData[appId];
  
  if (!app) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-12"
    >
      <nav className="flex items-center text-sm">
        <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
          الرئيسية
        </Link>
        <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
        <Link to="/#apps" className="text-muted-foreground hover:text-foreground transition-colors">
          التطبيقات
        </Link>
        <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
        <span className={`${app.primaryColor} font-medium`}>{app.title}</span>
      </nav>
    </motion.div>
  );
};

export default AppBreadcrumb;
