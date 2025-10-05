import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiPlus, 
    FiEdit, 
    FiTrash2, 
    FiSave, 
    FiX,
    FiUser,
    FiCalendar,
    FiMapPin,
    FiBriefcase,
    FiVideo,
    FiAward
} from 'react-icons/fi';
import { experienceData as initialExperienceData } from '../../data/experienceData';

const ExperienceManager = () => {
    const [experiences, setExperiences] = useState([]);
    const [editingExperience, setEditingExperience] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        type: '',
        description: [''],
        technologies: [''],
        role: [],
        current: false,
        image: ''
    });

    const experienceTypes = [
        'Full-time',
        'Part-time',
        'Internship',
        'Freelance',
        'Contract',
        'Remote'
    ];

    const roleOptions = [
        { value: 'engineer', label: 'Engineering' },
        { value: 'designer', label: 'Design' },
        { value: 'creator', label: 'Content Creation' },
        { value: 'analyst', label: 'Data Analysis' },
        { value: 'marketer', label: 'Marketing' }
    ];

    useEffect(() => {
        loadExperiences();
    }, []);

    const loadExperiences = () => {
        try {
            // Load from localStorage or fallback to initial data
            if (typeof window !== 'undefined') {
                const savedExperiences = localStorage.getItem('portfolio-experiences');
                if (savedExperiences) {
                    const parsedExperiences = JSON.parse(savedExperiences);
                    setExperiences(parsedExperiences);
                    return;
                }
            }
            // Fallback to initial data
            setExperiences(initialExperienceData);
        } catch (error) {
            console.error('Failed to load experiences:', error);
            setExperiences(initialExperienceData);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            let updatedExperiences;
            
            if (editingExperience) {
                // Update existing experience
                updatedExperiences = experiences.map(exp => 
                    exp.id === editingExperience ? formData : exp
                );
            } else {
                // Add new experience
                const newExperience = {
                    ...formData,
                    id: Date.now().toString()
                };
                updatedExperiences = [...experiences, newExperience];
            }
            
            // Save to localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('portfolio-experiences', JSON.stringify(updatedExperiences));
            }
            
            setExperiences(updatedExperiences);
            resetForm();
            
        } catch (error) {
            console.error('Failed to save experience:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this experience? This action cannot be undone.')) {
            const updatedExperiences = experiences.filter(exp => exp.id !== id);
            
            // Update localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('portfolio-experiences', JSON.stringify(updatedExperiences));
            }
            
            setExperiences(updatedExperiences);
        }
    };

    const resetForm = () => {
        setFormData({
            id: '',
            title: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            type: '',
            description: [''],
            technologies: [''],
            role: [],
            current: false,
            image: ''
        });
        setEditingExperience(null);
        setIsAdding(false);
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

    const getExperienceIcon = (type) => {
        const iconMap = {
            'Internship': FiUser,
            'Freelance': FiBriefcase,
            'Part-time': FiCalendar,
            'Full-time': FiAward,
            'Remote': FiVideo
        };
        return iconMap[type] || FiBriefcase;
    };

    const formatDateForInput = (dateString) => {
        if (!dateString) return '';
        // Convert "Feb 2025" to "2025-02-01" for date input
        const months = {
            'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
            'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
            'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
        };
        
        const [month, year] = dateString.split(' ');
        if (months[month] && year) {
            return `${year}-${months[month]}-01`;
        }
        return dateString;
    };

    const formatDateForDisplay = (dateString) => {
        if (!dateString) return '';
        // Convert "2025-02-01" to "Feb 2025"
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
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
                    <FiUser className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Experience Management</span>
                </div>
                <h2 className="text-4xl font-bold text-primary-dark dark:text-primary-light mb-4">
                    Build Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Career</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Manage your professional experience and career timeline
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
                        Experiences ({experiences.length})
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
                    Add New Experience
                </motion.button>
            </motion.div>

            {/* Experiences Timeline */}
            <div className="space-y-6">
                {experiences.map((experience, index) => {
                    const ExperienceIcon = getExperienceIcon(experience.type);
                    const isCurrent = experience.current || experience.endDate === 'Present';
                    
                    return (
                        <motion.div
                            key={experience.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-ternary-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4 flex-1">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 flex items-center justify-center flex-shrink-0">
                                        <ExperienceIcon className="text-2xl text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-2">
                                            {experience.title}
                                        </h3>
                                        <p className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                                            {experience.company}
                                        </p>
                                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-3">
                                            <div className="flex items-center gap-1">
                                                <FiCalendar className="text-sm" />
                                                <span>
                                                    {experience.startDate} - {isCurrent ? 'Present' : experience.endDate}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FiMapPin className="text-sm" />
                                                <span>{experience.location}</span>
                                            </div>
                                            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                                                {experience.type}
                                            </span>
                                            {isCurrent && (
                                                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                                            {Array.isArray(experience.description) 
                                                ? experience.description[0] 
                                                : experience.description
                                            }
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {experience.technologies.slice(0, 6).map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                            {experience.technologies.length > 6 && (
                                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                                    +{experience.technologies.length - 6} more
                                                </span>
                                            )}
                                        </div>
                                        {experience.role && experience.role.length > 0 && (
                                            <div className="flex flex-wrap gap-1 mt-2">
                                                {experience.role.map((role, idx) => (
                                                    <span key={idx} className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs">
                                                        {roleOptions.find(r => r.value === role)?.label || role}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-2 ml-4">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => {
                                            setFormData({
                                                ...experience,
                                                startDate: formatDateForInput(experience.startDate),
                                                endDate: formatDateForInput(experience.endDate),
                                                current: experience.current || experience.endDate === 'Present'
                                            });
                                            setEditingExperience(experience.id);
                                            setIsAdding(false);
                                        }}
                                        className="p-3 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300"
                                    >
                                        <FiEdit className="text-lg" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => handleDelete(experience.id)}
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
                {(isAdding || editingExperience) && (
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
                                            <FiUser className="text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">
                                                {editingExperience ? 'Edit Experience' : 'Add New Experience'}
                                            </h3>
                                            <p className="text-indigo-100 text-sm mt-1">
                                                {editingExperience ? 'Update experience details' : 'Add to your professional journey'}
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
                                                Job Title *
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.title}
                                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="e.g., Senior Developer"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Company *
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="e.g., Google, Microsoft"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.location}
                                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="e.g., San Francisco, CA"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Employment Type
                                            </label>
                                            <select
                                                value={formData.type}
                                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                            >
                                                <option value="">Select Type</option>
                                                {experienceTypes.map(type => (
                                                    <option key={type} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Dates */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Start Date *
                                            </label>
                                            <input
                                                type="date"
                                                value={formData.startDate}
                                                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                End Date
                                            </label>
                                            <input
                                                type="date"
                                                value={formData.endDate}
                                                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                                disabled={formData.current}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            />
                                            <label className="flex items-center gap-3 mt-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.current}
                                                    onChange={(e) => setFormData({ ...formData, current: e.target.checked })}
                                                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                                                />
                                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                                    I currently work here
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Roles */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            Roles
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {roleOptions.map((role) => (
                                                <button
                                                    key={role.value}
                                                    type="button"
                                                    onClick={() => handleRoleToggle(role.value)}
                                                    className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                                                        formData.role.includes(role.value)
                                                            ? 'bg-indigo-500 text-white border-indigo-500'
                                                            : 'bg-white dark:bg-ternary-dark text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-indigo-500'
                                                    }`}
                                                >
                                                    {role.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            Description Points *
                                        </label>
                                        <div className="space-y-3">
                                            {formData.description.map((point, index) => (
                                                <div key={index} className="flex gap-3">
                                                    <input
                                                        type="text"
                                                        value={point}
                                                        onChange={(e) => updateArrayItem('description', index, e.target.value)}
                                                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                        placeholder="Enter a key achievement or responsibility..."
                                                        required
                                                    />
                                                    {formData.description.length > 1 && (
                                                        <button
                                                            type="button"
                                                            onClick={() => removeArrayItem('description', index)}
                                                            className="px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-300"
                                                        >
                                                            <FiX className="text-lg" />
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() => addArrayItem('description')}
                                                className="flex items-center gap-2 px-4 py-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors duration-300"
                                            >
                                                <FiPlus className="text-sm" />
                                                Add Description Point
                                            </button>
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            Technologies & Skills
                                        </label>
                                        <div className="space-y-3">
                                            {formData.technologies.map((tech, index) => (
                                                <div key={index} className="flex gap-3">
                                                    <input
                                                        type="text"
                                                        value={tech}
                                                        onChange={(e) => updateArrayItem('technologies', index, e.target.value)}
                                                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                        placeholder="Enter a technology or skill..."
                                                    />
                                                    {formData.technologies.length > 1 && (
                                                        <button
                                                            type="button"
                                                            onClick={() => removeArrayItem('technologies', index)}
                                                            className="px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-300"
                                                        >
                                                            <FiX className="text-lg" />
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() => addArrayItem('technologies')}
                                                className="flex items-center gap-2 px-4 py-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors duration-300"
                                            >
                                                <FiPlus className="text-sm" />
                                                Add Technology
                                            </button>
                                        </div>
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
                                            {editingExperience ? 'Update Experience' : 'Add Experience'}
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

export default ExperienceManager;