// components/about/AboutCounter.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CounterItem from './CounterItem';
import { FiAward, FiStar, FiThumbsUp, FiLayers } from 'react-icons/fi';

function AboutCounter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const counterData = [
    {
      id: 1,
      title: "Years of experience",
      end: 3,
      icon: <FiAward className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
      measurement: "",
      description: "Combined professional and freelance"
    },
    {
      id: 2,
      title: "Projects completed",
      end: 20,
      icon: <FiLayers className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
      measurement: "+",
      description: "Software & design solutions"
    },
    {
      id: 3,
      title: "Client satisfaction",
      end: 95,
      icon: <FiThumbsUp className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
      measurement: "%",
      description: "Positive feedback rate"
    },
    {
      id: 4,
      title: "Continuous learning",
      end: 1000,
      icon: <FiStar className="w-6 h-6" />,
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20",
      measurement: "+",
      description: "Hours of skill development"
    }
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="mt-16 sm:mt-24"
    >
      <div className="relative py-16 sm:py-20 overflow-hidden rounded-2xl">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-ternary-dark dark:to-gray-800 z-0 rounded-2xl" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -20, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute top-0 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400 to-sky-600 rounded-full mix-blend-multiply filter blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              x: [0, 15, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6
            }}
            className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mix-blend-multiply filter blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My Journey in <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Numbers</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Quantifying my growth as a developer and creator through measurable achievements
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {counterData.map((item, index) => (
              <CounterItem 
                key={item.id}
                item={item}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutCounter;