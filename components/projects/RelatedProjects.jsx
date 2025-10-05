// components/projects/RelatedProjects.jsx
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projectsData';
import { FiArrowRight } from 'react-icons/fi';

function RelatedProjects({ currentProjectId }) {
    const currentProject = projectsData.find(p => p.id === parseInt(currentProjectId));

    let relatedProjectsToShow = [];

    if (currentProject) {
        const projectsInSameCategory = projectsData.filter(
            p => p.id !== parseInt(currentProjectId) && p.category === currentProject.category
        );

        const otherProjects = projectsData.filter(
            p => p.id !== parseInt(currentProjectId) && p.category !== currentProject.category
        );

        let allPotentialRelated = [...projectsInSameCategory, ...otherProjects];
        
        // Simple shuffle
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        relatedProjectsToShow = shuffleArray(allPotentialRelated).slice(0, 4);
    } else {
        relatedProjectsToShow = projectsData.slice(0, 4);
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 pt-12 sm:pt-16 border-t-2 border-gray-200 dark:border-gray-700"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mb-4">
                    Related <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Explore more projects that might interest you
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProjectsToShow.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                    >
                        <Link href={`/projects/${project.id}`} className="block group">
                            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-ternary-dark border border-gray-200/50 dark:border-gray-700/50">
                                <div className="relative h-40 overflow-hidden">
                                    <Image
                                        src={project.img}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        width={300}
                                        height={160}
                                        alt={project.title}
                                        quality={85}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-4">
                                    <div className="mb-2">
                                        <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="font-general-medium text-md text-ternary-dark dark:text-ternary-light group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2 mb-1">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center text-xs text-indigo-500 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        View project <FiArrowRight className="ml-1" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default RelatedProjects;