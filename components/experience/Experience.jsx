// components/experience/Experience.jsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useExperienceData } from '../../hooks/useExperienceData';
import {
    FiCode, FiDatabase, FiLayers, FiLayout, FiGlobe, FiZap,
    FiServer, FiMonitor, FiTrendingUp, FiMessageSquare,
    FiTarget, FiAward, FiPieChart, FiAperture,
    FiFeather, FiVideo, FiUsers, FiCreditCard, FiDollarSign,
    FiBookOpen, FiBriefcase, FiMapPin, FiCalendar,
    FiChevronDown, FiChevronUp, FiCheck, FiStar,FiCloud
} from 'react-icons/fi';
import {
    FaJava, FaPython, FaJs, FaAngular, FaNodeJs, FaReact,
    FaGitAlt, FaFigma, FaWordpress, FaShopify,
    FaAndroid, FaLinux, FaNpm,
} from 'react-icons/fa';
import {
    SiExpress, SiMongodb, SiMysql, SiPostgresql, SiSpring,
    SiTailwindcss, SiNextdotjs, SiTypescript, SiScikitlearn,
    SiPytorch, SiTensorflow, SiDocker, SiKubernetes, SiFirebase,
    SiTableau, SiCanva, SiAdobexd, SiGoogleads, SiHubspot,
    SiGithub, SiGitlab, SiKotlin, SiTerraform, SiJenkins,
    SiSemrush,
} from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import Link from 'next/link';

