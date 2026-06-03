// components/shared/NotificationModal.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiX, 
    FiBell, 
    FiCheckCircle, 
    FiClock, 
    FiAlertCircle,
    FiArrowRight,
    FiGithub,
    FiMail
} from 'react-icons/fi';
import { useTranslation } from 'next-i18next';

const NotificationModal = ({ onClose, isOpen }) => {
    const { t } = useTranslation('common');
    const [currentStep, setCurrentStep] = useState(0);

    const updates = [
        {
            id: 1,
            title: "✨ New Features Coming Soon!",
            description: "I'm working on exciting new features including a project showcase gallery, interactive resume, and real-time chat support.",
            icon: <FiBell className="text-2xl text-white" />,
            color: "from-indigo-500 to-purple-500",
            items: [
                "Interactive Project Gallery",
                "Real-time Resume Viewer",
                "Live Chat Support"
              
            ]
        },
        {
            id: 2,
            title: "🚀 Performance Improvements",
            description: "The portfolio is being optimized for better performance and user experience.",
            icon: <FiClock className="text-2xl text-white" />,
            color: "from-green-500 to-emerald-500",
            items: [
                "Faster Page Load",
                "Enhanced Mobile Experience",
                "Improved SEO",
                "Real-time Updates",
            ]
        },
        {
            id: 3,
            title: "📊 Platform Status",
            description: "Everything is running smoothly! Check out the current status and availability.",
            icon: <FiCheckCircle className="text-2xl text-white" />,
            color: "from-blue-500 to-cyan-500",
            items: [
                "All Services Operational",
                "Contact Form Working",
                "Projects Gallery Updated",
                "24/7 Availability"
            ]
        }
    ];

    const currentUpdate = updates[currentStep];

    const nextStep = () => {
        if (currentStep < updates.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            onClose();
            localStorage.setItem('notification-seen', 'true');
            localStorage.setItem('notification-seen-date', Date.now().toString());
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative max-w-2xl w-full bg-white dark:bg-ternary-dark rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors z-10"
                        >
                            <FiX className="text-2xl" />
                        </button>

                        {/* Progress Bar */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
                            <motion.div
                                className={`h-full bg-gradient-to-r ${currentUpdate.color}`}
                                initial={{ width: `${((currentStep + 1) / updates.length) * 100}%` }}
                                animate={{ width: `${((currentStep + 1) / updates.length) * 100}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentUpdate.color} flex items-center justify-center shadow-lg`}>
                                    {currentUpdate.icon}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light">
                                        {currentUpdate.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                                        {currentUpdate.description}
                                    </p>
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="space-y-3 mb-8">
                                <h3 className="text-lg font-semibold text-primary-dark dark:text-primary-light">
                                    What's New:
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {currentUpdate.items.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl"
                                        >
                                            <FiCheckCircle className="text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={prevStep}
                                    className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                                        currentStep > 0
                                            ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                            : 'opacity-0 pointer-events-none'
                                    }`}
                                >
                                    Previous
                                </button>
                                
                                <div className="flex gap-2">
                                    {updates.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentStep(idx)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                idx === currentStep
                                                    ? `w-6 bg-gradient-to-r ${currentUpdate.color}`
                                                    : 'bg-gray-300 dark:bg-gray-600'
                                            }`}
                                        />
                                    ))}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={nextStep}
                                    className={`px-6 py-2 rounded-xl font-semibold text-white bg-gradient-to-r ${currentUpdate.color} shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
                                >
                                    {currentStep === updates.length - 1 ? 'Got it!' : 'Next'}
                                    <FiArrowRight className="text-sm" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Footer Note */}
                        <div className="bg-gray-50 dark:bg-gray-800/50 px-8 py-4 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                                🔔 These updates will be rolled out gradually. Follow my GitHub for real-time updates!
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NotificationModal;