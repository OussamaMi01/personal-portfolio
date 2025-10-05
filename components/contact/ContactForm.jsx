// components/contact/ContactForm.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiSend, 
    FiUser, 
    FiMail, 
    FiMessageSquare, 
    FiPhone, 
    FiBriefcase,
    FiCheckCircle
} from 'react-icons/fi';
import CustomAlert from '../shared/CustomAlert';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAlertClose = () => {
        setShowAlert(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setShowAlert(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setShowAlert({ 
                    type: 'success', 
                    message: '🎉 Your message has been sent successfully! I\'ll get back to you within 24 hours.' 
                });
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                setIsSubmitted(true);
            } else {
                setShowAlert({ 
                    type: 'error', 
                    message: data.error || '❌ Failed to send message. Please try again or contact me directly.' 
                });
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setShowAlert({ 
                type: 'error', 
                message: '🌐 Network error occurred. Please check your connection and try again.' 
            });
        } finally {
            setLoading(false);
        }
    };

    const services = [
        'Web Development',
        'Mobile App Development',
        'AI Solutions',
        'UI/UX Design',
        'Digital Marketing',
        'Consulting',
        'Other'
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2"
        >
            <div className="leading-loose">
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-xl p-8 sm:p-10 rounded-3xl shadow-2xl text-left bg-gradient-to-br from-white to-gray-50 dark:from-ternary-dark dark:to-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-500"
                >
                    {/* Enhanced Header */}
                    <div className="text-center mb-12">
                        <motion.div
                            whileHover={{ 
                                scale: 1.1,
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.5 }
                            }}
                            className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 p-5 rounded-2xl mb-6 border border-indigo-200 dark:border-indigo-800"
                        >
                            <FiMessageSquare className="text-4xl text-indigo-600 dark:text-indigo-400" />
                        </motion.div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mb-3">
                            Start Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Project</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            Let&apos;s discuss your ideas and bring them to life together
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Full Name Input */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="relative"
                        >
                            <label className="block text-lg font-semibold text-primary-dark dark:text-primary-light mb-3 flex items-center">
                                <FiUser className="mr-3 text-indigo-500" /> 
                                Full Name <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    className="w-full pl-14 pr-6 py-5 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-secondary-light focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 placeholder-gray-400"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <FiUser className="text-xl" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Email Address Input */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="relative"
                        >
                            <label className="block text-lg font-semibold text-primary-dark dark:text-primary-light mb-3 flex items-center">
                                <FiMail className="mr-3 text-green-500" /> 
                                Email Address <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className="w-full pl-14 pr-6 py-5 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-secondary-light focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 placeholder-gray-400"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <FiMail className="text-xl" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Phone Input */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="relative"
                        >
                            <label className="block text-lg font-semibold text-primary-dark dark:text-primary-light mb-3 flex items-center">
                                <FiPhone className="mr-3 text-purple-500" /> 
                                Phone (Optional)
                            </label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+216 55 555 555"
                                    className="w-full pl-14 pr-6 py-5 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-secondary-light focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 placeholder-gray-400"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <FiPhone className="text-xl" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Service Interest Select */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <label className="block text-lg font-semibold text-primary-dark dark:text-primary-light mb-3 flex items-center">
                                <FiBriefcase className="mr-3 text-orange-500" /> 
                                Service Interest
                            </label>
                            <div className="relative">
                                <select
                                    id="service"
                                    name="service"
                                    className="w-full pl-14 pr-12 py-5 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-secondary-light focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none transition-all duration-300"
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a service</option>
                                    {services.map((service, idx) => (
                                        <option key={idx} value={service}>{service}</option>
                                    ))}
                                </select>
                                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <FiBriefcase className="text-xl" />
                                </div>
                                <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        {/* Message Textarea */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <label className="block text-lg font-semibold text-primary-dark dark:text-primary-light mb-3">
                                Your Project Details <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                className="w-full px-6 py-5 min-h-[180px] border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-secondary-light focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 placeholder-gray-400 resize-none"
                                id="message"
                                name="message"
                                placeholder="Tell me about your project goals, timeline, and any specific requirements..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            whileHover={{ 
                                scale: 1.03,
                                y: -3,
                                boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.4)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full flex items-center justify-center px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 mt-6 disabled:opacity-50 disabled:cursor-not-allowed group"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                                    />
                                    Sending Your Message...
                                </>
                            ) : (
                                <>
                                    <FiSend className="mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </div>
                </motion.form>

                {/* Custom Alert */}
                <AnimatePresence>
                    {showAlert && (
                        <CustomAlert
                            message={showAlert.message}
                            type={showAlert.type}
                            onClose={handleAlertClose}
                        />
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default ContactForm;