// ─── Unified tech icon map (same as Service component) ───────────────────────
const techIconMap = {
    // Programming Languages
    'Java':             { Icon: FaJava,       color: 'text-red-600' },
    'Python':           { Icon: FaPython,     color: 'text-blue-600' },
    'JavaScript':       { Icon: FaJs,         color: 'text-yellow-500' },
    'TypeScript':       { Icon: SiTypescript, color: 'text-blue-700' },
    'Kotlin':           { Icon: SiKotlin,     color: 'text-purple-600' },
    'R':                { Icon: FiCode,       color: 'text-blue-500' },
    'SQL':              { Icon: FiCode,       color: 'text-orange-500' },
    
    // Frontend
    'React':            { Icon: FaReact,      color: 'text-cyan-500' },
    'Angular':          { Icon: FaAngular,    color: 'text-red-500' },
    'Next.js':          { Icon: SiNextdotjs,  color: 'text-gray-800 dark:text-gray-200' },
    'Vue.js':           { Icon: FiLayers,     color: 'text-green-500' },
    'Tailwind CSS':     { Icon: SiTailwindcss,color: 'text-teal-500' },
    'Material Design':  { Icon: FiLayers,     color: 'text-blue-500' },
    'InVision':         { Icon: FiLayers,     color: 'text-pink-600' },
    'Sketch':           { Icon: FiAperture,   color: 'text-orange-500' },
    
    // Backend
    'Node.js':          { Icon: FaNodeJs,     color: 'text-green-600' },
    'Express.js':       { Icon: SiExpress,    color: 'text-gray-700 dark:text-gray-200' },
    'Spring Boot':      { Icon: SiSpring,     color: 'text-green-600' },
    'Django':           { Icon: FiServer,     color: 'text-green-600' },
    'GraphQL':          { Icon: GrGraphQl,    color: 'text-pink-600' },
    'REST APIs':        { Icon: FiGlobe,      color: 'text-indigo-600' },
    
    // Databases
    'MongoDB':          { Icon: SiMongodb,    color: 'text-green-700' },
    'PostgreSQL':       { Icon: SiPostgresql, color: 'text-blue-700' },
    'MySQL':            { Icon: SiMysql,      color: 'text-blue-600' },
    
    // Mobile
    'Android SDK':      { Icon: FaAndroid,    color: 'text-green-600' },
    'Firebase':         { Icon: SiFirebase,   color: 'text-yellow-500' },
    'React Native':     { Icon: FaReact,      color: 'text-cyan-500' },
    
    // DevOps & Cloud
    'Docker':           { Icon: SiDocker,     color: 'text-blue-500' },
    'Kubernetes':       { Icon: SiKubernetes, color: 'text-blue-700' },
    'AWS':              { Icon: FiCloud ,      color: 'text-orange-500' },
    'Jenkins':          { Icon: SiJenkins,    color: 'text-red-600' },
    'Terraform':        { Icon: SiTerraform,  color: 'text-purple-600' },
    'GitLab CI':        { Icon: SiGitlab,     color: 'text-orange-600' },
    
    // Version Control
    'Git':              { Icon: FaGitAlt,     color: 'text-red-500' },
    'GitHub':           { Icon: SiGithub,     color: 'text-gray-800 dark:text-gray-200' },
    'Linux':            { Icon: FaLinux,      color: 'text-yellow-600' },
    'NPM':              { Icon: FaNpm,        color: 'text-red-600' },
    
    // AI/ML
    'AI Algorithms':    { Icon: FiZap,        color: 'text-purple-500' },
    'Machine Learning': { Icon: FiZap,        color: 'text-purple-600' },
    'NLP':              { Icon: FiCode,       color: 'text-teal-600' },
    'Scikit-learn':     { Icon: SiScikitlearn,color: 'text-orange-500' },
    'PyTorch':          { Icon: SiPytorch,    color: 'text-orange-500' },
    'TensorFlow':       { Icon: SiTensorflow, color: 'text-orange-600' },
    'OpenCV':           { Icon: FiAperture,   color: 'text-blue-600' },
    
    // Marketing & Analytics
    'Google Analytics': { Icon: SiGoogleads,  color: 'text-yellow-600' },
    'Google Ads':       { Icon: SiGoogleads,  color: 'text-blue-500' },
    'Meta Ads':         { Icon: FiGlobe,      color: 'text-blue-700' },
    'SEMrush':          { Icon: SiSemrush,    color: 'text-orange-500' },
    'HubSpot':          { Icon: SiHubspot,    color: 'text-orange-600' },
    'Tableau':          { Icon: SiTableau,    color: 'text-blue-700' },
    'Power BI':         { Icon: FiCode,       color: 'text-yellow-600' },
    'Analytics':        { Icon: FiPieChart,   color: 'text-red-400' },
    'Audience Analytics': { Icon: FiPieChart, color: 'text-orange-400' },
    
    // Design
    'Figma':            { Icon: FaFigma,      color: 'text-purple-600' },
    'Adobe Creative Suite': { Icon: FiAperture, color: 'text-red-600' },
    'Adobe Premiere':   { Icon: FiFeather,    color: 'text-purple-700' },
    'Adobe XD':         { Icon: SiAdobexd,    color: 'text-pink-600' },
    'Adobe Photoshop':  { Icon: FiAperture,   color: 'text-blue-700' },
    'Illustrator':      { Icon: FiFeather,    color: 'text-orange-600' },
    'Canva':            { Icon: SiCanva,      color: 'text-purple-500' },
    
    // E-commerce
    'Shopify':          { Icon: FaShopify,    color: 'text-green-600' },
    'WooCommerce':      { Icon: FaWordpress,  color: 'text-purple-700' },
    'WordPress':        { Icon: FaWordpress,  color: 'text-blue-700' },
    'Stripe API':       { Icon: FiCreditCard, color: 'text-indigo-600' },
    'Payment Gateways': { Icon: FiDollarSign, color: 'text-green-500' },
    
    // Project Management
    'Scrum':            { Icon: FiUsers,      color: 'text-blue-700' },
    'Agile':            { Icon: FiTarget,     color: 'text-green-600' },
    'Jira':             { Icon: FiTarget,     color: 'text-blue-700' },
    
    // Content & Marketing
    'Digital Marketing': { Icon: FiTrendingUp, color: 'text-orange-500' },
    'Social Media':     { Icon: FiMessageSquare, color: 'text-blue-400' },
    'Content Strategy': { Icon: FiBookOpen,   color: 'text-pink-500' },
    'Brand Management': { Icon: FiAward,      color: 'text-purple-600' },
    'Video Production': { Icon: FiVideo,      color: 'text-red-600' },
    'Motion Graphics':  { Icon: FiZap,        color: 'text-cyan-500' },
    'UI/UX Design':     { Icon: FiLayout,     color: 'text-pink-600' },
    'Responsive Design': { Icon: FiMonitor,   color: 'text-indigo-500' },
};

const getTechnologyIcon = (tech) => {
    return techIconMap[tech] || { Icon: FiCode, color: 'text-gray-500' };
};

const TechTag = ({ tech, size = 'md' }) => {
    const { Icon, color } = getTechnologyIcon(tech);
    return size === 'sm' ? (
        <span className="flex items-center gap-1 px-2 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs">
            <Icon className={`w-3 h-3 ${color}`} />{tech}
        </span>
    ) : (
        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:shadow-md transition-all duration-300">
            <Icon className={`w-4 h-4 ${color}`} />{tech}
        </motion.span>
    );
};

