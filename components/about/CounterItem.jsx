// components/about/CounterItem.jsx
import { motion } from 'framer-motion';
import { useCountUp } from 'react-countup';

const CounterItem = ({ item, index, inView }) => {
  const { countUp, update } = useCountUp({
    ref: `counter-${item.id}`,
    start: 0,
    end: item.end,
    delay: 0.5,
    duration: 2.5,
    enableScrollSpy: true,
    scrollSpyDelay: 300,
    scrollSpyOnce: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: 0.2 + index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 400 }
      }}
      className="group relative"
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
      
      <div className={`relative bg-gradient-to-br ${item.bgColor} rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden backdrop-blur-sm border border-white/20 dark:border-gray-700/50 transition-all duration-500`}>
        <div className="p-6 sm:p-8 h-full">
          {/* Icon Container */}
          <motion.div
            whileHover={{ 
              rotate: 360,
              transition: { duration: 0.6, ease: "easeInOut" }
            }}
            className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg mb-6`}
          >
            <div className="text-white">
              {item.icon}
            </div>
          </motion.div>
          
          {/* Counter */}
          <div className="flex items-baseline justify-center mb-3">
            <span 
              id={`counter-${item.id}`} 
              className="text-4xl sm:text-5xl font-bold text-primary-dark dark:text-primary-light"
            >
              {inView ? countUp : 0}
            </span>
            {item.measurement && (
              <span className="text-2xl font-semibold text-primary-dark dark:text-primary-light ml-1">
                {item.measurement}
              </span>
            )}
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-semibold text-center text-primary-dark dark:text-primary-light mb-2 leading-tight">
            {item.title}
          </h3>
          
          {/* Description */}
          <p className="text-center text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
        
        {/* Hover Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default CounterItem;