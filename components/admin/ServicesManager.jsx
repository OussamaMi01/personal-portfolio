import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiPlus, 
    FiEdit, 
    FiTrash2, 
    FiSave, 
    FiX,
    FiBriefcase,
    FiCode,
    FiSmartphone,
    FiCpu,
    FiPieChart,
    FiTrendingUp,
    FiPenTool,
    FiShoppingBag,
    FiEdit2,
    FiCloud,
    FiAward,
    FiUsers,
    FiBarChart2,
    FiServer,
    FiVideo,
    FiCamera,
    FiMessageSquare,
    FiTarget
} from 'react-icons/fi';
import { servicesData, serviceCategories, expertiseLevels, serviceRoles } from '../../data/servicesData';

const ServicesManager = () => {
    const [services, setServices] = useState([]);
    const [editingService, setEditingService] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        icon: 'FiCode',
        colorClass: 'from-indigo-500 to-purple-500',
        bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
        role: [],
        category: '',
        expertise: 'advanced',
        duration: '',
        startingPrice: '',
        clientBenefits: [''],
        features: [''],
        technologies: [''],
        deliveryMethods: [''],
        caseStudy: '',
        testimonials: ['']
    });

    const colorOptions = [
        { value: 'from-indigo-500 to-purple-500', label: 'Indigo to Purple' },
        { value: 'from-green-500 to-emerald-500', label: 'Green to Emerald' },
        { value: 'from-blue-500 to-cyan-500', label: 'Blue to Cyan' },
        { value: 'from-orange-500 to-amber-500', label: 'Orange to Amber' },
        { value: 'from-pink-500 to-rose-500', label: 'Pink to Rose' },
        { value: 'from-teal-500 to-blue-500', label: 'Teal to Blue' },
        { value: 'from-red-500 to-pink-500', label: 'Red to Pink' },
        { value: 'from-gray-600 to-blue-500', label: 'Gray to Blue' }
    ];

    // Available Feather Icons
    const iconOptions = [
        { value: 'FiCode', label: 'Code', icon: FiCode },
        { value: 'FiSmartphone', label: 'Mobile', icon: FiSmartphone },
        { value: 'FiCpu', label: 'AI', icon: FiCpu },
        { value: 'FiPieChart', label: 'Analytics', icon: FiPieChart },
        { value: 'FiTrendingUp', label: 'Marketing', icon: FiTrendingUp },
        { value: 'FiPenTool', label: 'Design', icon: FiPenTool },
        { value: 'FiShoppingBag', label: 'E-commerce', icon: FiShoppingBag },
        { value: 'FiEdit2', label: 'Content', icon: FiEdit2 },
        { value: 'FiCloud', label: 'Cloud', icon: FiCloud },
        { value: 'FiAward', label: 'Premium', icon: FiAward },
        { value: 'FiUsers', label: 'Team', icon: FiUsers },
        { value: 'FiBarChart2', label: 'Analytics', icon: FiBarChart2 },
        { value: 'FiServer', label: 'Server', icon: FiServer },
        { value: 'FiVideo', label: 'Video', icon: FiVideo },
        { value: 'FiCamera', label: 'Media', icon: FiCamera },
        { value: 'FiMessageSquare', label: 'Chat', icon: FiMessageSquare },
        { value: 'FiTarget', label: 'Strategy', icon: FiTarget }
    ];

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = () => {
        try {
            // Load from your existing services data
            setServices(servicesData);
        } catch (error) {
            console.error('Failed to load services:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            if (editingService) {
                // Update existing service
                const updatedServices = services.map(service => 
                    service.id === editingService ? { 
                        ...formData,
                        icon: getIconComponent(formData.icon) // Convert back to icon component
                    } : service
                );
                setServices(updatedServices);
                console.log('Updated services:', updatedServices);
            } else {
                // Add new service
                const newService = {
                    ...formData,
                    id: Date.now().toString(),
                    icon: getIconComponent(formData.icon), // Convert to icon component
                    bgColor: formData.bgColor || generateBgColor(formData.colorClass)
                };
                const updatedServices = [...services, newService];
                setServices(updatedServices);
                console.log('Added new service:', newService);
            }
            
            resetForm();
        } catch (error) {
            console.error('Failed to save service:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this service? This action cannot be undone.')) {
            const updatedServices = services.filter(service => service.id !== id);
            setServices(updatedServices);
            console.log('Deleted service:', id);
        }
    };

    const resetForm = () => {
        setFormData({
            id: '',
            title: '',
            description: '',
            icon: 'FiCode',
            colorClass: 'from-indigo-500 to-purple-500',
            bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
            role: [],
            category: '',
            expertise: 'advanced',
            duration: '',
            startingPrice: '',
            clientBenefits: [''],
            features: [''],
            technologies: [''],
            deliveryMethods: [''],
            caseStudy: '',
            testimonials: ['']
        });
        setEditingService(null);
        setIsAdding(false);
    };

    // Helper function to generate background color from color class
    const generateBgColor = (colorClass) => {
        const fromColor = colorClass.split(' ')[0].split('-')[1];
        const toColor = colorClass.split(' ')[2].split('-')[1];
        return `from-${fromColor}-50 to-${toColor}-50 dark:from-${fromColor}-900/20 dark:to-${toColor}-900/20`;
    };

    // Helper function to get icon component from string
    const getIconComponent = (iconName) => {
        const iconMap = {
            'FiCode': FiCode,
            'FiSmartphone': FiSmartphone,
            'FiCpu': FiCpu,
            'FiPieChart': FiPieChart,
            'FiTrendingUp': FiTrendingUp,
            'FiPenTool': FiPenTool,
            'FiShoppingBag': FiShoppingBag,
            'FiEdit2': FiEdit2,
            'FiCloud': FiCloud,
            'FiAward': FiAward,
            'FiUsers': FiUsers,
            'FiBarChart2': FiBarChart2,
            'FiServer': FiServer,
            'FiVideo': FiVideo,
            'FiCamera': FiCamera,
            'FiMessageSquare': FiMessageSquare,
            'FiTarget': FiTarget
        };
        return iconMap[iconName] || FiCode;
    };

    const addArrayItem = (field) => {
        setFormData(prev => ({
            ...prev,
            [field]: [...prev[field], '']
        }));
    };

    const updateArrayItem = (field, index, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].map((item, i) => i === index ? value : item)
        }));
    };

    const removeArrayItem = (field, index) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index)
        }));
    };

    const handleRoleToggle = (role) => {
        setFormData(prev => ({
            ...prev,
            role: prev.role.includes(role)
                ? prev.role.filter(r => r !== role)
                : [...prev.role, role]
        }));
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
            >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                    <FiBriefcase className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Services Management</span>
                </div>
                <h2 className="text-4xl font-bold text-primary-dark dark:text-primary-light mb-4">
                    Manage Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Add, edit, and organize your professional service offerings
                </p>
            </motion.div>

            {/* Action Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light">
                        Services ({services.length})
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Connected to your portfolio data
                    </p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsAdding(true)}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <FiPlus className="text-lg" />
                    Add New Service
                </motion.button>
            </motion.div>

            {/* Services Grid */}
            <div className="grid gap-6">
                {services.map((service, index) => {
                    const ServiceIcon = service.icon || FiCode;
                    return (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-ternary-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4 flex-1">
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.colorClass} flex items-center justify-center flex-shrink-0`}>
                                        <ServiceIcon className="text-2xl text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                                                {serviceCategories[service.category] || service.category}
                                            </span>
                                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                                {service.duration}
                                            </span>
                                            <span className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                                                {service.startingPrice}
                                            </span>
                                            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                                                {expertiseLevels[service.expertise]?.label || service.expertise}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {service.technologies.slice(0, 4).map((tech, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                            {service.technologies.length > 4 && (
                                                <span className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs">
                                                    +{service.technologies.length - 4} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 ml-4">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => {
                                            // Convert icon component to string for form
                                            const iconName = Object.keys(iconOptions).find(key => 
                                                iconOptions[key]?.icon === service.icon
                                            ) || 'FiCode';
                                            
                                            setFormData({
                                                ...service,
                                                icon: iconName
                                            });
                                            setEditingService(service.id);
                                            setIsAdding(false);
                                        }}
                                        className="p-3 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300"
                                    >
                                        <FiEdit className="text-lg" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => handleDelete(service.id)}
                                        className="p-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all duration-300"
                                    >
                                        <FiTrash2 className="text-lg" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Add/Edit Form Modal */}
            <AnimatePresence>
                {(isAdding || editingService) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                        onClick={resetForm}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-ternary-dark rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-200/50 dark:border-gray-700/50"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white sticky top-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/20 rounded-lg">
                                            <FiBriefcase className="text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">
                                                {editingService ? 'Edit Service' : 'Add New Service'}
                                            </h3>
                                            <p className="text-indigo-100 text-sm mt-1">
                                                {editingService ? 'Update service details' : 'Create a new service offering'}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={resetForm}
                                        className="p-2 hover:bg-white/20 rounded-xl transition-colors duration-200"
                                    >
                                        <FiX className="text-2xl" />
                                    </button>
                                </div>
                            </div>

                            {/* Form Content */}
                            <div className="p-6">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Basic Information */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Service Title *
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.title}
                                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="e.g., Full-Stack Development"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Category *
                                            </label>
                                            <select
                                                value={formData.category}
                                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                required
                                            >
                                                <option value="">Select Category</option>
                                                {Object.entries(serviceCategories).map(([key, label]) => (
                                                    <option key={key} value={key}>
                                                        {label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            Description *
                                        </label>
                                        <textarea
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            rows="3"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Describe the service in detail..."
                                            required
                                        />
                                    </div>

                                    {/* Visual & Metadata */}
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Icon
                                            </label>
                                            <select
                                                value={formData.icon}
                                                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                            >
                                                {iconOptions.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Color Scheme
                                            </label>
                                            <select
                                                value={formData.colorClass}
                                                onChange={(e) => setFormData({ ...formData, colorClass: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                            >
                                                {colorOptions.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Expertise Level
                                            </label>
                                            <select
                                                value={formData.expertise}
                                                onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                            >
                                                {Object.entries(expertiseLevels).map(([key, level]) => (
                                                    <option key={key} value={key}>
                                                        {level.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Roles */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            Roles
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {Object.entries(serviceRoles).map(([key, role]) => (
                                                <button
                                                    key={key}
                                                    type="button"
                                                    onClick={() => handleRoleToggle(key)}
                                                    className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                                                        formData.role.includes(key)
                                                            ? 'bg-indigo-500 text-white border-indigo-500'
                                                            : 'bg-white dark:bg-ternary-dark text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-indigo-500'
                                                    }`}
                                                >
                                                    {role.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Pricing & Duration */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Duration
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.duration}
                                                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="e.g., 4-8 weeks"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Starting Price
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.startingPrice}
                                                onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="e.g., $2,500"
                                            />
                                        </div>
                                    </div>

                                    {/* Dynamic Arrays */}
                                    {['clientBenefits', 'features', 'technologies', 'deliveryMethods', 'testimonials'].map((field) => (
                                        <div key={field}>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                {field === 'clientBenefits' ? 'Client Benefits' : 
                                                 field === 'features' ? 'Key Features' : 
                                                 field === 'technologies' ? 'Technologies' :
                                                 field === 'deliveryMethods' ? 'Delivery Methods' : 'Testimonials'}
                                            </label>
                                            <div className="space-y-3">
                                                {formData[field].map((item, index) => (
                                                    <div key={index} className="flex gap-3">
                                                        <input
                                                            type="text"
                                                            value={item}
                                                            onChange={(e) => updateArrayItem(field, index, e.target.value)}
                                                            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                            placeholder={`Enter ${field === 'clientBenefits' ? 'benefit' : field === 'features' ? 'feature' : field === 'technologies' ? 'technology' : field === 'deliveryMethods' ? 'delivery method' : 'testimonial'}`}
                                                        />
                                                        {formData[field].length > 1 && (
                                                            <button
                                                                type="button"
                                                                onClick={() => removeArrayItem(field, index)}
                                                                className="px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-300"
                                                            >
                                                                <FiX className="text-lg" />
                                                            </button>
                                                        )}
                                                    </div>
                                                ))}
                                                <button
                                                    type="button"
                                                    onClick={() => addArrayItem(field)}
                                                    className="flex items-center gap-2 px-4 py-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors duration-300"
                                                >
                                                    <FiPlus className="text-sm" />
                                                    Add {field === 'clientBenefits' ? 'Benefit' : field === 'features' ? 'Feature' : field === 'technologies' ? 'Technology' : field === 'deliveryMethods' ? 'Delivery Method' : 'Testimonial'}
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Case Study */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            Case Study
                                        </label>
                                        <textarea
                                            value={formData.caseStudy}
                                            onChange={(e) => setFormData({ ...formData, caseStudy: e.target.value })}
                                            rows="2"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Brief case study or achievement..."
                                        />
                                    </div>

                                    {/* Form Actions */}
                                    <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-700 sticky bottom-0 bg-white dark:bg-ternary-dark py-4">
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            disabled={loading}
                                            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {loading ? (
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            ) : (
                                                <FiSave className="text-lg" />
                                            )}
                                            {editingService ? 'Update Service' : 'Add Service'}
                                        </motion.button>
                                        <button
                                            type="button"
                                            onClick={resetForm}
                                            className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ServicesManager;