// components/about/AboutClients.jsx
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { clientsData, clientsHeading } from '../../data/clientsData';
import AboutClientSingle from './AboutClientSingle';

function AboutClients() {
  const [clients] = useState(clientsData);
  const [isPaused, setIsPaused] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Memoize duplicated clients for performance
  const duplicatedClients = useMemo(() => 
    [...clients, ...clients, ...clients, ...clients], 
    [clients]
  );

  const marqueeVariants = {
    animate: {
      x: [0, -1032], // Adjusted for 4 sets of clients
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
    paused: {
      x: 0,
      transition: {
        duration: 0
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="mt-16 sm:mt-24"
    >
      <div className="relative py-12 sm:py-16 overflow-hidden rounded-2xl mx-auto container px-4">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-ternary-dark dark:to-gray-800 z-0 rounded-2xl" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-0 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400 to-sky-600 rounded-full mix-blend-multiply filter blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mix-blend-multiply filter blur-3xl"
          />
        </div>

        <div className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {clientsHeading}
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              The essential tools and platforms that power my development and design workflow.
            </motion.p>
          </div>

          {/* Enhanced Marquee with Pause on Hover */}
          <div 
            className="relative w-full overflow-hidden py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              variants={marqueeVariants}
              animate={isPaused ? "paused" : "animate"}
              className="flex space-x-8"
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className="flex-shrink-0 w-64 sm:w-72 lg:w-80"
                >
                  <AboutClientSingle
                    title={client.title}
                    icon={client.icon}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutClients;