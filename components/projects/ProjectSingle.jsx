// components/projects/ProjectSingle.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const ProjectSingle = ({ id, img, title, category, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }
            }}
            transition={{
                ease: 'easeInOut',
                duration: 0.4,
            }}
            className="group rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer bg-white dark:bg-ternary-dark overflow-hidden border border-gray-200/50 dark:border-gray-700/50"
        >
            <Link
                href={`/projects/${id}`}
                aria-label={`View project ${title}`}
                className="block w-full h-full"
            >
                {/* Image Container */}
                <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                    <Image
                        src={img}
                        alt={`Cover image for ${title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        quality={90}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* View Project Badge */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                            View <FiArrowRight className="text-indigo-500" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                            {category}
                        </span>
                    </div>
                    
                    <h3 className="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2">
                        {title}
                    </h3>
                    
                    {description && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                            {description}
                        </p>
                    )}
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectSingle;