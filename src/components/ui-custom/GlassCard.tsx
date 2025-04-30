
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedNumber from './AnimatedNumber';

interface GlassCardProps {
  percentage: number;
  title: string;
  index: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ percentage, title, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      viewport={{ once: true, margin: "-50px" }}
      className="glass-card p-8 flex flex-col items-center text-center"
    >
      <div className="text-6xl font-bold text-white mb-3 flex flex-col">
        <AnimatedNumber
          endValue={percentage}
          suffix="%"
          duration={2000}
          className="flex items-center justify-center"
        />
      </div>
      <p className="text-lg text-muted-foreground">{title}</p>
    </motion.div>
  );
};

export default GlassCard;
