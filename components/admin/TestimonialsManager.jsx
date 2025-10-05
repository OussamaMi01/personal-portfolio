import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiPlus, FiEdit, FiTrash2, FiStar } from 'react-icons/fi';

const TestimonialsManager = ({ onNavigateToSettings, onNavigateToDashboard }) => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTestimonials();
    }, []);

    const loadTestimonials = () => {
        // Load from localStorage
        const savedTestimonials = JSON.parse(localStorage.getItem('portfolio-testimonials') || '[]');
        setTestimonials(savedTestimonials);
        setLoading(false);
    };

    const deleteTestimonial = (id) => {
        if (confirm('Are you sure you want to delete this testimonial?')) {
            const updated = testimonials.filter(t => t.id !== id);
            setTestimonials(updated);
            localStorage.setItem('portfolio-testimonials', JSON.stringify(updated));
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-96">
                <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
                <div>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                        <FiUsers className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Testimonials Management</span>
                    </div>
                    <h2 className="text-4xl font-bold text-primary-dark dark:text-primary-light mb-2">
                        Client <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Testimonials</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Manage client feedback and testimonials
                    </p>
                </div>
                
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <FiPlus className="text-lg" />
                    Add Testimonial
                </motion.button>
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-ternary-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
            >
                {testimonials.length === 0 ? (
                    <div className="text-center py-16">
                        <FiUsers className="text-6xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                            No Testimonials Yet
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Start collecting client feedback to showcase your work.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Add Your First Testimonial
                        </motion.button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-ternary-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                                        {testimonial.clientName?.charAt(0) || 'C'}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary-dark dark:text-primary-light">
                                            {testimonial.clientName}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {testimonial.clientCompany}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar 
                                            key={i}
                                            className={`w-4 h-4 ${
                                                i < (testimonial.rating || 5) 
                                                    ? 'text-yellow-500 fill-current' 
                                                    : 'text-gray-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                                
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                                    {testimonial.content}
                                </p>
                                
                                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {testimonial.date}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-200">
                                            <FiEdit className="w-4 h-4" />
                                        </button>
                                        <button 
                                            onClick={() => deleteTestimonial(testimonial.id)}
                                            className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200"
                                        >
                                            <FiTrash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default TestimonialsManager;