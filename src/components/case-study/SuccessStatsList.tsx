
import React from 'react';
import { motion } from 'framer-motion';

interface SuccessStatsListProps {
  stats: Array<{
    id: string;
    text: string;
  }>;
}

const SuccessStatsList: React.FC<SuccessStatsListProps> = ({ stats }) => {
  return (
    <ul className="space-y-4 mb-8">
      {stats.map((stat, index) => (
        <motion.li 
          key={stat.id} 
          className="flex items-start group"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-tranzkit-green/30 to-tranzkit-blue/30 flex items-center justify-center mt-1 rtl:ml-3 ltr:mr-3 group-hover:from-tranzkit-green/50 group-hover:to-tranzkit-blue/50 transition-all duration-300">
            <span className="text-tranzkit-green">✓</span>
          </div>
          <span className="text-foreground/90 group-hover:text-foreground transition-colors duration-300">{stat.text}</span>
        </motion.li>
      ))}
    </ul>
  );
};

export default SuccessStatsList;
