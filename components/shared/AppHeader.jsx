// components/shared/AppHeader.jsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import {
  FiSun,
  FiMoon,
  FiX,
  FiMenu
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
import LanguageSwitcher from './LanguageSwitcher';

function AppHeader() {
  const router = useRouter();
  const { t, i18n } = useTranslation('common');
  const { locale } = router;

  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [showAlert, setShowAlert] = useState(null);
  const [currentTheme, toggleTheme] = useThemeSwitcher();
  const [mounted, setMounted] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [hoveredLink, setHoveredLink] = useState(null);
  const [navLinks, setNavLinks] = useState([]); // State for nav links

  // Update nav links when language changes
  useEffect(() => {
    setNavLinks([
      {
        name: t('navigation.home', 'Home'),
        path: '/',
        icon: <HiOutlineHome size={24} />,
        mobileIcon: <HiOutlineHome size={24} />,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        name: t('navigation.projects', 'Projects'),
        path: '/projects',
        icon: <HiOutlineCode size={24} />,
        mobileIcon: <HiOutlineCode size={24} />,
        color: 'from-green-500 to-emerald-500'
      },
      {
        name: t('navigation.experience', 'Experience'),
        path: '/experience',
        icon: <HiOutlineAcademicCap size={24} />,
        mobileIcon: <HiOutlineAcademicCap size={24} />,
        color: 'from-purple-500 to-pink-500'
      },
      {
        name: t('navigation.services', 'Services'),
        path: '/services',
        icon: <HiOutlineLightningBolt size={24} />,
        mobileIcon: <HiOutlineLightningBolt size={24} />,
        color: 'from-orange-500 to-amber-500'
      },
      {
        name: t('navigation.blog', 'Blog'),
        path: '/blog',
        icon: <HiOutlineNewspaper size={24} />,
        mobileIcon: <HiOutlineNewspaper size={24} />,
        color: 'from-green-500 to-teal-500'
      },
      {
        name: t('navigation.about', 'About'),
        path: '/about',
        icon: <HiOutlineUser size={24} />,
        mobileIcon: <HiOutlineUser size={24} />,
        color: 'from-indigo-500 to-blue-500'
      },
      {
        name: t('navigation.contact', 'Contact'),
        path: '/contact',
        icon: <HiOutlineChat size={24} />,
        mobileIcon: <HiOutlineChat size={24} />,
        color: 'from-teal-500 to-cyan-500'
      },
    ]);
  }, [i18n.language, locale, t]); // Update when language changes

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsTop(scrollY < 10);
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

  const headerBackground = isTop
    ? 'bg-transparent'
    : 'bg-white/98 dark:bg-ternary-dark/98 backdrop-blur-xl shadow-2xl border-b border-gray-200/30 dark:border-gray-700/30';

  const isLinkActive = (path) => activeLink === path;

  return (
    <>
      <motion.header
        key={locale} // Use locale as key to force re-render
        className={`fixed w-full z-50 transition-all duration-500 ${headerBackground}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="block">
                <div className="cursor-pointer group">
                  {mounted ? (
                    <motion.div className="relative">
                      <div className="relative w-14 h-14 md:w-16 md:h-16">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-sm opacity-50" />
                        </div>
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-xl">
                          <Image
                            src={profilePic}
                            alt={t('navigation.home', 'Home')}
                            fill
                            sizes="(max-width: 768px) 56px, 64px"
                            className="object-cover"
                            priority
                          />
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
                  <Link key={link.name + index} href={link.path}>
                    <motion.div
                      whileHover={{ y: -3, scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setHoveredLink(link.path)}
                      onHoverEnd={() => setHoveredLink(null)}
                      onClick={() => setActiveLink(link.path)}
                      className={`px-5 py-3 text-base font-semibold flex items-center transition-all duration-500 rounded-xl group relative overflow-hidden ${isLinkActive(link.path)
                          ? `text-white bg-gradient-to-r ${link.color} shadow-lg`
                          : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-gray-700/80'
                        }`}
                    >
                      {(isLinkActive(link.path) || hoveredLink === link.path) && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-xl`}
                          layoutId="navBackground"
                          initial={false}
                        />
                      )}

                      <span className="relative z-10 mr-3">{link.icon}</span>
                      <span className="relative z-10 font-semibold tracking-wide">
                        {link.name}
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Right Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Theme Switcher */}
              {mounted ? (
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  aria-label={t('theme.switch', 'Switch theme')}
                  className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-500 shadow-lg border-2 border-gray-200/50 dark:border-gray-700/50"
                >
                  <motion.div
                    animate={{ rotate: currentTheme === 'dark' ? 0 : 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    {currentTheme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                  </motion.div>
                </motion.button>
              ) : (
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />
              )}

              {/* Hire Me Button */}
              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={showHireMeModal}
                className="hidden md:flex items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <HiOutlineSparkles size={18} className="relative z-10 mr-2 group-hover:rotate-180 transition-transform duration-700" />
                <span className="relative z-10 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent whitespace-nowrap">
                  {t('actions.hireMe', 'Hire Me')}
                </span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
                className="lg:hidden p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-500 shadow-lg border-2 border-gray-200/50 dark:border-gray-700/50"
              >
                {showMenu ? <FiX size={22} /> : <FiMenu size={22} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden fixed top-[80px] left-4 right-4 z-50"
            >
              <div className="bg-white dark:bg-ternary-dark rounded-3xl shadow-3xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-4 space-y-2">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.path}>
                      <motion.div
                        onClick={() => setShowMenu(false)}
                        className="flex items-center p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <span className="mr-3">{link.mobileIcon}</span>
                        <span>{link.name}</span>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
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