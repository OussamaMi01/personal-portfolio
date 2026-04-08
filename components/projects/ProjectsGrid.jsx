// components/projects/ProjectsGrid.jsx
import { useState, useEffect } from 'react';
import { FiSearch, FiX, FiFolder } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useProjectsData } from '../../hooks/useProjectsData';
import ProjectSingle from './ProjectSingle';
import ProjectsFilter from './ProjectsFilter';

function ProjectsGrid({ limit, currentRole }) {
    const { t, i18n } = useTranslation('projects');
    const [isClient, setIsClient] = useState(false);
    const allProjects = useProjectsData();
    const [searchProject, setSearchProject] = useState('');
    const [selectProject, setSelectProject] = useState('');
    const [filteredProjects, setFilteredProjects] = useState([]);

    // Set isClient to true after hydration
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Force re-render when language changes
    useEffect(() => {
        setFilteredProjects(prev => [...prev]);
    }, [i18n.language]);

    useEffect(() => {
        let results = allProjects;

        if (currentRole && currentRole !== 'all') {
            results = results.filter(item => item.role?.includes(currentRole));
        }

        if (selectProject && selectProject !== 'all') {
            results = results.filter(item =>
                item.category?.toLowerCase() === selectProject.toLowerCase()
            );
        }

        if (searchProject) {
            results = results.filter(item =>
                item.title?.toLowerCase().includes(searchProject.toLowerCase()) ||
                item.description?.toLowerCase().includes(searchProject.toLowerCase())
            );
        }

        setFilteredProjects(results);
    }, [searchProject, selectProject, currentRole, allProjects]);

    const clearFilters = () => {
        setSearchProject('');
        setSelectProject('');
    };

    const projectsToDisplay = limit ? filteredProjects.slice(0, limit) : filteredProjects;
    const showControls = !limit;

    // During server-side rendering or before hydration, show a placeholder
    if (!isClient) {
        return (
            <section className="py-8 sm:py-12">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                        <FiFolder className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Projects</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4">
                       {t('title', 'Featured')}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            {t('projects', 'Projects')}
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Showcasing my latest work and creative solutions
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Skeleton loading state */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white dark:bg-ternary-dark rounded-2xl shadow-lg overflow-hidden border border-gray-200/50 dark:border-gray-700/50 animate-pulse">
                            <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                            <div className="p-6">
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-3"></div>
                                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }} className="py-8 sm:py-12">

            {/* Header */}
            <div className="text-center mb-12">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                    <FiFolder className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium" suppressHydrationWarning>{t('badge', 'Projects')}</span>
                </motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4">
                    <span suppressHydrationWarning>{t('title', 'Featured')}</span>{' '}
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        <span suppressHydrationWarning>{t('titleHighlight', 'Projects')}</span>
                    </span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    <span suppressHydrationWarning>{t('subtitle', 'Showcasing my latest work and creative solutions')}</span>
                </motion.p>
            </div>

            {/* Search & Filter */}
            {showControls && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }} className="mb-12">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                        <div className="relative w-full sm:w-96">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiSearch className="text-gray-400" />
                            </div>
                            <input
                                value={searchProject}
                                onChange={(e) => setSearchProject(e.target.value)}
                                className="pl-10 pr-10 py-3 w-full border-2 border-gray-200 dark:border-gray-700 rounded-xl text-md bg-white dark:bg-ternary-dark text-gray-800 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                                type="search"
                                placeholder={t('searchPlaceholder', 'Search projects...')}
                                aria-label={t('searchPlaceholder', 'Search projects...')}
                            />
                            {searchProject && (
                                <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }}
                                    onClick={() => setSearchProject('')}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition p-1 rounded">
                                    <FiX size={18} />
                                </motion.button>
                            )}
                        </div>
                        <ProjectsFilter selectProject={selectProject} setSelectProject={setSelectProject} />
                    </div>

                    {(searchProject || selectProject) && (
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                            className="flex justify-between items-center mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                            <p className="text-gray-600 dark:text-gray-300 font-medium">
                                {t('showing', 'Showing')} {filteredProjects.length}{' '}
                                {filteredProjects.length !== 1 ? t('projects', 'projects') : t('project', 'project')}
                                {searchProject ? ` ${t('for', 'for')} "${searchProject}"` : ''}
                                {selectProject && selectProject !== 'all' ? ` ${t('in', 'in')} ${selectProject}` : ''}
                            </p>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                onClick={clearFilters}
                                className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition font-medium">
                                <FiX className="mr-1" /> {t('clearFilters', 'Clear filters')}
                            </motion.button>
                        </motion.div>
                    )}
                </motion.div>
            )}

            {/* Grid */}
            {projectsToDisplay.length === 0 ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16">
                    <div className="bg-white/80 dark:bg-ternary-dark/80 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50 p-12 rounded-3xl shadow-2xl inline-block max-w-md">
                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
                            <FiSearch className="text-3xl text-indigo-500 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">{t('noProjectsFound', 'No projects found')}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{t('noProjectsHint', 'Try adjusting your search or filter to find what you\'re looking for.')}</p>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            onClick={clearFilters}
                            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
                            {t('clearAllFilters', 'Clear all filters')}
                        </motion.button>
                    </div>
                </motion.div>
            ) : (
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <AnimatePresence mode="wait">
                        {projectsToDisplay.map((project, index) => (
                            <motion.div key={project.id} layout
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                                <ProjectSingle project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}
        </motion.section>
    );
}

export default ProjectsGrid;