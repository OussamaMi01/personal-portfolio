import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiPlus, 
    FiEdit, 
    FiTrash2, 
    FiSave, 
    FiX,
    FiAward,
    FiExternalLink,
    FiGithub,
    FiImage,
    FiVideo,
    FiLink,
    FiTag,
    FiCalendar,
    FiUser,
    FiLayers,
    FiCheck,
    FiXCircle
} from 'react-icons/fi';
import { projectsData as initialProjectsData } from '../../data/projectsData';

const ProjectsManager = () => {
    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [loading, setLoading] = useState(false);
    const [newTech, setNewTech] = useState('');
    const [newTag, setNewTag] = useState('');
    const [newProjectDetail, setNewProjectDetail] = useState('');

    const [formData, setFormData] = useState({
        id: '',
        title: '',
        url: '',
        category: '',
        img: '',
        role: [],
        isBehanceProject: false,
        behanceUrl: '',
        ProjectHeader: {
            title: '',
            publishDate: '',
            tags: []
        },
        ProjectImages: [],
        ProjectVideos: [],
        ProjectInfo: {
            ClientHeading: '',
            CompanyInfo: [],
            ObjectivesHeading: '',
            ObjectivesDetails: '',
            Technologies: [],
            ProjectDetailsHeading: '',
            ProjectDetails: [],
            SocialSharingHeading: '',
            SocialSharing: [],
            SocialLinks: {
                github: '',
                website: '',
                behance: ''
            }
        }
    });

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = () => {
        try {
            if (typeof window !== 'undefined') {
                const savedProjects = localStorage.getItem('portfolio-projects');
                if (savedProjects) {
                    setProjects(JSON.parse(savedProjects));
                    return;
                }
            }
            setProjects(initialProjectsData);
        } catch (error) {
            console.error('Failed to load projects:', error);
            setProjects(initialProjectsData);
        }
    };

    const saveProjects = (updatedProjects) => {
        try {
            if (typeof window !== 'undefined') {
                localStorage.setItem('portfolio-projects', JSON.stringify(updatedProjects));
            }
            setProjects(updatedProjects);
        } catch (error) {
            console.error('Failed to save projects:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            let updatedProjects;
            if (editingProject) {
                updatedProjects = projects.map(p => p.id === editingProject ? formData : p);
            } else {
                const newProject = {
                    ...formData,
                    id: `project-${Date.now()}`
                };
                updatedProjects = [...projects, newProject];
            }
            
            saveProjects(updatedProjects);
            resetForm();
        } catch (error) {
            console.error('Failed to save project:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = (projectId) => {
        const updatedProjects = projects.filter(p => p.id !== projectId);
        saveProjects(updatedProjects);
    };

    const resetForm = () => {
        setFormData({
            id: '',
            title: '',
            url: '',
            category: '',
            img: '',
            role: [],
            isBehanceProject: false,
            behanceUrl: '',
            ProjectHeader: {
                title: '',
                publishDate: '',
                tags: []
            },
            ProjectImages: [],
            ProjectVideos: [],
            ProjectInfo: {
                ClientHeading: '',
                CompanyInfo: [],
                ObjectivesHeading: '',
                ObjectivesDetails: '',
                Technologies: [],
                ProjectDetailsHeading: '',
                ProjectDetails: [],
                SocialSharingHeading: '',
                SocialSharing: [],
                SocialLinks: {
                    github: '',
                    website: '',
                    behance: ''
                }
            }
        });
        setEditingProject(null);
        setIsAdding(false);
        setNewTech('');
        setNewTag('');
        setNewProjectDetail('');
    };

    const startEdit = (project) => {
        setFormData(JSON.parse(JSON.stringify(project))); // Deep clone
        setEditingProject(project.id);
        setIsAdding(false);
    };

    // Helper functions for managing arrays
    const addTechnology = () => {
        if (newTech.trim()) {
            const updatedTechs = [...(formData.ProjectInfo.Technologies[0]?.techs || []), newTech.trim()];
            setFormData({
                ...formData,
                ProjectInfo: {
                    ...formData.ProjectInfo,
                    Technologies: [{
                        title: 'Tools & Technologies',
                        techs: updatedTechs
                    }]
                }
            });
            setNewTech('');
        }
    };

    const removeTechnology = (index) => {
        const updatedTechs = [...(formData.ProjectInfo.Technologies[0]?.techs || [])];
        updatedTechs.splice(index, 1);
        setFormData({
            ...formData,
            ProjectInfo: {
                ...formData.ProjectInfo,
                Technologies: [{
                    title: 'Tools & Technologies',
                    techs: updatedTechs
                }]
            }
        });
    };

    const addTag = () => {
        if (newTag.trim()) {
            const updatedTags = [...formData.ProjectHeader.tags, newTag.trim()];
            setFormData({
                ...formData,
                ProjectHeader: {
                    ...formData.ProjectHeader,
                    tags: updatedTags
                }
            });
            setNewTag('');
        }
    };

    const removeTag = (index) => {
        const updatedTags = [...formData.ProjectHeader.tags];
        updatedTags.splice(index, 1);
        setFormData({
            ...formData,
            ProjectHeader: {
                ...formData.ProjectHeader,
                tags: updatedTags
            }
        });
    };

    const addProjectDetail = () => {
        if (newProjectDetail.trim()) {
            const updatedDetails = [...formData.ProjectInfo.ProjectDetails, {
                id: `detail-${Date.now()}`,
                details: newProjectDetail.trim()
            }];
            setFormData({
                ...formData,
                ProjectInfo: {
                    ...formData.ProjectInfo,
                    ProjectDetails: updatedDetails
                }
            });
            setNewProjectDetail('');
        }
    };

    const removeProjectDetail = (index) => {
        const updatedDetails = [...formData.ProjectInfo.ProjectDetails];
        updatedDetails.splice(index, 1);
        setFormData({
            ...formData,
            ProjectInfo: {
                ...formData.ProjectInfo,
                ProjectDetails: updatedDetails
            }
        });
    };

    const getProjectTypeIcon = (project) => {
        if (project.isBehanceProject) return FiImage;
        if (project.ProjectVideos && project.ProjectVideos.length > 0) return FiVideo;
        return FiLayers;
    };

    const getProjectTypeColor = (project) => {
        if (project.isBehanceProject) return 'from-pink-500 to-rose-500';
        if (project.ProjectVideos && project.ProjectVideos.length > 0) return 'from-blue-500 to-cyan-500';
        return 'from-indigo-500 to-purple-500';
    };

    return (
        <div className="space-y-8 p-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
            >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                    <FiAward className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Projects Management</span>
                </div>
                <h2 className="text-4xl font-bold text-primary-dark dark:text-primary-light mb-4">
                    Manage Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Showcase your technical projects, digital art, and video productions
                </p>
            </motion.div>

            {/* Action Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between bg-white dark:bg-ternary-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
            >
                <div>
                    <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light">
                        Projects ({projects.length})
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Manage your complete project portfolio
                    </p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsAdding(true)}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <FiPlus className="text-lg" />
                    Add New Project
                </motion.button>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid gap-6">
                {projects.map((project, index) => {
                    const ProjectTypeIcon = getProjectTypeIcon(project);
                    const projectTypeColor = getProjectTypeColor(project);
                    
                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-ternary-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4 flex-1">
                                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${projectTypeColor} flex items-center justify-center flex-shrink-0`}>
                                        <ProjectTypeIcon className="text-2xl text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light">
                                                {project.title}
                                            </h3>
                                            <div className="flex gap-2">
                                                {project.isBehanceProject && (
                                                    <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 rounded-full text-xs font-medium">
                                                        Behance
                                                    </span>
                                                )}
                                                {project.ProjectVideos && project.ProjectVideos.length > 0 && (
                                                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                                                        Video
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                                            {project.ProjectInfo.ObjectivesDetails}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {project.ProjectHeader.tags.slice(0, 4).map((tag, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.ProjectHeader.tags.length > 4 && (
                                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                                    +{project.ProjectHeader.tags.length - 4} more
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                            {project.ProjectInfo.SocialLinks.github && (
                                                <a href={project.ProjectInfo.SocialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                                                    <FiGithub className="text-sm" />
                                                    GitHub
                                                </a>
                                            )}
                                            {project.ProjectInfo.SocialLinks.website && (
                                                <a href={project.ProjectInfo.SocialLinks.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                                                    <FiExternalLink className="text-sm" />
                                                    Live Demo
                                                </a>
                                            )}
                                            {project.behanceUrl && (
                                                <a href={project.behanceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">
                                                    <FiExternalLink className="text-sm" />
                                                    Behance
                                                </a>
                                            )}
                                            <span className="flex items-center gap-1">
                                                <FiCalendar className="text-sm" />
                                                {project.ProjectHeader.publishDate}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FiUser className="text-sm" />
                                                {project.role.join(', ')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 ml-4">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => startEdit(project)}
                                        className="p-3 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300"
                                    >
                                        <FiEdit className="text-lg" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => handleDelete(project.id)}
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
                {(isAdding || editingProject) && (
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
                            className="bg-white dark:bg-ternary-dark rounded-3xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden border border-gray-200/50 dark:border-gray-700/50"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/20 rounded-lg">
                                            <FiAward className="text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">
                                                {editingProject ? 'Edit Project' : 'Add New Project'}
                                            </h3>
                                            <p className="text-indigo-100 text-sm mt-1">
                                                {editingProject ? 'Update project details' : 'Add a new project to your portfolio'}
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
                            <div className="p-6 max-h-[70vh] overflow-y-auto">
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Basic Information */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Project Title *
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.title}
                                                onChange={(e) => setFormData({ 
                                                    ...formData, 
                                                    title: e.target.value,
                                                    ProjectHeader: { ...formData.ProjectHeader, title: e.target.value }
                                                })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="e.g., E-Commerce Platform"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                URL Slug *
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.url}
                                                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="e.g., ecommerce-platform"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Category *
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.category}
                                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="e.g., Web Development, Digital Art"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Publish Date *
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.ProjectHeader.publishDate}
                                                onChange={(e) => setFormData({ 
                                                    ...formData, 
                                                    ProjectHeader: { ...formData.ProjectHeader, publishDate: e.target.value }
                                                })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="e.g., Jan 2024"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Project Description */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            Project Description *
                                        </label>
                                        <textarea
                                            value={formData.ProjectInfo.ObjectivesDetails}
                                            onChange={(e) => setFormData({ 
                                                ...formData, 
                                                ProjectInfo: { ...formData.ProjectInfo, ObjectivesDetails: e.target.value }
                                            })}
                                            rows="3"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Describe the project, its objectives, and key features..."
                                            required
                                        />
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            Technologies & Tools
                                        </label>
                                        <div className="flex gap-2 mb-3">
                                            <input
                                                type="text"
                                                value={newTech}
                                                onChange={(e) => setNewTech(e.target.value)}
                                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTechnology())}
                                                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="Add a technology (e.g., React, Node.js)"
                                            />
                                            <button
                                                type="button"
                                                onClick={addTechnology}
                                                className="px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors duration-300"
                                            >
                                                <FiPlus />
                                            </button>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {formData.ProjectInfo.Technologies[0]?.techs?.map((tech, index) => (
                                                <span key={index} className="flex items-center gap-2 px-3 py-2 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-xl text-sm">
                                                    {tech}
                                                    <button
                                                        type="button"
                                                        onClick={() => removeTechnology(index)}
                                                        className="text-indigo-500 hover:text-indigo-700"
                                                    >
                                                        <FiXCircle className="text-sm" />
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            Project Tags
                                        </label>
                                        <div className="flex gap-2 mb-3">
                                            <input
                                                type="text"
                                                value={newTag}
                                                onChange={(e) => setNewTag(e.target.value)}
                                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                                                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="Add a tag (e.g., Web App, AI, Design)"
                                            />
                                            <button
                                                type="button"
                                                onClick={addTag}
                                                className="px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors duration-300"
                                            >
                                                <FiPlus />
                                            </button>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {formData.ProjectHeader.tags.map((tag, index) => (
                                                <span key={index} className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm">
                                                    {tag}
                                                    <button
                                                        type="button"
                                                        onClick={() => removeTag(index)}
                                                        className="text-gray-500 hover:text-gray-700"
                                                    >
                                                        <FiXCircle className="text-sm" />
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Project Details */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            Project Details & Achievements
                                        </label>
                                        <div className="flex gap-2 mb-3">
                                            <input
                                                type="text"
                                                value={newProjectDetail}
                                                onChange={(e) => setNewProjectDetail(e.target.value)}
                                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addProjectDetail())}
                                                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="Add a project detail or achievement"
                                            />
                                            <button
                                                type="button"
                                                onClick={addProjectDetail}
                                                className="px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors duration-300"
                                            >
                                                <FiPlus />
                                            </button>
                                        </div>
                                        <div className="space-y-2">
                                            {formData.ProjectInfo.ProjectDetails.map((detail, index) => (
                                                <div key={detail.id} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                                    <FiCheck className="text-green-500 flex-shrink-0" />
                                                    <span className="flex-1 text-gray-700 dark:text-gray-300">{detail.details}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeProjectDetail(index)}
                                                        className="text-red-500 hover:text-red-700 transition-colors duration-300"
                                                    >
                                                        <FiTrash2 className="text-sm" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                GitHub URL
                                            </label>
                                            <input
                                                type="url"
                                                value={formData.ProjectInfo.SocialLinks.github}
                                                onChange={(e) => setFormData({ 
                                                    ...formData, 
                                                    ProjectInfo: { 
                                                        ...formData.ProjectInfo, 
                                                        SocialLinks: { ...formData.ProjectInfo.SocialLinks, github: e.target.value }
                                                    }
                                                })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="https://github.com/username/repo"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Live Demo URL
                                            </label>
                                            <input
                                                type="url"
                                                value={formData.ProjectInfo.SocialLinks.website}
                                                onChange={(e) => setFormData({ 
                                                    ...formData, 
                                                    ProjectInfo: { 
                                                        ...formData.ProjectInfo, 
                                                        SocialLinks: { ...formData.ProjectInfo.SocialLinks, website: e.target.value }
                                                    }
                                                })}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                placeholder="https://example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Behance Project */}
                                    <div className="flex items-center gap-4">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.isBehanceProject}
                                                onChange={(e) => setFormData({ ...formData, isBehanceProject: e.target.checked })}
                                                className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
                                            />
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Behance Project
                                            </span>
                                        </label>
                                        {formData.isBehanceProject && (
                                            <div className="flex-1">
                                                <input
                                                    type="url"
                                                    value={formData.behanceUrl}
                                                    onChange={(e) => setFormData({ ...formData, behanceUrl: e.target.value })}
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                    placeholder="https://behance.net/gallery/..."
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Form Actions */}
                                    <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
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
                                            {editingProject ? 'Update Project' : 'Add Project'}
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

export default ProjectsManager;