import { motion } from 'framer-motion';
import PagesMetaHead from '../../components/PagesMetaHead';
import BlogGrid from '../../components/blog/BlogGrid';

export default function BlogIndex() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-20"
        >
            <PagesMetaHead title="Blog" />
            
            {/* Header Section */}
            <section className="text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-dark dark:text-primary-light mb-6"
                >
                    My <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Blog</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
                >
                    Insights, tutorials, and thoughts on web development, design, and technology.
                    Join me on my learning journey.
                </motion.p>
                
                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center gap-8 mt-12"
                >
                    <div className="text-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">15+</div>
                        <div className="text-gray-500 dark:text-gray-400">Articles</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">10k+</div>
                        <div className="text-gray-500 dark:text-gray-400">Reads</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">5</div>
                        <div className="text-gray-500 dark:text-gray-400">Categories</div>
                    </div>
                </motion.div>
            </section>

            {/* Blog Grid Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <BlogGrid limit={9} /> {/* Show all posts */}
            </motion.section>

            {/* Newsletter CTA */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-20"
            >
                <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-ternary-dark rounded-3xl p-12 text-center border border-green-100 dark:border-gray-700">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Stay Updated
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                        Get notified when I publish new articles about web development and technology.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    );
}