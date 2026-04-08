// components/shared/LanguageSwitcher.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGlobe, FiCheck } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const languages = [
    { code: 'en', name: 'English',  flagEmoji: '🇺🇸' },
    { code: 'fr', name: 'Français', flagEmoji: '🇫🇷' },
];

const LanguageSwitcher = () => {
    const router = useRouter();
    const { t } = useTranslation('common');
    const [isOpen, setIsOpen]   = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    const currentLang = router.locale || 'en';

    const handleLanguageChange = (langCode) => {
        if (langCode === currentLang) {
            setIsOpen(false);
            return;
        }

        // ✅ Use Next.js router — preserves the current path, triggers
        //    getStaticProps/getServerSideProps with the new locale, and
        //    loads the correct translation namespaces automatically.
        router.push(router.asPath, router.asPath, { locale: langCode, scroll: false });
        setIsOpen(false);
    };

    // Close dropdown on outside click (keyboard too)
    useEffect(() => {
        if (!isOpen) return;
        const close = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    }, [isOpen]);

    if (!mounted) {
        return (
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />
        );
    }

    return (
        <div className="relative">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Switch language"
                aria-expanded={isOpen}
                className="relative p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-500 shadow-lg border-2 border-gray-200/50 dark:border-gray-700/50"
            >
                <FiGlobe className="text-xl" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-gray-800">
                    {currentLang.toUpperCase()}
                </div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop — closes on click anywhere outside */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0,   scale: 1    }}
                            exit={{    opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className="absolute right-0 mt-2 w-48 bg-white dark:bg-ternary-dark rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                        >
                            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    {t('language.choose', 'Choose language')}
                                </h3>
                            </div>

                            <div className="p-2">
                                {languages.map((lang) => (
                                    <motion.button
                                        key={lang.code}
                                        whileHover={{ x: 4 }}
                                        onClick={() => handleLanguageChange(lang.code)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                                            currentLang === lang.code
                                                ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl">{lang.flagEmoji}</span>
                                            <span className="font-medium">{lang.name}</span>
                                        </div>
                                        {currentLang === lang.code && (
                                            <FiCheck className="w-4 h-4" />
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSwitcher;