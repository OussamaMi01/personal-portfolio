// components/contact/ContactForm.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { 
    FiSend, 
    FiUser, 
    FiMail, 
    FiMessageSquare, 
    FiPhone, 
    FiBriefcase
} from 'react-icons/fi';
import CustomAlert from '../shared/CustomAlert';

function ContactForm() {
    const { t, i18n } = useTranslation('contact');
    const [isClient, setIsClient] = useState(false);
    const [forceUpdate, setForceUpdate] = useState(Date.now());
    
    const servicesList = [
        t('form.services.webDevelopment'),
        t('form.services.mobileDevelopment'),
        t('form.services.aiSolutions'),
        t('form.services.uiuxDesign'),
        t('form.services.digitalMarketing'),
        t('form.services.consulting'),
        t('form.services.other')
    ];
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Force re-render when language changes
    useEffect(() => {
        setForceUpdate(Date.now());
    }, [i18n.language]);

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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setShowAlert({ type: 'success', message: t('form.alerts.success') });
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setShowAlert({ type: 'error', message: data.error || t('form.alerts.error') });
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setShowAlert({ type: 'error', message: t('form.alerts.networkError') });
        } finally {
            setLoading(false);
        }
    };

    if (!isClient) {
        return (
            <div className="w-full lg:w-1/2">
                <div className="max-w-xl p-8 rounded-3xl">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto mb-4"></div>
                        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
                        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
                        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
                        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
                        <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            key={forceUpdate}
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
                    {/* Header */}
                    <div className="text-center mb-12">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                            className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 p-5 rounded-2xl mb-6 border border-indigo-200 dark:border-indigo-800"
                        >
                            <FiMessageSquare className="text-4xl text-indigo-600 dark:text-indigo-400" />
                        </motion.div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mb-3">
                            {t('form.badge')}{' '}
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                {t('form.titleHighlight')}
                            </span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            {t('form.subtitle')}
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Name Field */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="relative"
                        >
                            <label className="block text-lg font-semibold text-primary-dark dark:text-primary-light mb-3 flex items-center">
                                <FiUser className="mr-3 text-indigo-500" /> 
                                {t('form.fields.name')} <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder={t('form.placeholders.name')}
                                    className="w-full pl-14 pr-6 py-5 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-secondary-light focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <FiUser className="text-xl" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Email Field */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="relative"
                        >
                            <label className="block text-lg font-semibold text-primary-dark dark:text-primary-light mb-3 flex items-center">
                                <FiMail className="mr-3 text-green-500" /> 
                                {t('form.fields.email')} <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder={t('form.placeholders.email')}
                                    className="w-full pl-14 pr-6 py-5 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-secondary-light focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <FiMail className="text-xl" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Phone Field */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="relative"
                        >
                            <label className="block text-lg font-semibold text-primary-dark dark:text-primary-light mb-3 flex items-center">
                                <FiPhone className="mr-3 text-purple-500" /> 
                                {t('form.fields.phone')}
                            </label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder={t('form.placeholders.phone')}
                                    className="w-full pl-14 pr-6 py-5 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-secondary-light focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <FiPhone className="text-xl" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Service Field */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="relative"
                        >
                            <label className="block text-lg font-semibold text-primary-dark dark:text-primary-light mb-3 flex items-center">
                                <FiBriefcase className="mr-3 text-orange-500" /> 
                                {t('form.fields.service')}
                            </label>
                            <div className="relative">
                                <select
                                    id="service"
                                    name="service"
                                    className="w-full pl-14 pr-12 py-5 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-secondary-light focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none transition-all duration-300"
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="">{t('form.placeholders.service')}</option>
                                    {servicesList.map((service, idx) => (
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

                        {/* Message Field */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="relative"
                        >
                            <label className="block text-lg font-semibold text-primary-dark dark:text-primary-light mb-3">
                                {t('form.fields.message')} <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                className="w-full px-6 py-5 min-h-[180px] border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-secondary-light focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none"
                                id="message"
                                name="message"
                                placeholder={t('form.placeholders.message')}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            whileHover={{ scale: 1.03, y: -3, boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.4)" }}
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
                                    {t('form.buttons.sending')}
                                </>
                            ) : (
                                <>
                                    <FiSend className="mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    {t('form.buttons.submit')}
                                </>
                            )}
                        </motion.button>
                    </div>
                </motion.form>

                {/* Alert */}
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