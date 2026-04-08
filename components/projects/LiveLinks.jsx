// components/projects/LiveLinks.jsx
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiVideo, FiBookOpen, FiGlobe } from 'react-icons/fi';

const LiveLinks = ({ links }) => {
    if (!links) return null;

    const linkItems = [
        { key: 'demo', icon: FiGlobe, label: 'Live Demo', color: 'from-green-500 to-emerald-500' },
        { key: 'github', icon: FiGithub, label: 'GitHub Repository', color: 'from-gray-700 to-gray-900' },
        { key: 'behance', icon: FiExternalLink, label: 'Behance Project', color: 'from-blue-500 to-indigo-500' },
        { key: 'video', icon: FiVideo, label: 'Video Demo', color: 'from-red-500 to-pink-500' },
        { key: 'documentation', icon: FiBookOpen, label: 'Documentation', color: 'from-purple-500 to-violet-500' },
        { key: 'portfolio', icon: FiExternalLink, label: 'Portfolio', color: 'from-indigo-500 to-purple-500' }
    ];

    const activeLinks = linkItems.filter(item => links[item.key]);

    if (activeLinks.length === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
        >
            <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                🔗 Project Links
            </h2>
            <div className="flex flex-wrap gap-4">
                {activeLinks.map(({ key, icon: Icon, label, color }) => (
                    <motion.a
                        key={key}
                        href={links[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${color} text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group`}
                    >
                        <Icon className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                        <span className="font-semibold">{label}</span>
                        <FiExternalLink className="text-sm opacity-70 group-hover:opacity-100" />
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};

export default LiveLinks;