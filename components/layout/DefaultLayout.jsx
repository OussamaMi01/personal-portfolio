// DefaultLayout.jsx
import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import PagesMetaHead from '../PagesMetaHead';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiMenu, FiX } from 'react-icons/fi';

const DefaultLayout = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll events for progress and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 400);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Escape key closes mobile menu
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      // Home key scrolls to top
      if (e.key === 'Home') {
        e.preventDefault();
        scrollToTop();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <>
      <PagesMetaHead />
      
      {/* Progress Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 z-[60] transform-origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <AppHeader />
      </div>

      {/* Main Content Area */}
      <motion.main
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen pt-28 lg:pt-32 bg-white dark:bg-ternary-dark"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-900/50 dark:to-ternary-dark/50 pointer-events-none" />
        
        {/* Content Container */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </div>
      </motion.main>

      {/* Footer */}
      <AppFooter />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp className="text-xl group-hover:-translate-y-0.5 transition-transform duration-300" />
            
            {/* Progress Circle */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="48"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                className="text-white/20"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="48"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                className="text-white/60"
                initial={{ strokeDasharray: '301.59', strokeDashoffset: '301.59' }}
                animate={{ strokeDashoffset: 301.59 - (scrollProgress / 100) * 301.59 }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay (for additional mobile features) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-ternary-dark shadow-2xl z-50 lg:hidden p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-semibold text-primary-dark dark:text-primary-light">
                  Quick Navigation
                </h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <FiX className="text-xl" />
                </button>
              </div>
              
              {/* Additional mobile navigation can go here */}
              <nav className="space-y-4">
                <button
                  onClick={scrollToTop}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  Back to Top
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Skip to Main Content Link (Accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform focus:scale-105"
      >
        Skip to main content
      </a>

      {/* Add main content ID for skip link */}
      <div id="main-content" className="sr-only">Main Content</div>

      {/* Print Styles (Optional) */}
      <style jsx global>{`
        @media print {
          .fixed {
            position: static !important;
          }
          main {
            padding-top: 0 !important;
          }
        }
      `}</style>
    </>
  );
};

// Add display name for better debugging
DefaultLayout.displayName = 'DefaultLayout';

export default DefaultLayout;