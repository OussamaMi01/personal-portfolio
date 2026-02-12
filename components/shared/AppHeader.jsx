import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSun, 
  FiMoon, 
  FiX, 
  FiMenu,
  FiHeart
} from 'react-icons/fi';
import { 
  HiOutlineHome, 
  HiOutlineCode, 
  HiOutlineAcademicCap,
  HiOutlineLightningBolt,
  HiOutlineUser,
  HiOutlineChat,
  HiOutlineSparkles
} from 'react-icons/hi';
import HireMeModal from '../HireMeModal';
import CustomAlert from './CustomAlert'; 
import profilePic from '../../public/images/profile.jpg';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { HiOutlineNewspaper } from 'react-icons/hi';

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [showAlert, setShowAlert] = useState(null);
  const [currentTheme, toggleTheme] = useThemeSwitcher(); 
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [hoveredLink, setHoveredLink] = useState(null);

  // Set mounted to true after client-side hydration
  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.pathname);
    }
  }, []);

  // Scroll handling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsTop(scrollY < 10);
          setIsScrolled(scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMenu]);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function showHireMeModal() {
    if (!showModal) {
      document.documentElement.classList.add('overflow-y-hidden');
      setShowModal(true);
    } else {
      document.documentElement.classList.remove('overflow-y-hidden');
      setShowModal(false);
    }
  }

  const handleSubmissionComplete = (alertDetails) => {
    setShowAlert(alertDetails);
  };

  const handleAlertClose = () => {
    setShowAlert(null);
  };

  // Enhanced navLinks with larger icons and better styling
  const navLinks = [
    { 
      name: 'Home', 
      path: '/', 
      icon: <HiOutlineHome size={24} />,
      mobileIcon: <HiOutlineHome size={24} />,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Projects', 
      path: '/projects', 
      icon: <HiOutlineCode size={24} />,
      mobileIcon: <HiOutlineCode size={24} />,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Experience', 
      path: '/experience', 
      icon: <HiOutlineAcademicCap size={24} />,
      mobileIcon: <HiOutlineAcademicCap size={24} />,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Services', 
      path: '/services', 
      icon: <HiOutlineLightningBolt size={24} />,
      mobileIcon: <HiOutlineLightningBolt size={24} />,
      color: 'from-orange-500 to-amber-500'
    },
    { 
      name: 'Blog', 
      path: '/blog', 
      icon: <HiOutlineNewspaper size={24} />,
      mobileIcon: <HiOutlineNewspaper size={24} />,
      color: 'from-green-500 to-teal-500'
    },
    { 
      name: 'About', 
      path: '/about', 
      icon: <HiOutlineUser size={24} />,
      mobileIcon: <HiOutlineUser size={24} />,
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      name: 'Contact', 
      path: '/contact', 
      icon: <HiOutlineChat size={24} />,
      mobileIcon: <HiOutlineChat size={24} />,
      color: 'from-teal-500 to-cyan-500'
    },
  ];

  // Header background styles based on scroll state
  const headerBackground = isTop 
    ? 'bg-transparent' 
    : 'bg-white/98 dark:bg-ternary-dark/98 backdrop-blur-xl shadow-2xl border-b border-gray-200/30 dark:border-gray-700/30';

  const isLinkActive = (path) => activeLink === path;

  return (
    <>
      {/* Enhanced Modern Header */}
      <motion.header
        className={`fixed w-full z-50 transition-all duration-500 ${headerBackground}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Enhanced Profile Picture Logo - Left */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="block">
                <div className="cursor-pointer group">
                  {mounted ? (
                    <motion.div
                      className="relative"
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative w-14 h-14 md:w-16 md:h-16">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5 animate-gradient-xy">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-sm opacity-50" />
                        </div>
                        
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                          <Image
                            src={profilePic}
                            alt="Oussama Missaoui"
                            fill
                            sizes="(max-width: 768px) 56px, 64px"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        
                        <motion.div
                          className="absolute bottom-1 right-1 w-3 h-3 md:w-3.5 md:h-3.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white dark:border-gray-800 shadow-lg"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />
                  )}
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1 max-w-3xl">
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl px-4 py-3 border-2 border-gray-100/60 dark:border-gray-700/60 shadow-2xl">
                {navLinks.map((link, index) => (
                  <Link key={link.name} href={link.path}>
                    <motion.div
                      whileHover={{ 
                        y: -3, 
                        scale: 1.08,
                        transition: { type: "spring", stiffness: 400, damping: 25 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setHoveredLink(link.path)}
                      onHoverEnd={() => setHoveredLink(null)}
                      onClick={() => setActiveLink(link.path)}
                      className={`px-5 py-3 text-base font-semibold flex items-center transition-all duration-500 rounded-xl group relative overflow-hidden ${
                        isLinkActive(link.path)
                          ? `text-white bg-gradient-to-r ${link.color} shadow-lg`
                          : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-gray-700/80'
                      }`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15, type: "spring" }}
                    >
                      {(isLinkActive(link.path) || hoveredLink === link.path) && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-xl`}
                          layoutId="navBackground"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                      
                      <motion.span 
                        className={`relative z-10 mr-3 flex-shrink-0 transition-all duration-500 ${
                          isLinkActive(link.path) 
                            ? 'text-white scale-110' 
                            : 'group-hover:scale-110 group-hover:rotate-12'
                        }`}
                        animate={{
                          rotate: isLinkActive(link.path) ? [0, 5, -5, 0] : 0
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {link.icon}
                      </motion.span>
                      
                      <span className="relative z-10 font-semibold tracking-wide">
                        {link.name}
                      </span>

                      {isLinkActive(link.path) && (
                        <motion.div
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white rounded-full"
                          layoutId="activeIndicator"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Right Buttons */}
            <div className="flex items-center space-x-4">
              {mounted ? (
                <motion.button
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 180,
                    backgroundColor: "rgba(99, 102, 241, 0.1)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  aria-label="Theme Switcher"
                  className="p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-500 shadow-lg hover:shadow-2xl border-2 border-gray-200/50 dark:border-gray-700/50 group"
                >
                  <motion.div
                    animate={{ rotate: currentTheme === 'dark' ? 0 : 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    {currentTheme === 'dark' ? <FiSun size={24} /> : <FiMoon size={24} />}
                  </motion.div>
                </motion.button>
              ) : (
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />
              )}

              <motion.button
                whileHover={{ 
                  scale: 1.08,
                  y: -2,
                  boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={showHireMeModal}
                className="hidden md:flex items-center px-8 py-4 text-base font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden"
                aria-label="Hire Me Button"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                <HiOutlineSparkles size={22} className="relative z-10 mr-3 group-hover:rotate-180 transition-transform duration-700" />
                
                <span className="relative z-10 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                  Hire Me
                </span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(99, 102, 241, 0.1)",
                  rotate: 90
                }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
                className="lg:hidden p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-500 shadow-lg hover:shadow-xl border-2 border-gray-200/50 dark:border-gray-700/50"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: showMenu ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {showMenu ? <FiX size={26} /> : <FiMenu size={26} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* FIXED MOBILE MENU - SCROLLABLE WITH ALL ITEMS */}
        <AnimatePresence>
          {showMenu && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowMenu(false)}
                className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-xl z-40"
              />
              
              {/* Menu Container - Fixed height with proper positioning */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="lg:hidden fixed top-[80px] left-4 right-4 bottom-4 z-50 flex flex-col"
              >
                <div className="bg-white dark:bg-ternary-dark rounded-3xl shadow-3xl border-2 border-gray-200/50 dark:border-gray-700/50 flex flex-col h-full max-h-full">
                  
                  {/* Scrollable Content Area */}
                  <div className="flex-1 overflow-y-auto scrollbar-hide">
                    
                    {/* Profile Section */}
                    <div className="p-6 border-b border-gray-100 dark:border-gray-700 sticky top-0 bg-white dark:bg-ternary-dark z-10">
                      <div className="flex items-center space-x-4">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-sm opacity-50" />
                          </div>
                          
                          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-lg">
                            <Image
                              src={profilePic}
                              alt="Oussama Missaoui"
                              fill
                              sizes="64px"
                              className="object-cover"
                            />
                          </div>
                          
                          <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white dark:border-gray-800" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white truncate">
                            Oussama Missaoui
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Full-Stack Developer
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                            Available for work
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="p-6 space-y-2">
                      {navLinks.map((link, index) => (
                        <Link key={link.name} href={link.path}>
                          <motion.div
                            whileTap={{ scale: 0.98 }}
                            onHoverStart={() => setHoveredLink(link.path)}
                            onHoverEnd={() => setHoveredLink(null)}
                            onClick={() => {
                              setActiveLink(link.path);
                              setShowMenu(false);
                            }}
                            className={`flex items-center px-5 py-4 text-base font-semibold rounded-xl transition-all duration-300 group relative overflow-hidden ${
                              isLinkActive(link.path)
                                ? `text-white bg-gradient-to-r ${link.color} shadow-lg`
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            {(isLinkActive(link.path) || hoveredLink === link.path) && (
                              <motion.div
                                className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-xl`}
                                layoutId="mobileNavBackground"
                                initial={false}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                              />
                            )}

                            <motion.span 
                              className={`relative z-10 mr-4 p-2.5 rounded-xl transition-all duration-300 ${
                                isLinkActive(link.path)
                                  ? 'bg-white/20 text-white'
                                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                              }`}
                              whileHover={{ 
                                scale: isLinkActive(link.path) ? 1 : 1.1,
                              }}
                            >
                              {link.mobileIcon}
                            </motion.span>
                            
                            <span className="relative z-10 font-medium">
                              {link.name}
                            </span>
                            
                            {isLinkActive(link.path) && (
                              <motion.div
                                className="ml-auto w-2 h-2 bg-white rounded-full shadow-lg"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.05 + 0.1, type: "spring" }}
                              />
                            )}
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Fixed Hire Me Button at Bottom */}
                  <div className="p-6 border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-ternary-dark sticky bottom-0">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        showHireMeModal();
                        setShowMenu(false);
                      }}
                      className="w-full px-6 py-4 text-base font-semibold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                      />
                      
                      <HiOutlineSparkles size={22} className="relative z-10 mr-3 group-hover:rotate-180 transition-transform duration-700" />
                      <span className="relative z-10 font-semibold">
                        Hire Me
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100]">
            <HireMeModal
              onClose={showHireMeModal}
              onRequest={showHireMeModal}
              onSubmissionComplete={handleSubmissionComplete}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Custom Alert */}
      <AnimatePresence>
        {showAlert && (
          <CustomAlert
            message={showAlert.message}
            type={showAlert.type}
            onClose={handleAlertClose} 
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default AppHeader;