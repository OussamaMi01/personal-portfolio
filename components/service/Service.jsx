// components/service/Service.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useServicesData } from '../../hooks/useServicesData';
import { serviceCategories } from '../../data/servicesData';
import Link from 'next/link';
import {
    FiArrowRight, FiCheck, FiClock, FiDollarSign,
    FiBriefcase, FiCode, FiFilter, FiLayers, FiAperture, FiGlobe, FiZap, FiFeather, FiCloud
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

// ─── Unified tech icon map ────────────────────────────────────────────────────
const techIconMap = {
    'Java':             { Icon: FaJava,       color: 'text-red-600' },
    'Python':           { Icon: FaPython,     color: 'text-blue-600' },
    'JavaScript':       { Icon: FaJs,         color: 'text-yellow-500' },
    'TypeScript':       { Icon: SiTypescript, color: 'text-blue-700' },
    'Kotlin':           { Icon: SiKotlin,     color: 'text-purple-600' },
    'R':                { Icon: FiCode,       color: 'text-blue-500' },
    'SQL':              { Icon: FiCode,       color: 'text-orange-500' },
    'React':            { Icon: FaReact,      color: 'text-cyan-500' },
    'Angular':          { Icon: FaAngular,    color: 'text-red-500' },
    'Next.js':          { Icon: SiNextdotjs,  color: 'text-gray-800 dark:text-gray-200' },
    'Tailwind CSS':     { Icon: SiTailwindcss,color: 'text-teal-500' },
    'Material Design':  { Icon: FiLayers,     color: 'text-blue-500' },
    'InVision':         { Icon: FiLayers,     color: 'text-pink-600' },
    'Sketch':           { Icon: FiAperture,   color: 'text-orange-500' },
    'Node.js':          { Icon: FaNodeJs,     color: 'text-green-600' },
    'Express.js':       { Icon: SiExpress,    color: 'text-gray-700 dark:text-gray-200' },
    'Spring Boot':      { Icon: SiSpring,     color: 'text-green-600' },
    'GraphQL':          { Icon: GrGraphQl,    color: 'text-pink-600' },
    'RESTful APIs':     { Icon: FiGlobe,      color: 'text-indigo-600' },
    'MongoDB':          { Icon: SiMongodb,    color: 'text-green-700' },
    'PostgreSQL':       { Icon: SiPostgresql, color: 'text-blue-700' },
    'MySQL':            { Icon: SiMysql,      color: 'text-blue-600' },
    'Android SDK':      { Icon: FaAndroid,    color: 'text-green-600' },
    'Firebase':         { Icon: SiFirebase,   color: 'text-yellow-500' },
    'Docker':           { Icon: SiDocker,     color: 'text-blue-500' },
    'Kubernetes':       { Icon: SiKubernetes, color: 'text-blue-700' },
    'AWS':              { Icon: FiCloud,      color: 'text-orange-500' },
    'Jenkins':          { Icon: SiJenkins,    color: 'text-red-600' },
    'Terraform':        { Icon: SiTerraform,  color: 'text-purple-600' },
    'GitLab CI':        { Icon: SiGitlab,     color: 'text-orange-600' },
    'Git':              { Icon: FaGitAlt,     color: 'text-red-500' },
    'GitHub':           { Icon: SiGithub,     color: 'text-gray-800 dark:text-gray-200' },
    'Linux':            { Icon: FaLinux,      color: 'text-yellow-600' },
    'NPM':              { Icon: FaNpm,        color: 'text-red-600' },
    'Machine Learning': { Icon: FiZap,        color: 'text-purple-600' },
    'NLP':              { Icon: FiCode,       color: 'text-teal-600' },
    'Scikit-learn':     { Icon: SiScikitlearn,color: 'text-orange-500' },
    'PyTorch':          { Icon: SiPytorch,    color: 'text-orange-500' },
    'TensorFlow':       { Icon: SiTensorflow, color: 'text-orange-600' },
    'OpenCV':           { Icon: FiAperture,   color: 'text-blue-600' },
    'Google Analytics': { Icon: SiGoogleads, color: 'text-yellow-600' },
    'Google Ads':       { Icon: SiGoogleads, color: 'text-blue-500' },
    'Meta Ads':         { Icon: FiGlobe,      color: 'text-blue-700' },
    'SEMrush':          { Icon: SiSemrush,    color: 'text-orange-500' },
    'HubSpot':          { Icon: SiHubspot,    color: 'text-orange-600' },
    'Tableau':          { Icon: SiTableau,    color: 'text-blue-700' },
    'Power BI':         { Icon: FiCode,       color: 'text-yellow-600' },
    'Figma':            { Icon: FaFigma,      color: 'text-purple-600' },
    'Adobe Creative Suite': { Icon: FiAperture, color: 'text-red-600' },
    'Adobe Premiere':   { Icon: FiFeather,    color: 'text-purple-700' },
    'Adobe XD':         { Icon: SiAdobexd,    color: 'text-pink-600' },
    'Canva':            { Icon: SiCanva,      color: 'text-purple-500' },
    'Shopify':          { Icon: FaShopify,    color: 'text-green-600' },
    'WooCommerce':      { Icon: FaWordpress,  color: 'text-purple-700' },
    'WordPress':        { Icon: FaWordpress,  color: 'text-blue-700' },
    'Stripe':           { Icon: FiCode,       color: 'text-indigo-600' },
    'PayPal':           { Icon: FiGlobe,      color: 'text-blue-700' },
};

const getTechIcon = (tech) => techIconMap[tech] || { Icon: FiCode, color: 'text-gray-500' };

// ─── Component ────────────────────────────────────────────────────────────────
const Service = ({ currentRole, showFilters = false, hideHeader = false }) => {
    const { t } = useTranslation('services');
    const allServices = useServicesData();
    const [expandedServiceId, setExpandedServiceId] = useState(null);
    const [filteredServices, setFilteredServices] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');

    // Show more benefits on the full services page
    const initialVisibleBenefits = showFilters ? 3 : 2;
    const initialVisibleTech = showFilters ? 6 : 4;

    useEffect(() => { setIsClient(true); }, []);

    useEffect(() => {
        let results = allServices;
        if (currentRole && currentRole !== 'all') {
            results = results.filter(item => item.role?.includes(currentRole));
        }
        if (activeCategory !== 'all') {
            results = results.filter(s => s.category?.toLowerCase() === activeCategory.toLowerCase());
        }
        setFilteredServices(results);
    }, [currentRole, activeCategory, allServices]);

    const toggleExpand = (id) => setExpandedServiceId(expandedServiceId === id ? null : id);

    const categories = ['all', ...new Set(allServices.map(s => s.category).filter(Boolean))];
    const categoryNames = {
        'all': 'All Services', 'development': 'Web Development', 'mobile': 'Mobile Apps',
        'ai-ml': 'AI & ML', 'analytics': 'Data Analytics', 'design': 'UI/UX Design',
        'ecommerce': 'E-Commerce', 'devops': 'Cloud & DevOps',
    };

    const renderBenefits = (service, expanded) => {
        const benefits = expanded ? service.clientBenefits : service.clientBenefits.slice(0, initialVisibleBenefits);
        if (!isClient) {
            return benefits.map((b, i) => (
                <li key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{b}</span>
                </li>
            ));
        }
        return benefits.map((b, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }} transition={{ delay: i * 0.1 }}
                className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{b}</span>
            </motion.li>
        ));
    };

    const TechTag = ({ tech, size = 'md' }) => {
        const { Icon, color } = getTechIcon(tech);
        return size === 'sm' ? (
            <span className="flex items-center gap-1 px-2 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs">
                <Icon className={`w-3 h-3 ${color}`} />{tech}
            </span>
        ) : (
            <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:shadow-md transition-all duration-300">
                <Icon className={`w-4 h-4 ${color}`} />{tech}
            </motion.span>
        );
    };

    // ── Card grid (services page) ─────────────────────────────────────────────
    const renderCardLayout = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredServices.map((service, index) => {
                const isExpanded = expandedServiceId === service.id;
                const ServiceIcon = service.icon;
                const colorClass = service.colorClass;
                
                return (
                    <motion.div key={service.id}
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -8 }}
                        className="group bg-white dark:bg-ternary-dark rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">

                        <div className="relative p-6 pb-0">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {ServiceIcon && <ServiceIcon className="text-2xl text-white" />}
                            </div>
                            <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-2">{service.title}</h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4" />
                        </div>

                        <div className="p-6 pt-0 flex-grow">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{service.description}</p>
                            <div className="mb-4">
                                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                                    <FiCheck className="text-green-500" />{t('keyBenefits', 'Key Benefits')}
                                </h4>
                                <ul className="space-y-2">
                                    <AnimatePresence>{renderBenefits(service, isExpanded)}</AnimatePresence>
                                </ul>
                            </div>
                            {service.clientBenefits.length > initialVisibleBenefits && (
                                <button onClick={() => toggleExpand(service.id)}
                                    className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors mb-4 flex items-center gap-1">
                                    {isExpanded ? t('showLess', 'Show less') : t('readMore', `Read more (${service.clientBenefits.length - initialVisibleBenefits} more)`)}
                                    <FiArrowRight className={`text-xs transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                                </button>
                            )}
                            {service.technologies?.length > 0 && (
                                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm flex items-center gap-2">
                                        <FiCode className="text-indigo-500" />{t('technologiesTools', 'Technologies')}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.technologies.slice(0, initialVisibleTech).map((tech, i) => (
                                            <TechTag key={i} tech={tech} size="sm" />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="px-6 pb-4 pt-2">
                            <div className="flex items-center justify-between text-sm border-t border-gray-200 dark:border-gray-700 pt-4">
                                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                    <FiClock className="w-4 h-4" />{service.duration}
                                </span>
                                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                    <FiDollarSign className="w-4 h-4" />{service.startingPrice}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 pt-0">
                            <Link href={`/contact?service=${encodeURIComponent(service.title)}`} passHref legacyBehavior>
                                <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                                    {t('getStarted', 'Get Started')}
                                    <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </motion.a>
                            </Link>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );

    // ── Timeline (home page) ──────────────────────────────────────────────────
    const renderTimelineLayout = () => (
        <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500 z-0 rounded-full" />
            <div className="space-y-8 lg:space-y-16">
                {filteredServices.map((service, index) => {
                    const isExpanded = expandedServiceId === service.id;
                    const showToggle = service.clientBenefits.length > initialVisibleBenefits;
                    const isEven = index % 2 === 0;
                    const ServiceIcon = service.icon;
                    const colorClass = service.colorClass;

                    return (
                        <motion.div key={service.id} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', stiffness: 80 }}
                            className="relative group">

                            {/* Desktop layout - same as before but using service data */}
                            <div className="hidden lg:flex w-full items-center justify-between">
                                <div className={`w-2/5 ${isEven ? 'order-1' : 'order-3'}`}>
                                    <motion.div whileHover={{ scale: 1.05, y: -5 }}
                                        className={`bg-white dark:bg-ternary-dark rounded-2xl shadow-xl p-6 border border-gray-200/50 dark:border-gray-700/50 ${isEven ? 'mr-8' : 'ml-8'}`}>
                                        <div className="flex items-start space-x-4">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                                {ServiceIcon && <ServiceIcon className="text-2xl text-white" />}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-2">{service.title}</h3>
                                                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm space-x-3">
                                                    <span className="flex items-center"><FiClock className="w-4 h-4 mr-1" />{service.duration}</span>
                                                    <span className="flex items-center"><FiDollarSign className="w-4 h-4 mr-1" />{service.startingPrice}</span>
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
                                        className="bg-gradient-to-br from-white to-gray-50 dark:from-ternary-dark dark:to-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                                        <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-2">{service.title}</h3>
                                        <div className="flex items-center space-x-2 mb-4">
                                            <span className={`px-3 py-1 bg-gradient-to-r ${colorClass} bg-opacity-10 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700`}>
                                                {serviceCategories[service.category] || service.category || 'Service'}
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">#{index + 1}</span>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{service.description}</p>

                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                                                <FiCheck className="text-green-500" />{t('keyBenefits', 'Key Benefits')}
                                            </h4>
                                            <ul className="space-y-2">
                                                <AnimatePresence>{renderBenefits(service, isExpanded)}</AnimatePresence>
                                            </ul>
                                        </div>

                                        {service.technologies?.length > 0 && (
                                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                                                    <FiCode className="text-indigo-500" />{t('technologiesTools', 'Technologies')}
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.technologies.slice(0, initialVisibleTech).map((tech, i) => (
                                                        <TechTag key={i} tech={tech} />
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                            {showToggle && (
                                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                                    onClick={() => toggleExpand(service.id)}
                                                    className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg font-medium">
                                                    {isExpanded ? t('showLess', 'Show Less') : t('readMore', 'Read More')}
                                                    {isExpanded ? <FiArrowRight className="rotate-90" /> : <FiArrowRight className="-rotate-90" />}
                                                </motion.button>
                                            )}
                                            <Link href={`/contact?service=${encodeURIComponent(service.title)}`} passHref legacyBehavior>
                                                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl shadow-lg ml-auto">
                                                    {t('getStarted', 'Get Started')}
                                                    <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                </motion.a>
                                            </Link>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Mobile layout */}
                            <div className="lg:hidden">
                                {/* Simplified mobile layout */}
                                <motion.div whileHover={{ y: -3 }}
                                    className="bg-gradient-to-br from-white to-gray-50 dark:from-ternary-dark dark:to-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                                    <div className="flex items-start space-x-4 mb-4">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                            {ServiceIcon && <ServiceIcon className="text-2xl text-white" />}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-1">{service.title}</h3>
                                            <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                <span className="flex items-center"><FiClock className="w-3 h-3 mr-1" />{service.duration}</span>
                                                <span className="flex items-center"><FiDollarSign className="w-3 h-3 mr-1" />{service.startingPrice}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>
                                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm flex items-center gap-2">
                                        <FiCheck className="text-green-500" />{t('keyBenefits', 'Key Benefits')}
                                    </h4>
                                    <ul className="space-y-2 mb-4">
                                        {(isExpanded ? service.clientBenefits : service.clientBenefits.slice(0, initialVisibleBenefits)).map((b, i) => (
                                            <li key={i} className="flex items-start space-x-2 text-sm">
                                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0 mt-2" />
                                                <span className="text-gray-700 dark:text-gray-300">{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {service.technologies?.length > 0 && (
                                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm">{t('technologiesTools', 'Technologies')}:</h4>
                                            <div className="flex flex-wrap gap-1">
                                                {service.technologies.slice(0, 4).map((tech, i) => (
                                                    <TechTag key={i} tech={tech} size="sm" />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                        {showToggle && (
                                            <motion.button whileTap={{ scale: 0.95 }} onClick={() => toggleExpand(service.id)}
                                                className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg font-medium">
                                                {isExpanded ? t('showLess', 'Show Less') : t('readMore', 'Read More')}
                                                {isExpanded ? <FiArrowRight className="rotate-90" /> : <FiArrowRight className="-rotate-90" />}
                                            </motion.button>
                                        )}
                                        <Link href={`/contact?service=${encodeURIComponent(service.title)}`} passHref legacyBehavior>
                                            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                                className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl shadow-lg">
                                                {t('getStarted', 'Get Started')}<FiArrowRight className="text-lg" />
                                            </motion.a>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );

    return (
        <section className="container mx-auto px-4 py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-ternary-dark">

            {/* Header — suppressed when page has its own hero */}
            {!hideHeader && (
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }} className="text-center mb-16">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6">
                        <FiBriefcase className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{t('badge', 'Professional Services')}</span>
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark dark:text-primary-light mb-4">
                        {t('title', 'Comprehensive')}{' '}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            {t('titleHighlight', 'Services')}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t('subtitle', 'End-to-end solutions blending technical expertise and creative innovation')}</p>
                </motion.div>
            )}

            {/* Category filter — services page only */}
            {showFilters && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button key={cat} onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                                activeCategory === cat
                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30'
                            }`}>
                            {activeCategory === cat && <FiFilter className="w-3 h-3" />}
                            {categoryNames[cat] || cat}
                        </button>
                    ))}
                </motion.div>
            )}

            {/* Empty state */}
            {filteredServices.length === 0 ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                    <div className="bg-white/80 dark:bg-ternary-dark/80 p-12 rounded-3xl shadow-2xl inline-block max-w-md border-2 border-gray-200/50 dark:border-gray-700/50">
                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
                            <FiBriefcase className="text-3xl text-indigo-500 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">{t('empty', 'No services found')}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{t('emptyHint', 'Try switching your professional role to discover relevant service offerings.')}</p>
                        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
                    </div>
                </motion.div>
            ) : (
                showFilters ? renderCardLayout() : renderTimelineLayout()
            )}

            {/* Bottom CTA — only on home page */}
            {!hideHeader && (
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }} className="mt-16 text-center">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-ternary-dark rounded-2xl p-8 border border-indigo-100 dark:border-gray-700">
                        <h3 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-primary-light mb-4">{t('ctaTitle', 'Ready to Start Your Project?')}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">{t('ctaSubtitle', 'Let\'s discuss your requirements and create a customized solution that drives real results for your business.')}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" passHref legacyBehavior>
                                <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg">
                                    {t('getInTouch', 'Get In Touch')}
                                </motion.a>
                            </Link>
                            <Link href="/projects" passHref legacyBehavior>
                                <motion.a whileHover={{ scale: 1.05 }}
                                    className="px-8 py-4 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-2xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 font-semibold text-lg">
                                    {t('viewWork', 'View My Work')}
                                </motion.a>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default Service;