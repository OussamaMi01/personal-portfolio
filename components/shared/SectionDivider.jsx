// components/shared/SectionDivider.jsx - ENHANCED BUT SIMPLE
import { motion } from 'framer-motion';

const SectionDivider = ({ 
  delay = 0,
  size = 'md', // sm, md, lg
  variant = 'default' // default, minimal, fancy
}) => {
  const getSizeClass = () => {
    switch(size) {
      case 'sm': return 'my-12 sm:my-16';
      case 'lg': return 'my-20 sm:my-24';
      default: return 'my-16 sm:my-20';
    }
  };

  const getDividerClass = () => {
    const base = "bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full";
    
    switch(variant) {
      case 'minimal': 
        return `${base} w-16 h-0.5 opacity-60`;
      case 'fancy': 
        return `${base} w-32 h-1.5 shadow-lg`;
      default: 
        return `${base} w-24 h-1`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`flex justify-center items-center ${getSizeClass()}`}
    >
      <div className={getDividerClass()} />
    </motion.div>
  );
};

export default SectionDivider;