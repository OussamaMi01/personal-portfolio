// components/shared/LanguageSwitcher.jsx - Simple version
import { useState, useEffect } from 'react';
import { FiGlobe, FiCheck } from 'react-icons/fi';

const languages = [
    { code: 'en', name: 'English', flagEmoji: '🇺🇸' },
    { code: 'fr', name: 'Français', flagEmoji: '🇫🇷' },
];

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('en');

    useEffect(() => {
        // Get current language from URL
        const path = window.location.pathname;
        const firstSegment = path.split('/')[1];
        if (firstSegment === 'en' || firstSegment === 'fr') {
            setCurrentLang(firstSegment);
        } else {
            setCurrentLang('en');
        }
    }, []);

    const handleLanguageChange = (langCode) => {
        if (langCode === currentLang) {
            setIsOpen(false);
            return;
        }

        // Save to localStorage
        localStorage.setItem('preferred-language', langCode);

        // Get current path without language prefix
        let currentPath = window.location.pathname;
        // Remove existing language prefix if present
        if (currentPath.startsWith('/en/') || currentPath.startsWith('/fr/')) {
            currentPath = currentPath.substring(3) || '/';
        } else if (currentPath === '/en' || currentPath === '/fr') {
            currentPath = '/';
        }

        // Build new URL with new language
        const newPath = langCode === 'en' ? currentPath : `/${langCode}${currentPath}`;
        
        // Navigate to new URL (this will trigger a full page load but works reliably)
        window.location.href = newPath;
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-500 shadow-lg border-2 border-gray-200/50 dark:border-gray-700/50"
            >
                <FiGlobe className="text-xl" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-gray-800">
                    {currentLang.toUpperCase()}
                </div>
            </button>

            {isOpen && (
                <>
                    <div 
                        className="fixed inset-0 z-40" 
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                Choose language
                            </h3>
                        </div>
                        <div className="p-2">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                                        currentLang === lang.code
                                            ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">{lang.flagEmoji}</span>
                                        <span className="font-medium">{lang.name}</span>
                                    </div>
                                    {currentLang === lang.code && (
                                        <FiCheck className="w-4 h-4" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default LanguageSwitcher;