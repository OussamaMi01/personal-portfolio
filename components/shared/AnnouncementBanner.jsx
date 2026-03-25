// components/shared/AnnouncementBanner.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGlobe, FiX } from 'react-icons/fi';

const AnnouncementBanner = ({ language = 'en', onDismiss }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if user has dismissed this banner before
  useEffect(() => {
    const dismissed = localStorage.getItem('update-banner-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      setIsVisible(false);
      onDismiss?.();
    }
  }, [onDismiss]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('update-banner-dismissed', 'true');
    onDismiss?.();
  };

  const translations = {
    en: {
      title: "Multi-Language Support Coming Soon!",
      description: "French & English translations are on the way. Switch languages easily with the new selector in the header.",
      cta: "Learn more",
      dismiss: "Dismiss"
    },
    fr: {
      title: "Support multilingue bientôt disponible !",
      description: "Les traductions françaises et anglaises arrivent bientôt. Changez de langue facilement avec le nouveau sélecteur dans l'en-tête.",
      cta: "En savoir plus",
      dismiss: "Ignorer"
    }
  };

  const t = translations[language] || translations.en;

  if (!isVisible || isDismissed) return null;

  return (
    <div className="bg-indigo-50 dark:bg-indigo-950/50 border-b border-indigo-200 dark:border-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex-shrink-0">
              <FiGlobe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            
            <div className="flex-1">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-indigo-700 dark:text-indigo-400">
                  {t.title}
                </span>
                {' '}
                <span className="text-gray-600 dark:text-gray-400">
                  {t.description}
                </span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => window.open('/blog/multilingual-update', '_blank')}
              className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors whitespace-nowrap"
            >
              {t.cta} →
            </button>
            
            <button
              onClick={handleDismiss}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Dismiss"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;