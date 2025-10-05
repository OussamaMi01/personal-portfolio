import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceData as initialExperienceData } from '../../data/experienceData';
import {
    FiCode, FiDatabase, FiLayers, FiLayout, FiGlobe, FiZap,
    FiServer, FiMonitor, FiTrendingUp, FiMessageSquare,
    FiTarget, FiAward, FiPieChart, FiCompass, FiAperture,
    FiFeather, FiVideo, FiUsers, FiCreditCard, FiDollarSign,
    FiBookOpen, FiSlack, FiPenTool, FiBriefcase, FiMapPin, FiCalendar,
    FiArrowRight, FiChevronDown, FiChevronUp, FiCheck, FiStar,
    FiLayers as FiLayersIcon
} from 'react-icons/fi';
import Link from 'next/link';


// Dynamic technology icons mapping with better organization
const getTechnologyIcon = (tech) => {
    const technologyIcons = {
        // Programming Languages
        'JavaScript': { icon: FiCode, color: 'text-yellow-500' },
        'TypeScript': { icon: FiCode, color: 'text-blue-600' },
        'Python': { icon: FiCode, color: 'text-blue-500' },
        'Java': { icon: FiCode, color: 'text-red-500' },

        // Frontend
        'React': { icon: FiLayers, color: 'text-cyan-400' },
        'Next.js': { icon: FiGlobe, color: 'text-gray-800 dark:text-white' },
        'Angular': { icon: FiLayers, color: 'text-red-500' },
        'Vue.js': { icon: FiLayers, color: 'text-green-500' },

        // Backend
        'Node.js': { icon: FiServer, color: 'text-green-500' },
        'Express.js': { icon: FiServer, color: 'text-gray-500' },
        'Django': { icon: FiServer, color: 'text-green-600' },

        // Databases
        'MongoDB': { icon: FiDatabase, color: 'text-green-600' },
        'PostgreSQL': { icon: FiDatabase, color: 'text-blue-700' },
        'MySQL': { icon: FiDatabase, color: 'text-orange-500' },

        // AI/ML
        'AI Algorithms': { icon: FiZap, color: 'text-purple-500' },
        'Machine Learning': { icon: FiZap, color: 'text-purple-600' },

        // Payment & E-commerce
        'Payment Gateways': { icon: FiDollarSign, color: 'text-green-500' },
        'Stripe API': { icon: FiCreditCard, color: 'text-indigo-600' },

        // APIs & Services
        'REST APIs': { icon: FiGlobe, color: 'text-teal-500' },
        'GraphQL': { icon: FiGlobe, color: 'text-pink-500' },

        // Design & UI/UX
        'Responsive Design': { icon: FiMonitor, color: 'text-indigo-500' },
        'UI/UX Design': { icon: FiLayout, color: 'text-pink-600' },
        'Adobe Photoshop': { icon: FiAperture, color: 'text-blue-700' },
        'Illustrator': { icon: FiFeather, color: 'text-orange-600' },

        // Marketing
        'Digital Marketing': { icon: FiTrendingUp, color: 'text-orange-500' },
        'Social Media': { icon: FiMessageSquare, color: 'text-blue-400' },
        'Content Strategy': { icon: FiBookOpen, color: 'text-pink-500' },
        'Brand Management': { icon: FiAward, color: 'text-purple-600' },

        // Analytics
        'Analytics': { icon: FiPieChart, color: 'text-red-400' },
        'Audience Analytics': { icon: FiPieChart, color: 'text-orange-400' },

        // Video & Media
        'Video Production': { icon: FiVideo, color: 'text-red-600' },
        'Adobe Premiere': { icon: FiVideo, color: 'text-purple-700' },
        'Motion Graphics': { icon: FiZap, color: 'text-cyan-500' },

        // Methodologies
        'Scrum': { icon: FiUsers, color: 'text-blue-700' },
        'Agile': { icon: FiTarget, color: 'text-green-600' },

        // Default
        'default': { icon: FiCode, color: 'text-gray-500' }
    };

    return technologyIcons[tech] || technologyIcons.default;
};

