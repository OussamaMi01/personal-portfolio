import { motion, AnimatePresence } from 'framer-motion';
import {
    FiGithub,
    FiLinkedin,
    FiGlobe,
    FiMail,
    FiMessageCircle,
    FiArrowUp,
    FiHeart
} from 'react-icons/fi';
import { FaBehance, FaDribbble } from 'react-icons/fa';
import AppFooterCopyright from './AppFooterCopyright';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { useState, useEffect } from 'react';

const socialLinks = [
    {
        id: 1,
        icon: FiGlobe,
        url: '#',
        name: 'Portfolio',
        color: 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30'
    },
    {
        id: 2,
        icon: FiGithub,
        url: 'https://github.com/OussamaMi01',
        name: 'GitHub',
        color: 'text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white',
        bgColor: 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
    },
    {
        id: 3,
        icon: FaBehance,
        url: 'https://www.behance.net/missaououssama',
        name: 'Behance',
        color: 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30'
    },
    {
        id: 4,
        icon: FiLinkedin,
        url: 'https://www.linkedin.com/in/oussama-missaoui-a48589246/',
        name: 'LinkedIn',
        color: 'text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30'
    },
    {
        id: 5,
        icon: FiMail,
        url: 'mailto:oussama@example.com',
        name: 'Email',
        color: 'text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300',
        bgColor: 'bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30'
    }
];

function AppFooter() {
    const [activeTheme] = useThemeSwitcher();
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

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
            className="relative mt-20 sm:mt-24"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/50 pointer-events-none" />
            
            {/* Main Footer Content */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    className="pt-16 sm:pt-20 pb-8 rounded-t-3xl 
                               bg-white/80 dark:bg-ternary-dark/80 
                               backdrop-blur-sm border-t border-l border-r 
                               border-gray-200/50 dark:border-gray-700/50
                               shadow-2xl"
                >
                    {/* Connect Section */}
                    <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-16">
                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-center mb-8"
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4">
                                Let&apos;s Connect
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                                Feel free to reach out for collaborations or just a friendly hello
                            </p>
                        </motion.div>

                        {/* Social Links */}
                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8"
                        >
                            {socialLinks.map((link, index) => (
                                <motion.li
                                    key={link.id}
                                    variants={itemVariants}
                                    className="relative"
                                >
                                    <motion.a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                            cursor-pointer rounded-2xl shadow-lg 
                                            p-4 duration-300 flex items-center justify-center
                                            transform transition-all duration-300
                                            hover:scale-110 hover:shadow-xl
                                            ${link.bgColor} ${link.color}
                                            border border-gray-200/50 dark:border-gray-600/50
                                        `}
                                        whileHover={{ 
                                            y: -5,
                                            transition: { type: "spring", stiffness: 400 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        onHoverStart={() => setHoveredLink(link.id)}
                                        onHoverEnd={() => setHoveredLink(null)}
                                    >
                                        <link.icon className="text-2xl sm:text-3xl" />
                                        
                                        {/* Tooltip */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ 
                                                opacity: hoveredLink === link.id ? 1 : 0,
                                                y: hoveredLink === link.id ? 0 : 10
                                            }}
                                            className="absolute -top-12 left-1/2 transform -translate-x-1/2 
                                                       bg-gray-900 dark:bg-gray-700 text-white text-sm 
                                                       px-3 py-1 rounded-lg whitespace-nowrap"
                                        >
                                            {link.name}
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900 dark:bg-gray-700" />
                                        </motion.div>
                                    </motion.a>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Call to Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-center"
                        >
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Ready to start your next project?
                            </p>
                            <motion.a
                                href="mailto:oussama@example.com"
                                className="inline-flex items-center gap-2 px-6 py-3 
                                           bg-gradient-to-r from-indigo-500 to-purple-600 
                                           text-white rounded-xl shadow-lg 
                                           hover:shadow-xl transition-all duration-300
                                           font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiMessageCircle className="text-lg" />
                                Get In Touch
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Copyright */}
                    <AppFooterCopyright />
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
                        aria-label="Scroll to top"
                    >
                        <FiArrowUp className="text-xl" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 blur-xl" />
                <div className="absolute -bottom-32 -right-24 w-48 h-48 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-xl" />
            </div>
        </motion.footer>
    );
}

export default AppFooter;