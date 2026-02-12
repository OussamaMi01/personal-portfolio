// components/shared/AppBanner.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiFeather, FiArrowRight, FiGithub, FiInstagram, FiDownload } from 'react-icons/fi';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import Image from 'next/image';
import Link from 'next/link';

function AppBanner({ currentRole = 'developer', setCurrentRole }) {
  const [activeTheme] = useThemeSwitcher();

  const roles = {
    developer: {
      title: "Full-Stack Developer & Tech Innovator",
      description: "Crafting scalable digital solutions with modern technologies and cutting-edge frameworks",
      icon: <FiCode className="text-xl" />,
      color: "indigo",
      cta: "View My Projects",
      social: [
        { icon: <FiGithub />, label: "GitHub", href: "https://github.com" }
      ],
      image: "/images/banner/developer.jpg"
    },
    creator: {
      title: "Digital Creator & Visual Storyteller",
      description: "Transforming ideas into compelling visual experiences that captivate and inspire audiences",
      icon: <FiFeather className="text-xl" />,
      color: "purple",
      cta: "See My Work",
      social: [
        { icon: <FiInstagram />, label: "Instagram", href: "#" },
      ],
      image: "/images/banner/digital_creator.jpg"
    }
  };

  // Ensure currentRole is valid, fallback to 'developer'
  const validCurrentRole = roles[currentRole] ? currentRole : 'developer';
  const currentRoleData = roles[validCurrentRole];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className="flex flex-col lg:flex-row items-center justify-between pt-24 md:pt-28 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto gap-12 lg:gap-16"
    >
      {/* Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
        {/* Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800"
        >
          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></div>
          <span className="text-sm font-medium">Welcome to my portfolio</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="font-general-semibold text-4xl lg:text-5xl xl:text-6xl text-ternary-dark dark:text-primary-light leading-tight">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Oussama
            </span>
          </h1>

          {/* Animated Role Headline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={validCurrentRole}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-4"
            >
              <h2 className="font-general-medium text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 leading-normal">
                {currentRoleData.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
                {currentRoleData.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Role Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex bg-gray-100 dark:bg-ternary-dark rounded-full p-1 shadow-inner border border-gray-200 dark:border-gray-700">
              <motion.button
                onClick={() => setCurrentRole('developer')}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  validCurrentRole === 'developer'
                    ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiCode className="mr-2 text-lg" />
                <span className="font-medium">Developer</span>
              </motion.button>
              <motion.button
                onClick={() => setCurrentRole('creator')}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  validCurrentRole === 'creator'
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiFeather className="mr-2 text-lg" />
                <span className="font-medium">Creator</span>
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {currentRoleData.social.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-gray-200 dark:border-gray-700"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link href="/projects" passHref legacyBehavior>
              <motion.a
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium cursor-pointer min-w-[200px]"
              >
                <span className="font-semibold">{currentRoleData.cta}</span>
                <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-indigo-400 dark:hover:border-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-medium min-w-[200px]"
              onClick={() => {
                console.log('Download CV');
              }}
            >
              <FiDownload className="mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold">Download CV</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          ease: 'easeInOut', 
          duration: 0.9, 
          delay: 0.5 
        }}
        className="w-full lg:w-1/2 relative flex justify-center"
      >
        <div className="relative h-80 sm:h-96 md:h-[450px] lg:h-[500px] xl:h-[550px] w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={validCurrentRole}
              initial={{ opacity: 0, x: 50, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -50, rotateY: -10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full"
            >
              <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl group">
                <Image
                  src={currentRoleData.image}
                  alt={validCurrentRole === 'developer' ? "Developer working on code" : "Digital creator at work"}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                  quality={95}
                  priority={true}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 dark:to-black/50"></div>
                
              
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Background Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 -z-10"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 -z-10"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
            className="absolute top-1/2 -left-12 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-15 -z-10"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;