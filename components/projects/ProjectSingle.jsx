// components/projects/ProjectSingle.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';

const ProjectSingle = ({ id, img, title, category, description, status = 'done' }) => {
    
    // Status configuration
    const statusConfig = {
        done: {
            label: 'Completed',
            icon: <FiCheckCircle className="w-3.5 h-3.5" />,
            className: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
            dotColor: 'bg-green-400'
        },
        'in-progress': {
            label: 'In Progress',
            icon: <FiClock className="w-3.5 h-3.5 animate-spin-slow" />,
            className: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
            dotColor: 'bg-amber-400'
        },
        planned: {
            label: 'Planned',
            icon: <FiAlertCircle className="w-3.5 h-3.5" />,
            className: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
            dotColor: 'bg-blue-400'
        }
    };

    const config = statusConfig[status] || statusConfig.done;

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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg ${config.className}`}
                        >
                            {config.icon}
                            <span>{config.label}</span>
                        </motion.div>
                    </div>
                    
                    {/* View Project Badge */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-lg">
                            View <FiArrowRight className="text-indigo-500" />
                        </div>
                    </div>

                    {/* Status Dot Indicator (mobile friendly) */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className={`w-2 h-2 rounded-full ${config.dotColor} animate-pulse`} />
                        <span className="text-xs text-white font-medium drop-shadow-lg">
                            {status === 'done' ? 'Ready to view' : 'Follow progress'}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                            {category}
                        </span>
                        
                        {/* Mobile Status Indicator (visible only on small screens) */}
                        <div className="sm:hidden flex items-center gap-1">
                            <div className={`w-2 h-2 rounded-full ${config.dotColor}`} />
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                {status === 'done' ? 'Done' : status === 'in-progress' ? 'Progress' : 'Planned'}
                            </span>
                        </div>
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