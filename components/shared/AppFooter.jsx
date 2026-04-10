// components/shared/AppFooter.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import {
    FiGithub,
    FiLinkedin,
    FiGlobe,
    FiMail,
    FiMessageCircle,
    FiArrowUp,
    FiHeart,
    FiMapPin,
    FiPhone,
    FiClock
} from 'react-icons/fi';
import { FaBehance, FaDribbble } from 'react-icons/fa';
import AppFooterCopyright from './AppFooterCopyright';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { useState, useEffect } from 'react';

const socialLinks = [
    {
        id: 1,
        icon: FiGlobe,
        url: '/',
        name: 'portfolio',
        color: 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30'
    },
    {
        id: 2,
        icon: FiGithub,
        url: 'https://github.com/OussamaMi01',
        name: 'github',
        color: 'text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white',
        bgColor: 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
    },
    {
        id: 3,
        icon: FaBehance,
        url: 'https://www.behance.net/missaououssama',
        name: 'behance',
        color: 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30'
    },
    {
        id: 4,
        icon: FiLinkedin,
        url: 'https://www.linkedin.com/in/oussama-missaoui-a48589246/',
        name: 'linkedin',
        color: 'text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30'
    },
    {
        id: 5,
        icon: FiMail,
        url: 'mailto:oussama.missaoui.it@gmail.com',
        name: 'email',
        color: 'text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300',
        bgColor: 'bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30'
    }
];

const quickLinks = [
    { name: 'home', path: '/' },
    { name: 'projects', path: '/projects' },
    { name: 'experience', path: '/experience' },
    { name: 'services', path: '/services' },
    { name: 'blog', path: '/blog' },
    { name: 'about', path: '/about' },
    { name: 'contact', path: '/contact' }
];

function AppFooter() {
    const { t } = useTranslation('common');
    const [activeTheme] = useThemeSwitcher();
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // Scroll to top functionality
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Show/hide scroll to top button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Stagger animation for social links
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative bg-white dark:bg-ternary-dark  shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Main Footer Container */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    className="bg-white dark:bg-ternary-dark rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                    {/* Footer Content */}
                    <div className="p-8">
                        {/* Footer Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            
                            {/* About Section */}
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-4">
                                    Oussama Missaoui
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {t('footer.about', 'Full-Stack Developer & Digital Creator passionate about building innovative solutions and creative digital experiences.')}
                                </p>
                            </div>

                            {/* Quick Links */}
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-4">
                                    {t('footer.quickLinks', 'Quick Links')}
                                </h3>
                                <ul className="space-y-2">
                                    {quickLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.path}
                                                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 text-sm"
                                            >
                                                {t(`navigation.${link.name}`, link.name)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Info */}
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-4">
                                    {t('footer.contactInfo', 'Contact Info')}
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center justify-center md:justify-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                                        <FiMapPin className="text-indigo-500 flex-shrink-0" />
                                        <span>Sfax, Tunisia</span>
                                    </li>
                                    <li className="flex items-center justify-center md:justify-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                                        <FiMail className="text-indigo-500 flex-shrink-0" />
                                        <a href="mailto:oussama.missaoui.it@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                            oussama.missaoui.it@gmail.com
                                        </a>
                                    </li>
                                    <li className="flex items-center justify-center md:justify-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                                        <FiPhone className="text-indigo-500 flex-shrink-0" />
                                        <a href="tel:+21623257784" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                            +216 23 257 784
                                        </a>
                                    </li>
                                    <li className="flex items-center justify-center md:justify-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                                        <FiClock className="text-indigo-500 flex-shrink-0" />
                                        <span>Mon-Fri: 9am-6pm (GMT+1)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Social Links */}
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-4">
                                    {t('footer.followMe', 'Follow Me')}
                                </h3>
                                <div className="flex justify-center md:justify-start gap-3">
                                    {socialLinks.map((link) => {
                                        const Icon = link.icon;
                                        return (
                                            <motion.a
                                                key={link.id}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ y: -3, scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`p-2 rounded-xl transition-all duration-300 ${link.bgColor} ${link.color}`}
                                                aria-label={t(`social.${link.name}`, link.name)}
                                            >
                                                <Icon className="text-xl" />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                                
                                {/* Tech Stack Badge */}
                                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {t('footer.builtWith', 'Built with')}{' '}
                                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                                            Next.js
                                        </span>{' '}
                                        &{' '}
                                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                                            Tailwind CSS
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                            <AppFooterCopyright />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 z-50
                                   p-3 bg-gradient-to-r from-indigo-500 to-purple-600 
                                   text-white rounded-full shadow-2xl 
                                   hover:shadow-3xl transition-all duration-300
                                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={t('actions.backToTop', 'Scroll to top')}
                    >
                        <FiArrowUp className="text-xl" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-100/30 dark:bg-indigo-900/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-32 -right-24 w-48 h-48 bg-purple-100/30 dark:bg-purple-900/20 rounded-full blur-2xl" />
            </div>
        </motion.footer>
    );
}

export default AppFooter;