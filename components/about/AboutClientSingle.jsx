// components/about/AboutClientSingle.jsx
import { motion } from 'framer-motion';

function AboutClientSingle({ title, icon }) { 
  const IconComponent = icon; 

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        y: -8,
        transition: { type: "spring", stiffness: 400 }
      }}
      className="group relative bg-white dark:bg-ternary-dark rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 w-full border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-200 dark:group-hover:border-indigo-800 transition-all duration-500 pointer-events-none" />

      <div className="relative h-32 w-full flex items-center justify-center">
        {IconComponent ? ( 
          <motion.div
            whileHover={{ 
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 }
            }}
            className="text-6xl text-gray-500 dark:text-gray-300 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300"
          >
            <IconComponent />
          </motion.div>
        ) : (
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 w-full h-full rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-purple-100 dark:group-hover:from-indigo-900/20 dark:group-hover:to-purple-900/20 transition-all duration-300">
            <span className="text-2xl font-bold text-gray-400 group-hover:text-indigo-500 transition-colors duration-300">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      
      <motion.h3 
        className="text-center mt-4 font-semibold text-primary-dark dark:text-primary-light group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
}

export default AboutClientSingle;