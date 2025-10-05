import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend, FiMessageCircle, FiMail, FiUser, FiFileText } from 'react-icons/fi';
import { FaWhatsapp, FaTelegramPlane, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const selectOptions = [
    'Web Application',
    'Mobile Application',
    'UI/UX Design',
    'Branding & Identity',
    'Digital Marketing',
    'E-commerce Solution',
    'API Development',
    'Consultation',
    'Other',
];

const socialContactLinks = [
    {
        id: 1,
        icon: FaWhatsapp,
        url: 'https://wa.me/+21623257784',
        name: 'WhatsApp',
        color: 'text-green-500 hover:text-green-600',
        bgColor: 'bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30'
    },
    {
        id: 2,
        icon: FaTelegramPlane,
        url: 'https://t.me/Oussema_missaoui',
        name: 'Telegram',
        color: 'text-blue-500 hover:text-blue-600',
        bgColor: 'bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30'
    },
    {
        id: 3,
        icon: SiGmail,
        url: 'mailto:oussama.missaoui.it@gmail.com',
        name: 'Gmail',
        color: 'text-red-500 hover:text-red-600',
        bgColor: 'bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30'
    },
    {
        id: 4,
        icon: FaLinkedin,
        url: 'https://www.linkedin.com/in/oussama-missaoui-a48589246/',
        name: 'LinkedIn',
        color: 'text-blue-600 hover:text-blue-700',
        bgColor: 'bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30'
    },
];

function HireMeModal({ onClose, onSubmissionComplete }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [hoveredSocial, setHoveredSocial] = useState(null);
    const [errors, setErrors] = useState({});

    const validateStep = (step) => {
        const newErrors = {};
        
        if (step === 1) {
            if (!formData.name.trim()) newErrors.name = 'Name is required';
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
            }
        }
        
        if (step === 2) {
            if (!formData.subject.trim()) newErrors.subject = 'Please select a project category';
            if (!formData.message.trim()) newErrors.message = 'Please describe your project';
            else if (formData.message.length < 10) newErrors.message = 'Please provide more details about your project';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateStep(3)) {
            onSubmissionComplete({ 
                type: 'error', 
                message: 'Please fill in all required fields correctly.' 
            });
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                onSubmissionComplete({ 
                    type: 'success', 
                    message: data.message 
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
                setCurrentStep(1);
            } else {
                onSubmissionComplete({ 
                    type: 'error', 
                    message: data.error || 'Failed to send message. Please try again.' 
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            onSubmissionComplete({ 
                type: 'error', 
                message: 'Network error. Please check your connection and try again.' 
            });
        } finally {
            setLoading(false);
            onClose();
        }
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, 3));
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: -50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 300
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-general-medium fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                {/* Enhanced Backdrop with Blur */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative bg-white dark:bg-ternary-dark rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-gray-200/50 dark:border-gray-700/50"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header with Gradient */}
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/20 rounded-lg">
                                    <FiMessageCircle className="text-2xl" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Let&apos;s Start Your Project</h2>
                                    <p className="text-indigo-100 text-sm mt-1">
                                        Step {currentStep} of 3 - {currentStep === 1 ? 'Basic Info' : currentStep === 2 ? 'Project Details' : 'Review & Send'}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/20 rounded-xl transition-colors duration-200"
                                aria-label="Close Modal"
                                disabled={loading}
                            >
                                <FiX className="text-2xl" />
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                            <motion.div
                                initial={{ width: '0%' }}
                                animate={{ width: `${(currentStep / 3) * 100}%` }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="bg-white h-2 rounded-full"
                            />
                        </div>
                    </div>

                    {/* Form Content */}
                    <div className="p-6 max-h-[60vh] overflow-y-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Step 1: Basic Information */}
                            <AnimatePresence mode="wait">
                                {currentStep === 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <label className="flex items-center gap-2 text-lg font-semibold text-primary-dark dark:text-primary-light mb-3">
                                                <FiUser className="text-indigo-500" />
                                                Personal Information
                                            </label>
                                            
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <input
                                                        className={`w-full px-4 py-3 border rounded-xl text-md bg-white dark:bg-ternary-dark
                                                                   text-primary-dark dark:text-ternary-light
                                                                   focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300
                                                                   ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                                                        name="name"
                                                        type="text"
                                                        placeholder="Your Full Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.name && (
                                                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                                    )}
                                                </div>
                                                <div>
                                                    <input
                                                        className={`w-full px-4 py-3 border rounded-xl text-md bg-white dark:bg-ternary-dark
                                                                   text-primary-dark dark:text-ternary-light
                                                                   focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300
                                                                   ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                                                        name="email"
                                                        type="email"
                                                        placeholder="your.email@example.com"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.email && (
                                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Step 2: Project Details */}
                            <AnimatePresence mode="wait">
                                {currentStep === 2 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <label className="flex items-center gap-2 text-lg font-semibold text-primary-dark dark:text-primary-light mb-3">
                                                <FiFileText className="text-indigo-500" />
                                                Project Details
                                            </label>
                                            
                                            <div className="space-y-4">
                                                <div>
                                                    <select
                                                        className={`w-full px-4 py-3 border rounded-xl text-md bg-white dark:bg-ternary-dark
                                                                   text-primary-dark dark:text-ternary-light
                                                                   focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300
                                                                   ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="" disabled>Select project category</option>
                                                        {selectOptions.map((option) => (
                                                            <option key={option} value={option}>
                                                                {option}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.subject && (
                                                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                                                    )}
                                                </div>

                                                <div>
                                                    <textarea
                                                        className={`w-full px-4 py-3 border rounded-xl text-md bg-white dark:bg-ternary-dark
                                                                   text-primary-dark dark:text-ternary-light
                                                                   focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none
                                                                   ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                                                        name="message"
                                                        rows="6"
                                                        placeholder="Describe your project goals, requirements, timeline, and any specific features you need..."
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.message && (
                                                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Step 3: Review & Social Links */}
                            <AnimatePresence mode="wait">
                                {currentStep === 3 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-dark dark:text-primary-light mb-4">
                                                <FiSend className="text-indigo-500" />
                                                Review & Send
                                            </h3>
                                            
                                            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600 dark:text-gray-400">Name:</span>
                                                    <span className="font-medium text-primary-dark dark:text-primary-light">{formData.name}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600 dark:text-gray-400">Email:</span>
                                                    <span className="font-medium text-primary-dark dark:text-primary-light">{formData.email}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600 dark:text-gray-400">Project Type:</span>
                                                    <span className="font-medium text-primary-dark dark:text-primary-light">{formData.subject}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Social Links */}
                                        <div className="text-center">
                                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                                Prefer instant communication?
                                            </p>
                                            <div className="flex justify-center gap-3">
                                                {socialContactLinks.map((link) => {
                                                    const Icon = link.icon;
                                                    return (
                                                        <motion.a
                                                            key={link.id}
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`p-3 rounded-xl shadow-lg transition-all duration-300 ${link.bgColor} ${link.color} border border-gray-200 dark:border-gray-600`}
                                                            whileHover={{ scale: 1.1, y: -2 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onHoverStart={() => setHoveredSocial(link.id)}
                                                            onHoverEnd={() => setHoveredSocial(null)}
                                                        >
                                                            <Icon className="text-2xl" />
                                                        </motion.a>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>

                    {/* Footer with Navigation */}
                    <div className="border-t border-gray-200 dark:border-gray-700 p-6">
                        <div className="flex justify-between items-center">
                            <button
                                onClick={prevStep}
                                className={`px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                                           text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700
                                           transition-all duration-300 ${currentStep === 1 ? 'invisible' : 'visible'}`}
                                disabled={loading}
                            >
                                Back
                            </button>

                            {currentStep < 3 ? (
                                <button
                                    onClick={nextStep}
                                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 
                                               text-white rounded-xl shadow-lg hover:shadow-xl 
                                               transition-all duration-300 font-medium"
                                >
                                    Continue
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 
                                               text-white rounded-xl shadow-lg hover:shadow-xl 
                                               transition-all duration-300 font-medium
                                               disabled:opacity-50 disabled:cursor-not-allowed
                                               flex items-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend className="text-lg" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default HireMeModal;