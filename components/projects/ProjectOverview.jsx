// components/projects/ProjectOverview.jsx
import { motion } from 'framer-motion';
import { FiCheckCircle, FiZap, FiTrendingUp, FiTarget, FiAward } from 'react-icons/fi';

const ProjectOverview = ({ overview }) => {
    if (!overview) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
        >
            {/* Summary */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {overview.summary}
                </p>
            </div>

            {/* Key Features Grid */}
            <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-4 flex items-center gap-2">
                <FiZap className="text-indigo-500" />
                Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {overview.keyFeatures?.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-white dark:bg-ternary-dark rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                        <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.div>
                ))}
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-ternary-dark rounded-xl p-6 shadow-sm border-l-4 border-red-500">
                    <div className="flex items-center gap-2 mb-3">
                        <FiTarget className="text-red-500 text-xl" />
                        <h4 className="text-lg font-semibold text-primary-dark dark:text-primary-light">
                            Problem Solved
                        </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {overview.problemSolved}
                    </p>
                </div>
                <div className="bg-white dark:bg-ternary-dark rounded-xl p-6 shadow-sm border-l-4 border-green-500">
                    <div className="flex items-center gap-2 mb-3">
                        <FiAward className="text-green-500 text-xl" />
                        <h4 className="text-lg font-semibold text-primary-dark dark:text-primary-light">
                            Solution
                        </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {overview.solution}
                    </p>
                </div>
            </div>

            {/* Impact */}
            {overview.impact && (
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                        <FiTrendingUp className="text-indigo-600 text-xl" />
                        <h4 className="text-lg font-semibold text-primary-dark dark:text-primary-light">
                            Impact & Results
                        </h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                        {overview.impact}
                    </p>
                </div>
            )}
        </motion.div>
    );
};

export default ProjectOverview;