// Helper to convert icon string to component (similar to Service component)
const getIconComponentFromString = (iconString) => {
    const iconMap = {
        'FiCode': FiCode,
        'FiDatabase': FiDatabase,
        'FiLayers': FiLayers,
        'FiLayout': FiLayout,
        'FiGlobe': FiGlobe,
        'FiZap': FiZap,
        'FiServer': FiServer,
        'FiMonitor': FiMonitor,
        'FiTrendingUp': FiTrendingUp,
        'FiMessageSquare': FiMessageSquare,
        'FiTarget': FiTarget,
        'FiAward': FiAward,
        'FiPieChart': FiPieChart,
        'FiCompass': FiCompass,
        'FiAperture': FiAperture,
        'FiFeather': FiFeather,
        'FiVideo': FiVideo,
        'FiUsers': FiUsers,
        'FiCreditCard': FiCreditCard,
        'FiDollarSign': FiDollarSign,
        'FiBookOpen': FiBookOpen,
        'FiPenTool': FiPenTool,
        'FiBriefcase': FiBriefcase,
        'FiMapPin': FiMapPin,
        'FiCalendar': FiCalendar,
        'FiCheck': FiCheck,
        'FiStar': FiStar
    };
    return iconMap[iconString] || FiBriefcase;
};

const Experience = ({ currentRole }) => {
    const [expandedJobId, setExpandedJobId] = useState(null);
    const [filteredExperience, setFilteredExperience] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const [experience, setExperience] = useState([]);
    const initialVisibleDescriptions = 2;
    const initialVisibleTechnologies = 6;

    // Load experience data with localStorage persistence
    useEffect(() => {
        setIsClient(true);

        const loadExperience = () => {
            try {
                if (typeof window !== 'undefined') {
                    const savedExperience = localStorage.getItem('portfolio-experience');
                    if (savedExperience) {
                        const parsedExperience = JSON.parse(savedExperience);
                        // Convert icon strings back to components if needed
                        const experienceWithIcons = parsedExperience.map(exp => ({
                            ...exp,
                            // Add any icon conversion logic here if needed
                        }));
                        setExperience(experienceWithIcons);
                        return;
                    }
                }
                // Fallback to initial data
                setExperience(initialExperienceData);
            } catch (error) {
                console.error('Error loading experience:', error);
                setExperience(initialExperienceData);
            }
        };

        loadExperience();
    }, []);

    // Filter experience based on current role
    useEffect(() => {
        if (currentRole && currentRole !== 'all') {
            const filtered = experience.filter(item => item.role && item.role.includes(currentRole));
            setFilteredExperience(filtered);
        } else {
            setFilteredExperience(experience);
        }
    }, [currentRole, experience]);

    const toggleExpand = (id) => {
        setExpandedJobId(expandedJobId === id ? null : id);
    };

    // Helper function to get color class based on company or type
    const getColorClass = (job) => {
        if (job.colorClass) return job.colorClass;

        // Fallback color mapping based on job type or company
        const colorMap = {
            'Full-time': 'from-blue-500 to-cyan-500',
            'Part-time': 'from-green-500 to-emerald-500',
            'Contract': 'from-orange-500 to-red-500',
            'Freelance': 'from-purple-500 to-pink-500',
            'Internship': 'from-gray-500 to-gray-700'
        };

        return colorMap[job.type] || 'from-indigo-500 to-purple-500';
    };

    // Render descriptions with animation
    const renderDescriptions = (job, isCurrentlyExpanded) => {
        const descriptions = isCurrentlyExpanded ?
            job.description :
            job.description.slice(0, initialVisibleDescriptions);

        return descriptions.map((desc, idx) => (
            <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start space-x-3"
            >
                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0 mt-2"></div>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{desc}</span>
            </motion.li>
        ));
    };

    // Render technologies with expandable functionality
    const renderTechnologies = (job, isCurrentlyExpanded) => {
        if (!job.technologies || job.technologies.length === 0) return null;

        const technologies = isCurrentlyExpanded ?
            job.technologies :
            job.technologies.slice(0, initialVisibleTechnologies);

        return (
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                    <FiCode className="text-indigo-500" />
                    Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, idx) => {
                        const { icon: IconComponent, color } = getTechnologyIcon(tech);
                        return (
                            <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className={`flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:shadow-md transition-all duration-300 ${color}`}
                            >
                                <IconComponent className="w-4 h-4" />
                                {tech}
                            </motion.span>
                        );
                    })}
                </div>
                {job.technologies.length > initialVisibleTechnologies && (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleExpand(job.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-medium transition-all duration-300 mt-3"
                    >
                        {isCurrentlyExpanded ? 'Show Less Technologies' : `Show All ${job.technologies.length} Technologies`}
                        {isCurrentlyExpanded ? <FiChevronUp /> : <FiChevronDown />}
                    </motion.button>
                )}
            </div>
        );
    };

    return (
        <section className="container mx-auto px-4 py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-ternary-dark">
            {/* Header - Enhanced with better animations */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center mb-16"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6"
                >
                    <FiBriefcase className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Professional Journey</span>
                </motion.div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark dark:text-primary-light mb-4">
                    Work <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    My career progression showcasing technical expertise and professional growth across diverse roles and industries
                </p>
            </motion.div>

            {/* Experience Timeline */}
            <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500 z-0 rounded-full"></div>

                {filteredExperience.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16"
                    >
                        <div className="bg-white/80 dark:bg-ternary-dark/80 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50 p-12 rounded-3xl shadow-2xl inline-block max-w-md">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
                                <FiBriefcase className="text-3xl text-indigo-500 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                                No experience found
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                Try switching your professional role to discover relevant experience items.
                            </p>
                            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
                        </div>
                    </motion.div>
                ) : (
                    <div className="space-y-8 lg:space-y-16">
                        {filteredExperience.map((job, index) => {
                            const isCurrentlyExpanded = expandedJobId === job.id;
                            const shouldShowToggle = job.description.length > initialVisibleDescriptions ||
                                (job.technologies && job.technologies.length > initialVisibleTechnologies);
                            const isEvenIndex = index % 2 === 0;
                            const colorClass = getColorClass(job);

                            return (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.15,
                                        type: "spring",
                                        stiffness: 80
                                    }}
                                    className="relative group"
                                >
                                    {/* Desktop Layout */}
                                    <div className="hidden lg:flex w-full items-center justify-between">
                                        {/* Company Card - Left */}
                                        <div className={`w-2/5 ${isEvenIndex ? 'order-1' : 'order-3'}`}>
                                            <motion.div
                                                whileHover={{
                                                    scale: 1.05,
                                                    y: -5,
                                                    transition: { type: "spring", stiffness: 300 }
                                                }}
                                                className={`bg-white dark:bg-ternary-dark rounded-2xl shadow-xl hover:shadow-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 ${isEvenIndex ? 'mr-8' : 'ml-8'}`}
                                            >
                                                <div className="flex items-start space-x-4">
                                                    {job.image ? (
                                                        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                                                            <Image
                                                                src={job.image}
                                                                alt={`${job.company} Logo`}
                                                                fill
                                                                className="object-cover p-2"
                                                                sizes="64px"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                                            <span className="text-white text-xl font-bold">{job.company.charAt(0)}</span>
                                                        </div>
                                                    )}
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-2">
                                                            {job.company}
                                                        </h3>
                                                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm space-x-3">
                                                            <div className="flex items-center">
                                                                <FiMapPin className="w-4 h-4 mr-1" />
                                                                {job.location}
                                                            </div>
                                                            <div className="flex items-center">
                                                                <FiCalendar className="w-4 h-4 mr-1" />
                                                                {job.startDate} - {job.endDate}
                                                            </div>
                                                        </div>
                                                        <div className="mt-2">
                                                            <span className={`px-2 py-1 bg-gradient-to-r ${colorClass} bg-opacity-10 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium`}>
                                                                {job.type}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Timeline Dot */}
                                        <div className="w-1/5 flex justify-center order-2 z-10">
                                            <motion.div
                                                whileHover={{ scale: 1.3 }}
                                                className="relative"
                                            >
                                                <div className="w-6 h-6 bg-white dark:bg-gray-800 border-4 border-indigo-500 rounded-full shadow-lg transition-all duration-300 group-hover:border-purple-500 group-hover:shadow-purple-500/25"></div>
                                                <div className="absolute inset-0 w-6 h-6 bg-indigo-500 rounded-full animate-ping opacity-20"></div>
                                            </motion.div>
                                        </div>

                                        {/* Job Details - Right */}
                                        <div className={`w-2/5 ${isEvenIndex ? 'order-3 pl-8' : 'order-1 pr-8'}`}>
                                            <motion.div
                                                whileHover={{ y: -5 }}
                                                className="bg-gradient-to-br from-white to-gray-50 dark:from-ternary-dark dark:to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
                                            >
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-2">
                                                            {job.title}
                                                        </h3>
                                                        <div className="flex items-center space-x-2">
                                                            <span className={`px-3 py-1 bg-gradient-to-r ${colorClass} bg-opacity-10 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700`}>
                                                                {job.department || 'Professional'}
                                                            </span>
                                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                                                #{index + 1}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Job Description */}
                                                <div className="mb-4">
                                                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                                                        <FiCheck className="text-green-500" />
                                                        Key Responsibilities
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        <AnimatePresence>
                                                            {renderDescriptions(job, isCurrentlyExpanded)}
                                                        </AnimatePresence>
                                                    </ul>
                                                </div>

                                                {/* Achievements */}
                                                {job.achievements && job.achievements.length > 0 && (
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                                                            <FiAward className="text-yellow-500" />
                                                            Key Achievements
                                                        </h4>
                                                        <div className="space-y-2">
                                                            {(isCurrentlyExpanded ? job.achievements : job.achievements.slice(0, 2)).map((achievement, idx) => (
                                                                <motion.div
                                                                    key={idx}
                                                                    initial={{ opacity: 0, x: -20 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: idx * 0.1 }}
                                                                    className="flex items-start space-x-3"
                                                                >
                                                                    <FiStar className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                                                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</span>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Technologies */}
                                                {renderTechnologies(job, isCurrentlyExpanded)}

                                                {/* Expand/Collapse Button */}
                                                {shouldShowToggle && (
                                                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                        <motion.button
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() => toggleExpand(job.id)}
                                                            className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-lg font-medium transition-all duration-300"
                                                        >
                                                            {isCurrentlyExpanded ? 'Show Less' : 'Read More'}
                                                            {isCurrentlyExpanded ? <FiChevronUp /> : <FiChevronDown />}
                                                        </motion.button>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Mobile Layout - Enhanced */}
                                    <div className="lg:hidden">
                                        <motion.div
                                            whileHover={{ y: -3 }}
                                            className="bg-gradient-to-br from-white to-gray-50 dark:from-ternary-dark dark:to-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200/50 dark:border-gray-700/50"
                                        >
                                            {/* Header */}
                                            <div className="flex items-start space-x-4 mb-4">
                                                {job.image ? (
                                                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                                                        <Image
                                                            src={job.image}
                                                            alt={`${job.company} Logo`}
                                                            fill
                                                            className="object-cover p-2"
                                                            sizes="64px"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                                        <span className="text-white text-xl font-bold">{job.company.charAt(0)}</span>
                                                    </div>
                                                )}
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-1">
                                                        {job.company}
                                                    </h3>
                                                    <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                                                        {job.title}
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                        <div className="flex items-center">
                                                            <FiMapPin className="w-3 h-3 mr-1" />
                                                            {job.location}
                                                        </div>
                                                        <div className="flex items-center">
                                                            <FiCalendar className="w-3 h-3 mr-1" />
                                                            {job.startDate} - {job.endDate}
                                                        </div>
                                                    </div>
                                                    <span className={`px-2 py-1 bg-gradient-to-r ${colorClass} bg-opacity-10 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium`}>
                                                        {job.type}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="mb-4">
                                                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm flex items-center gap-2">
                                                    <FiCheck className="text-green-500" />
                                                    Responsibilities
                                                </h4>
                                                <ul className="space-y-2">
                                                    <AnimatePresence>
                                                        {(isCurrentlyExpanded ? job.description : job.description.slice(0, initialVisibleDescriptions)).map((desc, idx) => (
                                                            <motion.li
                                                                key={idx}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                className="flex items-start space-x-3"
                                                            >
                                                                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0 mt-2"></div>
                                                                <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{desc}</span>
                                                            </motion.li>
                                                        ))}
                                                    </AnimatePresence>
                                                </ul>
                                            </div>

                                            {/* Technologies for Mobile */}
                                            {job.technologies && job.technologies.length > 0 && (
                                                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm">Technologies:</h4>
                                                    <div className="flex flex-wrap gap-1">
                                                        {job.technologies.slice(0, 4).map((tech, idx) => {
                                                            const { icon: IconComponent } = getTechnologyIcon(tech);
                                                            return (
                                                                <span
                                                                    key={idx}
                                                                    className="flex items-center gap-1 px-2 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs"
                                                                >
                                                                    <IconComponent className="w-3 h-3" />
                                                                    {tech}
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Action Button */}
                                            {shouldShowToggle && (
                                                <motion.button
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => toggleExpand(job.id)}
                                                    className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-lg font-medium transition-all duration-300 w-full justify-center mt-4"
                                                >
                                                    {isCurrentlyExpanded ? 'Show Less' : 'Read More'}
                                                    {isCurrentlyExpanded ? <FiChevronUp /> : <FiChevronDown />}
                                                </motion.button>
                                            )}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Final CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-16 text-center"
            >
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-ternary-dark rounded-2xl p-8 border border-indigo-100 dark:border-gray-700">
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-primary-light mb-4">
                        Want to Work Together?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                        Let&apos;s discuss how my experience and skills can contribute to your team&apos;s success.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" passHref legacyBehavior>
                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg text-center"
                            >
                                Get In Touch
                            </motion.a>
                        </Link>
                        <Link href="/resume" passHref legacyBehavior>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-2xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 font-semibold text-lg text-center"
                            >
                                Download Resume
                            </motion.a>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;