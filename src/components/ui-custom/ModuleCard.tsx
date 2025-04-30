
import React from 'react';
import { motion } from 'framer-motion';

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ 
  icon, 
  title, 
  description, 
  color,
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true, margin: "-50px" }}
      className={`glass-card p-6 border-r-4 ${color} transition-all duration-300 hover:translate-y-[-5px]`}
    >
      <div className={`w-12 h-12 flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
};

export default ModuleCard;
