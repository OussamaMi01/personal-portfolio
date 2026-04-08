// components/contact/ContactDetails.jsx
import { motion } from 'framer-motion';
import {
    FiPhone,
    FiMapPin,
    FiMail,
    FiClock,
    FiMessageSquare,
    FiLinkedin,
    FiGithub,
    FiStar,
    FiZap,
    FiAward
} from 'react-icons/fi';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';
import useContactTranslations from '../../hooks/useContactTranslations';

const ContactDetails = () => {
    const {
        t,
        badge,
        sectionTitle,
        sectionTitleHighlight,
        sectionDescription,
        quickResponseTitle,
        quickResponseDescription,
        getContactCards,
        getSocialPlatforms,
        socialTitle,
        socialSubtitle,
        trustTitle,
        trustDescription
    } =useContactTranslations();

    const contacts = getContactCards();
    const socialPlatforms = getSocialPlatforms();

    // Map icon strings to actual components
    const getIconComponent = (iconName) => {
        const icons = {
            FiMapPin: <FiMapPin className="text-2xl" />,
            FiMail: <FiMail className="text-2xl" />,
            FiPhone: <FiPhone className="text-2xl" />,
            FiClock: <FiClock className="text-2xl" />,
            FiLinkedin: <FiLinkedin className="text-xl" />,
            FiGithub: <FiGithub className="text-xl" />,
            FaWhatsapp: <FaWhatsapp className="text-xl" />,
            FaTelegram: <FaTelegram className="text-xl" />
        };
        return icons[iconName] || icons.FiMapPin;
    };

    // Helper function to truncate email if needed
    const formatEmailContent = (contact) => {
        if (contact.title === t('contactCards.email') && contact.content.length > 30) {
            return {
                full: contact.content,
                truncated: `${contact.content.substring(0, 24)}...`
            };
        }
        return { full: contact.content, truncated: contact.content };
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2"
        >
            <div className="text-left max-w-xl px-4 lg:px-6">
                {/* Enhanced Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6"
                    >
                        <FiMessageSquare className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{badge}</span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark dark:text-primary-light mb-6">
                        {sectionTitle} <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{sectionTitleHighlight}</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        {sectionDescription}
                    </p>

                    {/* Enhanced Quick Response Card */}
                    <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-ternary-dark rounded-2xl p-6 border-2 border-indigo-100 dark:border-indigo-800 shadow-lg hover:shadow-xl transition-all duration-500"
                    >
                        <div className="flex items-start gap-4">
                            <motion.div
                                whileHover={{ rotate: 12, scale: 1.1 }}
                                className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                            >
                                <FiZap className="text-xl" />
                            </motion.div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light mb-2">
                                    {quickResponseTitle}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: quickResponseDescription }} />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Enhanced Contact Cards Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
                >
                    {contacts.map((contact, index) => {
                        const emailInfo = formatEmailContent(contact);
                        const IconComponent = getIconComponent(contact.icon);
                        const CardWrapper = contact.href ? motion.a : motion.div;
                        
                        return (
                            <CardWrapper
                                key={contact.id}
                                href={contact.href}
                                target={contact.href?.startsWith('http') ? '_blank' : undefined}
                                rel={contact.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                whileHover={{ 
                                    y: -8, 
                                    scale: 1.03,
                                    transition: { type: "spring", stiffness: 400 }
                                }}
                                className={`group relative bg-gradient-to-br from-white to-gray-50 dark:from-ternary-dark dark:to-gray-800 rounded-2xl p-6 border-2 border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                                    contact.href ? 'cursor-pointer' : ''
                                }`}
                            >
                                {/* Background Gradient Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                                
                                {/* Icon Container */}
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-white shadow-lg mb-4 flex-shrink-0`}
                                >
                                    {IconComponent}
                                </motion.div>
                                
                                {/* Content */}
                                <div className="flex flex-col h-full">
                                    <h3 className="text-lg font-semibold text-primary-dark dark:text-primary-light mb-2">
                                        {contact.title}
                                    </h3>
                                    
                                    {/* Email Card - Flexible Container */}
                                    {contact.title === t('contactCards.email') ? (
                                        <div className="flex flex-col gap-2">
                                            <div className="hidden sm:block">
                                                <p className="text-gray-700 dark:text-gray-300 font-medium break-all hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                                    {emailInfo.full}
                                                </p>
                                            </div>
                                            <div className="sm:hidden">
                                                <p className="text-gray-700 dark:text-gray-300 font-medium break-all hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                                    {emailInfo.truncated}
                                                </p>
                                            </div>
                                            
                                            {contact.href && (
                                                <div className="mt-2 inline-flex items-center gap-2">
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                                        {t('contactCards.clickToEmail')}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <p className="text-gray-700 dark:text-gray-300 font-medium break-words">
                                            {contact.content}
                                        </p>
                                    )}
                                </div>

                                {/* Hover Border Effect */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-200 dark:group-hover:border-indigo-800 transition-all duration-500 pointer-events-none" />
                                
                                {/* Click Indicator for Interactive Cards */}
                                {contact.href && (
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center">
                                            {IconComponent}
                                        </div>
                                    </div>
                                )}
                            </CardWrapper>
                        );
                    })}
                </motion.div>

                {/* Enhanced Social Connections */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                        <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light">
                            {socialTitle}
                        </h3>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                        {socialSubtitle}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        {socialPlatforms.map((platform, idx) => {
                            const IconComponent = getIconComponent(platform.icon);
                            return (
                                <motion.a
                                    key={idx}
                                    whileHover={{ 
                                        scale: 1.1, 
                                        y: -5,
                                        transition: { type: "spring", stiffness: 400 }
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative p-4 rounded-2xl bg-gradient-to-r ${platform.color} text-white shadow-lg hover:shadow-2xl transition-all duration-500`}
                                    aria-label={platform.name}
                                >
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                    
                                    {IconComponent}
                                    
                                    {/* Tooltip */}
                                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                        {platform.name}
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="mt-12 p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border-2 border-amber-200 dark:border-amber-800"
                >
                    <div className="flex items-center gap-4">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                        >
                            <FiAward className="text-xl" />
                        </motion.div>
                        <div>
                            <h4 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-1">
                                {trustTitle}
                            </h4>
                            <p className="text-amber-700 dark:text-amber-400 text-sm">
                                {trustDescription}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactDetails;