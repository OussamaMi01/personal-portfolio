// components/shared/AppHeader.jsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi';
import {
  HiOutlineHome, HiOutlineCode, HiOutlineAcademicCap,
  HiOutlineLightningBolt, HiOutlineUser, HiOutlineChat,
  HiOutlineSparkles, HiOutlineNewspaper
} from 'react-icons/hi';
import HireMeModal from '../HireMeModal';
import CustomAlert from './CustomAlert';
import profilePic from '../../public/images/profile.jpg';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';

function AppHeader() {
  const router = useRouter();
  const { t } = useTranslation('common');

  const [showMenu, setShowMenu]   = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isTop, setIsTop]         = useState(true);
  const [showAlert, setShowAlert] = useState(null);
  const [currentTheme, toggleTheme] = useThemeSwitcher();
  const [mounted, setMounted]     = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  // ✅ activeLink is always in sync — derived from router, not stored in state
  const activeLink = router.pathname;

  // ✅ navLinks built inline from t() — rebuilds automatically when locale changes
  //    No useEffect + useState needed; t() is reactive to i18n.language
  const navLinks = [
    { name: t('navigation.home',       'Home'),       path: '/',           icon: <HiOutlineHome size={24} />,          color: 'from-blue-500 to-cyan-500'    },
    { name: t('navigation.projects',   'Projects'),   path: '/projects',   icon: <HiOutlineCode size={24} />,          color: 'from-green-500 to-emerald-500' },
    { name: t('navigation.experience', 'Experience'), path: '/experience', icon: <HiOutlineAcademicCap size={24} />,   color: 'from-purple-500 to-pink-500'  },
    { name: t('navigation.services',   'Services'),   path: '/services',   icon: <HiOutlineLightningBolt size={24} />, color: 'from-orange-500 to-amber-500'  },
    { name: t('navigation.blog',       'Blog'),       path: '/blog',       icon: <HiOutlineNewspaper size={24} />,     color: 'from-green-500 to-teal-500'   },
    { name: t('navigation.about',      'About'),      path: '/about',      icon: <HiOutlineUser size={24} />,          color: 'from-indigo-500 to-blue-500'  },
    { name: t('navigation.contact',    'Contact'),    path: '/contact',    icon: <HiOutlineChat size={24} />,          color: 'from-teal-500 to-cyan-500'    },
  ];

  useEffect(() => { setMounted(true); }, []);

  // Scroll watcher
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { setIsTop(window.scrollY < 10); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [showMenu]);

  // ✅ Close mobile menu automatically on any route change (incl. locale switch)
  useEffect(() => {
    setShowMenu(false);
  }, [router.asPath]);

  function showHireMeModal() {
    const next = !showModal;
    document.documentElement.classList.toggle('overflow-y-hidden', next);
    setShowModal(next);
  }

  const headerBg = isTop
    ? 'bg-transparent'
    : 'bg-white/98 dark:bg-ternary-dark/98 backdrop-blur-xl shadow-2xl border-b border-gray-200/30 dark:border-gray-700/30';

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-500 ${headerBg}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">

            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-shrink-0">
              {/* ✅ <Link> — instant client-side navigation, no reload */}
              <Link href="/" className="block cursor-pointer">
                {mounted ? (
                  <div className="relative w-14 h-14 md:w-16 md:h-16">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-sm opacity-50" />
                    </div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-xl">
                      <Image src={profilePic} alt="Home" fill sizes="(max-width: 768px) 56px, 64px" className="object-cover" priority />
                    </div>
                    <motion.div
                      className="absolute bottom-1 right-1 w-3 h-3 md:w-3.5 md:h-3.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white dark:border-gray-800 shadow-lg"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />
                )}
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center justify-center flex-1 max-w-3xl">
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl px-4 py-3 border-2 border-gray-100/60 dark:border-gray-700/60 shadow-2xl">
                {navLinks.map((link, i) => {
                  const isActive = activeLink === link.path;
                  return (
                    // ✅ Pure <Link> — Next.js handles prefetching + client-side nav
                    //    No onClick state mutation, no manual navigation
                    <Link key={i} href={link.path}>
                      <motion.div
                        whileHover={{ y: -3, scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => setHoveredLink(link.path)}
                        onHoverEnd={() => setHoveredLink(null)}
                        className={`px-5 py-3 text-base font-semibold flex items-center transition-all duration-300 rounded-xl relative overflow-hidden ${
                          isActive
                            ? `text-white bg-gradient-to-r ${link.color} shadow-lg`
                            : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        {/* Subtle hover glow for inactive links */}
                        {!isActive && hoveredLink === link.path && (
                          <motion.div
                            layoutId="navHover"
                            className="absolute inset-0 bg-white/80 dark:bg-gray-700/80 rounded-xl"
                            initial={false}
                          />
                        )}
                        <span className="relative z-10 mr-3">{link.icon}</span>
                        <span className="relative z-10 font-semibold tracking-wide">{link.name}</span>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Right controls */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <LanguageSwitcher />

              {mounted ? (
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  aria-label={t('theme.switch', 'Switch theme')}
                  className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-500 shadow-lg border-2 border-gray-200/50 dark:border-gray-700/50"
                >
                  <motion.div animate={{ rotate: currentTheme === 'dark' ? 0 : 180 }} transition={{ duration: 0.5 }}>
                    {currentTheme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                  </motion.div>
                </motion.button>
              ) : (
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />
              )}

              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={showHireMeModal}
                className="hidden md:flex items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <HiOutlineSparkles size={18} className="relative z-10 mr-2 group-hover:rotate-180 transition-transform duration-700" />
                <span className="relative z-10 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent whitespace-nowrap">
                  {t('actions.hireMe', 'Hire Me')}
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowMenu(v => !v)}
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
                  {navLinks.map((link, i) => {
                    const isActive = activeLink === link.path;
                    return (
                      // ✅ <Link> handles navigation — menu closes via router.asPath useEffect
                      <Link key={i} href={link.path}>
                        <motion.div
                          whileTap={{ scale: 0.97 }}
                          className={`flex items-center p-3 rounded-xl transition-colors duration-200 ${
                            isActive
                              ? `bg-gradient-to-r ${link.color} text-white`
                              : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          <span className="mr-3">{link.icon}</span>
                          <span className="font-medium">{link.name}</span>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100]">
            <HireMeModal
              onClose={showHireMeModal}
              onRequest={showHireMeModal}
              onSubmissionComplete={(alert) => setShowAlert(alert)}
            />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAlert && (
          <CustomAlert
            message={showAlert.message}
            type={showAlert.type}
            onClose={() => setShowAlert(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default AppHeader;