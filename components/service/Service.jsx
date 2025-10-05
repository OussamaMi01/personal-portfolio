import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData as initialServicesData, serviceCategories } from '../../data/servicesData';
import Link from 'next/link';
import {
    FiCode, FiSmartphone, FiCpu, FiPieChart, FiTrendingUp,
    FiPenTool, FiEdit, FiCloud, FiShoppingBag, FiArrowRight,
    FiCheck, FiStar, FiClock, FiDollarSign, FiAward, FiZap,
    FiUsers, FiLayers, FiTarget, FiBriefcase
} from 'react-icons/fi';

// Dynamic service icons mapping - will handle any service title
const getServiceIcon = (service) => {
    // If service has a custom icon, use it
    if (service.icon) {
        return service.icon;
    }
    
    // Fallback to title-based mapping
    const iconMap = {
        'Full-Stack Development': FiCode,
        'Mobile App Development': FiSmartphone,
        'AI & Machine Learning': FiCpu,
        'Data Analytics & Visualization': FiPieChart,
        'Digital Marketing Strategy': FiTrendingUp,
        'UI/UX Design & Branding': FiPenTool,
        'E-Commerce Solutions': FiShoppingBag,
        'Content Creation & Strategy': FiEdit,
        'Cloud Infrastructure & DevOps': FiCloud,
    };
    
    return iconMap[service.title] || FiBriefcase;
};

const getServiceIconColor = (service) => {
    // If service has a color class, extract the color
    if (service.colorClass) {
        const color = service.colorClass.split(' ')[0].split('-')[1];
        return `text-${color}-500`;
    }
    
    // Fallback to title-based mapping
    const colorMap = {
        'Full-Stack Development': 'text-indigo-500',
        'Mobile App Development': 'text-green-500',
        'AI & Machine Learning': 'text-red-500',
        'Data Analytics & Visualization': 'text-teal-500',
        'Digital Marketing Strategy': 'text-orange-500',
        'UI/UX Design & Branding': 'text-pink-500',
        'E-Commerce Solutions': 'text-blue-500',
        'Content Creation & Strategy': 'text-purple-500',
        'Cloud Infrastructure & DevOps': 'text-gray-600',
    };
    
    return colorMap[service.title] || 'text-gray-500';
};

// Helper to convert icon string to component (moved outside component)
const getIconComponentFromString = (iconString) => {
    const iconMap = {
        'FiCode': FiCode,
        'FiSmartphone': FiSmartphone,
        'FiCpu': FiCpu,
        'FiPieChart': FiPieChart,
        'FiTrendingUp': FiTrendingUp,
        'FiPenTool': FiPenTool,
        'FiShoppingBag': FiShoppingBag,
        'FiEdit2': FiEdit,
        'FiCloud': FiCloud,
        'FiAward': FiAward,
        'FiUsers': FiUsers,
        'FiBarChart2': FiPieChart,
        'FiServer': FiCloud,
        'FiVideo': FiVideo,
        'FiCamera': FiCamera,
        'FiMessageSquare': FiMessageSquare,
        'FiTarget': FiTarget
    };
    return iconMap[iconString] || FiBriefcase;
};

