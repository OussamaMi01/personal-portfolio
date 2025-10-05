// components/projects/ProjectsGrid.jsx
import { useState, useEffect } from 'react';
import { FiSearch, FiX, FiFolder } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectSingle from './ProjectSingle';
import { projectsData } from '../../data/projectsData';
import ProjectsFilter from './ProjectsFilter';

function ProjectsGrid({ limit, currentRole }) {
    const [searchProject, setSearchProject] = useState('');
    const [selectProject, setSelectProject] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        let results = projectsData;

        if (currentRole && currentRole !== 'all') {
            results = results.filter(item => item.role && item.role.includes(currentRole));
        }

        if (selectProject && selectProject !== 'all') {
            results = results.filter(item =>
                item.category.toLowerCase() === selectProject.toLowerCase()
            );
        }

        if (searchProject) {
            results = results.filter(item =>
                item.title.toLowerCase().includes(searchProject.toLowerCase()) ||
                (item.ProjectInfo && item.ProjectInfo.ObjectivesDetails && item.ProjectInfo.ObjectivesDetails.toLowerCase().includes(searchProject.toLowerCase())) ||
                (item.ProjectInfo && item.ProjectInfo.ProjectDetails && item.ProjectInfo.ProjectDetails.some(detail => detail.details.toLowerCase().includes(searchProject.toLowerCase())))
            );
        }

        setFilteredProjects(results);
    }, [searchProject, selectProject, currentRole]);

    const clearFilters = () => {
        setSearchProject('');
        setSelectProject('');
        setActiveFilter('all');
    };

    const projectsToDisplay = limit ? filteredProjects.slice(0, limit) : filteredProjects;
    const showControls = !limit;

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="py-8 sm:py-12"
        >
            {/* Header */}
            <div className="text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4"
                >
                    <FiFolder className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Portfolio Showcase</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4"
                >
                    My Creative <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                >
                    Explore projects showcasing my dual expertise in software engineering and digital creation
                </motion.p>
            </div>

            {/* Search & Filter Controls */}
            {showControls && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-12"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                        {/* Search Input */}
                        <div className="relative w-full sm:w-96">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiSearch className="text-gray-400" />
                            </div>
                            <input
                                value={searchProject}
                                onChange={(e) => setSearchProject(e.target.value)}
                                className="
                                    pl-10 pr-10
                                    py-3
                                    w-full
                                    border-2
                                    border-gray-200
                                    dark:border-gray-700
                                    rounded-xl
                                    text-md
                                    bg-white
                                    dark:bg-ternary-dark
                                    text-gray-800
                                    dark:text-gray-100
                                    placeholder-gray-500
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-indigo-500
                                    focus:border-indigo-500
                                    transition-all duration-300
                                "
                                type="search"
                                placeholder="Search projects by title or description..."
                                aria-label="Search projects"
                            />
                            {searchProject && (
                                <motion.button
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    onClick={() => setSearchProject('')}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition p-1 rounded"
                                >
                                    <FiX size={18} />
                                </motion.button>
                            )}
                        </div>

                        {/* Filter Dropdown */}
                        <ProjectsFilter
                            selectProject={selectProject}
                            setSelectProject={setSelectProject}
                        />
                    </div>

                    {/* Filter Status */}
                    {(searchProject || selectProject) && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-between items-center mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700"
                        >
                            <p className="text-gray-600 dark:text-gray-300 font-medium">
                                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                                {searchProject ? ` for "${searchProject}"` : ''}
                                {selectProject && selectProject !== 'all' ? ` in ${selectProject}` : ''}
                                {currentRole && currentRole !== 'all' ? ` (${currentRole} role)` : ''}
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={clearFilters}
                                className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition font-medium"
                            >
                                <FiX className="mr-1" /> Clear filters
                            </motion.button>
                        </motion.div>
                    )}
                </motion.div>
            )}

            {/* Projects Grid */}
            {projectsToDisplay.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                >
                    <div className="bg-white/80 dark:bg-ternary-dark/80 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50 p-12 rounded-3xl shadow-2xl inline-block max-w-md">
                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
                            <FiSearch className="text-3xl text-indigo-500 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                            No projects found
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Try adjusting your search or filter criteria. We couldn&apos;t find any projects matching your request.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={clearFilters}
                            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                        >
                            Clear all filters
                        </motion.button>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    <AnimatePresence mode="wait">
                        {projectsToDisplay.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ 
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <ProjectSingle {...project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}
        </motion.section>
    );
}

export default ProjectsGrid;