const Experience = ({ currentRole }) => {
    const { t } = useTranslation('experience');
    const allExperience = useExperienceData();
    const [expandedJobId, setExpandedJobId] = useState(null);
    const [filteredExperience, setFilteredExperience] = useState([]);
    const initialVisibleDescriptions = 2;
    const initialVisibleTechnologies = 6;

    useEffect(() => {
        if (currentRole && currentRole !== 'all') {
            setFilteredExperience(allExperience.filter(item => item.role?.includes(currentRole)));
        } else {
            setFilteredExperience(allExperience);
        }
    }, [currentRole, allExperience]);

    const toggleExpand = (id) => setExpandedJobId(expandedJobId === id ? null : id);

    const getColorClass = (job) => {
        if (job.colorClass) return job.colorClass;
        const map = {
            'Full-time': 'from-blue-500 to-cyan-500',
            'Part-time': 'from-green-500 to-emerald-500',
            'Temps partiel': 'from-green-500 to-emerald-500',
            'Contract': 'from-orange-500 to-red-500',
            'Freelance': 'from-purple-500 to-pink-500',
            'Internship': 'from-gray-500 to-gray-700',
            'Stage': 'from-gray-500 to-gray-700',
        };
        return map[job.type] || 'from-indigo-500 to-purple-500';
    };

    const renderDescriptions = (job, expanded) =>
        (expanded ? job.description : job.description.slice(0, initialVisibleDescriptions))
            .map((desc, idx) => (
                <motion.li key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }} transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{desc}</span>
                </motion.li>
            ));

    const renderTechnologies = (job, expanded) => {
        if (!job.technologies?.length) return null;
        const techs = expanded ? job.technologies : job.technologies.slice(0, initialVisibleTechnologies);
        return (
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                    <FiCode className="text-indigo-500" />{t('technologies', 'Technologies & Skills')}
                </h4>
                <div className="flex flex-wrap gap-2">
                    {techs.map((tech, idx) => (
                        <TechTag key={idx} tech={tech} />
                    ))}
                </div>
                {job.technologies.length > initialVisibleTechnologies && (
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={() => toggleExpand(job.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-medium transition-all duration-300 mt-3">
                        {expanded ? t('showLessTech', 'Show Less Technologies') : t('showAllTech', 'Show All Technologies', { count: job.technologies.length })}
                        {expanded ? <FiChevronUp /> : <FiChevronDown />}
                    </motion.button>
                )}
            </div>
        );
    };

    return (
        <section className="container mx-auto px-4 py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-ternary-dark">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }} className="text-center mb-16">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6">
                    <FiBriefcase className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{t('ui.badge')}</span>
                </motion.div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4">
                        {t('ui.title')} <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{t('ui.titleHighlight')}</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {t('ui.subtitle')}
                    </p>
            </motion.div>

            <div className="relative">
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500 z-0 rounded-full" />

                {filteredExperience.length === 0 ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                        <div className="bg-white/80 dark:bg-ternary-dark/80 p-12 rounded-3xl shadow-2xl inline-block max-w-md border-2 border-gray-200/50 dark:border-gray-700/50">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
                                <FiBriefcase className="text-3xl text-indigo-500 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">{t('empty', 'No experience found')}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">{t('emptyHint', 'Try switching your professional role to discover relevant experience.')}</p>
                            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
                        </div>
                    </motion.div>
                ) : (
                    <div className="space-y-8 lg:space-y-16">
                        {filteredExperience.map((job, index) => {
                            const isExpanded = expandedJobId === job.id;
                            const showToggle = job.description.length > initialVisibleDescriptions ||
                                (job.technologies?.length > initialVisibleTechnologies);
                            const isEven = index % 2 === 0;
                            const colorClass = getColorClass(job);

                            return (
                                <motion.div key={job.id} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', stiffness: 80 }}
                                    className="relative group">

                                    {/* Desktop */}
                                    <div className="hidden lg:flex w-full items-center justify-between">
                                        <div className={`w-2/5 ${isEven ? 'order-1' : 'order-3'}`}>
                                            <motion.div whileHover={{ scale: 1.05, y: -5, transition: { type: 'spring', stiffness: 300 } }}
                                                className={`bg-white dark:bg-ternary-dark rounded-2xl shadow-xl hover:shadow-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 ${isEven ? 'mr-8' : 'ml-8'}`}>
                                                <div className="flex items-start space-x-4">
                                                    {job.image ? (
                                                        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                                                            <Image src={job.image} alt={`${job.company} Logo`} fill className="object-cover p-2" sizes="64px" />
                                                        </div>
                                                    ) : (
                                                        <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                                            <span className="text-white text-xl font-bold">{job.company?.charAt(0) || 'C'}</span>
                                                        </div>
                                                    )}
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-2">{job.company}</h3>
                                                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm space-x-3">
                                                            <span className="flex items-center"><FiMapPin className="w-4 h-4 mr-1" />{job.location}</span>
                                                            <span className="flex items-center"><FiCalendar className="w-4 h-4 mr-1" />{job.startDate} - {job.endDate}</span>
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

                                        <div className="w-1/5 flex justify-center order-2 z-10">
                                            <motion.div whileHover={{ scale: 1.3 }} className="relative">
                                                <div className="w-6 h-6 bg-white dark:bg-gray-800 border-4 border-indigo-500 rounded-full shadow-lg" />
                                                <div className="absolute inset-0 w-6 h-6 bg-indigo-500 rounded-full animate-ping opacity-20" />
                                            </motion.div>
                                        </div>

                                        <div className={`w-2/5 ${isEven ? 'order-3 pl-8' : 'order-1 pr-8'}`}>
                                            <motion.div whileHover={{ y: -5 }}
                                                className="bg-gradient-to-br from-white to-gray-50 dark:from-ternary-dark dark:to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300">
                                                <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-2">{job.title}</h3>
                                                <div className="flex items-center space-x-2 mb-4">
                                                    <span className={`px-3 py-1 bg-gradient-to-r ${colorClass} bg-opacity-10 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700`}>
                                                        {job.department || 'Professional'}
                                                    </span>
                                                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                                        #{index + 1}
                                                    </span>
                                                </div>

                                                <div className="mb-4">
                                                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                                                        <FiCheck className="text-green-500" />{t('responsibilities', 'Key Responsibilities')}
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        <AnimatePresence>{renderDescriptions(job, isExpanded)}</AnimatePresence>
                                                    </ul>
                                                </div>

                                                {job.achievements?.length > 0 && (
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                                                            <FiAward className="text-yellow-500" />{t('achievements', 'Key Achievements')}
                                                        </h4>
                                                        <div className="space-y-2">
                                                            {(isExpanded ? job.achievements : job.achievements.slice(0, 2)).map((a, idx) => (
                                                                <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: idx * 0.1 }} className="flex items-start space-x-3">
                                                                    <FiStar className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                                                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{a}</span>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {renderTechnologies(job, isExpanded)}

                                                {showToggle && (
                                                    <div className="flex items-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                                            onClick={() => toggleExpand(job.id)}
                                                            className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-lg font-medium transition-all duration-300">
                                                            {isExpanded ? t('showLess', 'Show Less') : t('readMore', 'Read More')}
                                                            {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                                                        </motion.button>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Mobile */}
                                    <div className="lg:hidden">
                                        <motion.div whileHover={{ y: -3 }}
                                            className="bg-gradient-to-br from-white to-gray-50 dark:from-ternary-dark dark:to-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                                            <div className="flex items-start space-x-4 mb-4">
                                                {job.image ? (
                                                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                                                        <Image src={job.image} alt={`${job.company} Logo`} fill className="object-cover p-2" sizes="64px" />
                                                    </div>
                                                ) : (
                                                    <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                                        <span className="text-white text-xl font-bold">{job.company?.charAt(0) || 'C'}</span>
                                                    </div>
                                                )}
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-1">{job.company}</h3>
                                                    <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{job.title}</h4>
                                                    <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                        <span className="flex items-center"><FiMapPin className="w-3 h-3 mr-1" />{job.location}</span>
                                                        <span className="flex items-center"><FiCalendar className="w-3 h-3 mr-1" />{job.startDate} - {job.endDate}</span>
                                                    </div>
                                                    <span className={`px-2 py-1 bg-gradient-to-r ${colorClass} bg-opacity-10 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium`}>
                                                        {job.type}
                                                    </span>
                                                </div>
                                            </div>

                                            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm flex items-center gap-2">
                                                <FiCheck className="text-green-500" />{t('responsibilities', 'Key Responsibilities')}
                                            </h4>
                                            <ul className="space-y-2 mb-4">
                                                <AnimatePresence>
                                                    {(isExpanded ? job.description : job.description.slice(0, initialVisibleDescriptions)).map((desc, idx) => (
                                                        <motion.li key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                                                            className="flex items-start space-x-3">
                                                            <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0 mt-2" />
                                                            <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{desc}</span>
                                                        </motion.li>
                                                    ))}
                                                </AnimatePresence>
                                            </ul>

                                            {job.technologies?.length > 0 && (
                                                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm">{t('technologies', 'Technologies')}:</h4>
                                                    <div className="flex flex-wrap gap-1">
                                                        {job.technologies.slice(0, 4).map((tech, idx) => (
                                                            <TechTag key={idx} tech={tech} size="sm" />
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {showToggle && (
                                                <motion.button whileTap={{ scale: 0.95 }} onClick={() => toggleExpand(job.id)}
                                                    className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-lg font-medium transition-all duration-300 w-full justify-center mt-4">
                                                    {isExpanded ? t('showLess', 'Show Less') : t('readMore', 'Read More')}
                                                    {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
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

           
        </section>
    );
}

export default Experience;