const Service = ({ currentRole }) => {
    const [expandedServiceId, setExpandedServiceId] = useState(null);
    const [filteredServices, setFilteredServices] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const [services, setServices] = useState([]);
    const initialVisibleBenefits = 2;
    const initialVisibleFeatures = 3;

    // Load services on component mount - fixed useEffect
    useEffect(() => {
        setIsClient(true);
        
        // Load services from localStorage or fallback to initial data
        const loadServices = () => {
            try {
                // Only access localStorage on client side
                if (typeof window !== 'undefined') {
                    const savedServices = localStorage.getItem('portfolio-services');
                    if (savedServices) {
                        const parsedServices = JSON.parse(savedServices);
                        // Convert icon strings back to components
                        const servicesWithIcons = parsedServices.map(service => ({
                            ...service,
                            icon: getIconComponentFromString(service.icon)
                        }));
                        setServices(servicesWithIcons);
                        return;
                    }
                }
                // Fallback to initial data
                setServices(initialServicesData);
            } catch (error) {
                console.error('Error loading services:', error);
                setServices(initialServicesData);
            }
        };

        loadServices();
    }, []); // Empty dependency array since loadServices is defined inside

    // Filter services based on current role
    useEffect(() => {
        if (currentRole && currentRole !== 'all') {
            const filtered = services.filter(item => item.role && item.role.includes(currentRole));
            setFilteredServices(filtered);
        } else {
            setFilteredServices(services);
        }
    }, [currentRole, services]);

    const toggleExpand = (id) => {
        setExpandedServiceId(expandedServiceId === id ? null : id);
    };

    // Don't render expandable content during SSR to avoid hydration mismatch
    const renderBenefits = (service, isCurrentlyExpanded) => {
        if (!isClient) {
            return service.clientBenefits.slice(0, initialVisibleBenefits).map((benefit, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{benefit}</span>
                </li>
            ));
        }

        return (isCurrentlyExpanded ? service.clientBenefits : service.clientBenefits.slice(0, initialVisibleBenefits)).map((benefit, idx) => (
            <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start space-x-3"
            >
                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0 mt-2"></div>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{benefit}</span>
            </motion.li>
        ));
    };

    // Helper function to get color class safely
    const getColorClass = (service) => {
        if (!service.colorClass) return 'from-indigo-500 to-purple-500';
        return service.colorClass;
    };

    return (
        <section className="container mx-auto px-4 py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-ternary-dark">
            {/* Header */}
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
                    <span className="text-sm font-medium">Professional Services</span>
                </motion.div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark dark:text-primary-light mb-4">
                    Comprehensive <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    End-to-end solutions blending technical expertise and creative innovation
                </p>
            </motion.div>

            {/* Services Timeline */}
            <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500 z-0 rounded-full"></div>

                {filteredServices.length === 0 ? (
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
                                No services found
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                Try switching your professional role to discover relevant service offerings.
                            </p>
                            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
                        </div>
                    </motion.div>
                ) : (
                    <div className="space-y-8 lg:space-y-16">
                        {filteredServices.map((service, index) => {
                            const isCurrentlyExpanded = expandedServiceId === service.id;
                            const shouldShowToggle = service.clientBenefits.length > initialVisibleBenefits || (service.features && service.features.length > initialVisibleFeatures);
                            const isEvenIndex = index % 2 === 0;
                            const ServiceIcon = getServiceIcon(service);
                            const serviceIconColor = getServiceIconColor(service);
                            const colorClass = getColorClass(service);

                            return (
                                <motion.div
                                    key={service.id}
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
                                        {/* Service Overview Card - Left */}
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
                                                    <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                                        <ServiceIcon className="text-2xl text-white" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-2">
                                                            {service.title}
                                                        </h3>
                                                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm space-x-3">
                                                            <div className="flex items-center">
                                                                <FiClock className="w-4 h-4 mr-1" />
                                                                {service.duration || 'Flexible'}
                                                            </div>
                                                            <div className="flex items-center">
                                                                <FiDollarSign className="w-4 h-4 mr-1" />
                                                                {service.startingPrice || 'Custom Quote'}
                                                            </div>
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

                                        {/* Service Details - Right */}
                                        <div className={`w-2/5 ${isEvenIndex ? 'order-3 pl-8' : 'order-1 pr-8'}`}>
                                            <motion.div
                                                whileHover={{ y: -5 }}
                                                className="bg-gradient-to-br from-white to-gray-50 dark:from-ternary-dark dark:to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
                                            >
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-2">
                                                            {service.title}
                                                        </h3>
                                                        <div className="flex items-center space-x-2">
                                                            <span className={`px-3 py-1 bg-gradient-to-r ${colorClass} bg-opacity-10 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700`}>
                                                                {serviceCategories[service.category] || service.category || 'Service'}
                                                            </span>
                                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                                                #{index + 1}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Service Description */}
                                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                                    {service.description}
                                                </p>

                                                {/* Client Benefits */}
                                                <div className="mb-4">
                                                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                                                        <FiCheck className="text-green-500" />
                                                        Key Benefits
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        <AnimatePresence>
                                                            {renderBenefits(service, isCurrentlyExpanded)}
                                                        </AnimatePresence>
                                                    </ul>
                                                </div>

                                                {/* Features */}
                                                {service.features && service.features.length > 0 && (
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                                                            <FiLayers className="text-blue-500" />
                                                            Key Features
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {(isCurrentlyExpanded ? service.features : service.features.slice(0, initialVisibleFeatures)).map((feature, idx) => (
                                                                <motion.span
                                                                    key={idx}
                                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                                    animate={{ opacity: 1, scale: 1 }}
                                                                    transition={{ delay: idx * 0.05 }}
                                                                    className="px-3 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-xl text-sm font-medium border border-indigo-200 dark:border-indigo-800"
                                                                >
                                                                    {feature}
                                                                </motion.span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Technologies */}
                                                {service.technologies && service.technologies.length > 0 && (
                                                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                                                            <FiCode className="text-indigo-500" />
                                                            Technologies & Tools
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {service.technologies.slice(0, 6).map((tech, idx) => (
                                                                <motion.span
                                                                    key={idx}
                                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                                    animate={{ opacity: 1, scale: 1 }}
                                                                    transition={{ delay: idx * 0.05 }}
                                                                    className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:shadow-md transition-all duration-300"
                                                                >
                                                                    {tech}
                                                                </motion.span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Expand/Collapse and CTA */}
                                                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                    {shouldShowToggle && (
                                                        <motion.button
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() => toggleExpand(service.id)}
                                                            className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-lg font-medium transition-all duration-300"
                                                        >
                                                            {isCurrentlyExpanded ? 'Show Less' : 'Read More'}
                                                            {isCurrentlyExpanded ? <FiArrowRight className="rotate-90" /> : <FiArrowRight className="-rotate-90" />}
                                                        </motion.button>
                                                    )}

                                                    <Link
                                                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                                                        passHref
                                                        legacyBehavior
                                                    >
                                                        <motion.a
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn ml-auto"
                                                        >
                                                            Get Started
                                                            <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                        </motion.a>
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Mobile Layout */}
                                    <div className="lg:hidden">
                                        <motion.div
                                            whileHover={{ y: -3 }}
                                            className="bg-gradient-to-br from-white to-gray-50 dark:from-ternary-dark dark:to-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200/50 dark:border-gray-700/50"
                                        >
                                            {/* Header */}
                                            <div className="flex items-start space-x-4 mb-4">
                                                <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                                    <ServiceIcon className="text-2xl text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-1">
                                                        {service.title}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                        <div className="flex items-center">
                                                            <FiClock className="w-3 h-3 mr-1" />
                                                            {service.duration || 'Flexible'}
                                                        </div>
                                                        <div className="flex items-center">
                                                            <FiDollarSign className="w-3 h-3 mr-1" />
                                                            {service.startingPrice || 'Custom Quote'}
                                                        </div>
                                                    </div>
                                                    <span className={`px-2 py-1 bg-gradient-to-r ${colorClass} bg-opacity-10 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium`}>
                                                        {service.category || 'Service'}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                                                {service.description}
                                            </p>

                                            {/* Client Benefits */}
                                            <div className="mb-4">
                                                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm flex items-center gap-2">
                                                    <FiCheck className="text-green-500" />
                                                    Key Benefits
                                                </h4>
                                                <ul className="space-y-2">
                                                    {(isCurrentlyExpanded ? service.clientBenefits : service.clientBenefits.slice(0, initialVisibleBenefits)).map((benefit, idx) => (
                                                        <li key={idx} className="flex items-start space-x-2 text-sm">
                                                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0 mt-2"></div>
                                                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Technologies */}
                                            {service.technologies && service.technologies.length > 0 && (
                                                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm">Technologies:</h4>
                                                    <div className="flex flex-wrap gap-1">
                                                        {service.technologies.slice(0, 4).map((tech, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Action Buttons */}
                                            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                {shouldShowToggle && (
                                                    <motion.button
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => toggleExpand(service.id)}
                                                        className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-lg font-medium transition-all duration-300"
                                                    >
                                                        {isCurrentlyExpanded ? 'Show Less' : 'Read More'}
                                                        {isCurrentlyExpanded ? <FiArrowRight className="rotate-90" /> : <FiArrowRight className="-rotate-90" />}
                                                    </motion.button>
                                                )}

                                                <Link
                                                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                                                    passHref
                                                    legacyBehavior
                                                >
                                                    <motion.a
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                                    >
                                                        Get Started
                                                        <FiArrowRight className="text-lg" />
                                                    </motion.a>
                                                </Link>
                                            </div>
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
                        Ready to Start Your Project?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                        Let&apos;s discuss your requirements and create a customized solution that drives real results for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" passHref legacyBehavior>
                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg"
                            >
                                Get In Touch
                            </motion.a>
                        </Link>

                        <Link href="/projects" passHref legacyBehavior>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                className="px-8 py-4 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-2xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 font-semibold text-lg"
                            >
                                View My Work
                            </motion.a>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Service;