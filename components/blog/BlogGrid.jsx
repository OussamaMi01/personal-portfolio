import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiClock, FiCalendar, FiTag, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaJs, FaPython, FaDatabase, FaMobile } from 'react-icons/fa';

// Icon mapping for categories
const categoryIcons = {
    'React & Next.js': { icon: FaReact, color: 'from-cyan-500 to-blue-500' },
    'TypeScript': { icon: FaJs, color: 'from-blue-600 to-indigo-600' },
    'Node.js': { icon: FaNodeJs, color: 'from-green-500 to-emerald-500' },
    'Python': { icon: FaPython, color: 'from-yellow-500 to-amber-500' },
    'Database': { icon: FaDatabase, color: 'from-gray-500 to-slate-600' },
    'Mobile': { icon: FaMobile, color: 'from-purple-500 to-pink-500' },
    'Industry Trends': { icon: FiTag, color: 'from-orange-500 to-red-500' },
};

// Mock data - replace with your actual blog data source
const mockBlogPosts = [
    {
        id: 1,
        title: "Building Scalable React Applications with Next.js",
        excerpt: "Learn how to build highly scalable and performant React applications using Next.js best practices and modern architecture patterns.",
        slug: "scalable-react-nextjs",
        image: "/images/blog/nextjs-scalable.jpg",
        date: "2024-01-15",
        readTime: "8 min read",
        category: "React & Next.js",
        tags: ["React", "Next.js", "Performance"],
        featured: true
    },
    {
        id: 2,
        title: "Mastering TypeScript in Modern Web Development",
        excerpt: "Deep dive into TypeScript advanced patterns and how they can improve your code quality and developer experience.",
        slug: "mastering-typescript",
        image: "/images/blog/typescript-mastery.jpg",
        date: "2024-01-10",
        readTime: "12 min read",
        category: "TypeScript",
        tags: ["TypeScript", "Web Development", "Best Practices"],
        featured: false
    },
    {
        id: 3,
        title: "The Future of Web Development: AI and Automation",
        excerpt: "Exploring how artificial intelligence is transforming web development workflows and what it means for developers.",
        slug: "ai-web-development-future",
        image: "/images/blog/ai-web-dev.jpg",
        date: "2024-01-05",
        readTime: "6 min read",
        category: "Industry Trends",
        tags: ["AI", "Future", "Automation"],
        featured: true
    }
];

const BlogCard = ({ post, index }) => {
    const categoryInfo = categoryIcons[post.category] || { icon: FiTag, color: 'from-gray-500 to-gray-600' };
    const CategoryIcon = categoryInfo.icon;

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group relative"
        >
            <Link href={`/blog/${post.slug}`} passHref legacyBehavior>
                <a className="block">
                    {/* Image Container */}
                    <div className="relative h-52 overflow-hidden">
                        {post.image ? (
                            <div className="relative w-full h-full">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    priority={index < 2}
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Category Badge with Icon */}
                                <div className="absolute top-4 left-4 z-10">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-full shadow-lg border border-white/20 dark:border-gray-700/50">
                                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${categoryInfo.color} flex items-center justify-center`}>
                                            <CategoryIcon className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Featured Badge */}
                                {post.featured && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                            </span>
                                            Featured
                                        </span>
                                    </div>
                                )}

                                {/* Read Time Overlay */}
                                <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full flex items-center gap-1">
                                        <FiClock className="w-3 h-3" />
                                        {post.readTime}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            // Fallback when no image is available
                            <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                                <div className="text-center">
                                    <div className={`w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-r ${categoryInfo.color} flex items-center justify-center`}>
                                        <CategoryIcon className="w-8 h-8 text-white" />
                                    </div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {/* Meta Info */}
                        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <div className="flex items-center gap-1">
                                <FiCalendar className="w-3.5 h-3.5" />
                                <span>{post.date}</span>
                            </div>
                            <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
                            <div className="flex items-center gap-1">
                                <FiClock className="w-3.5 h-3.5" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                            {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                            {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-lg flex items-center gap-1 border border-gray-200 dark:border-gray-600"
                                >
                                    <FiTag className="w-3 h-3" />
                                    #{tag}
                                </span>
                            ))}
                            {post.tags.length > 3 && (
                                <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-lg">
                                    +{post.tags.length - 3}
                                </span>
                            )}
                        </div>

                        {/* Read More */}
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                            <span className="text-indigo-600 dark:text-indigo-400 font-medium group-hover:gap-3 transition-all duration-300 flex items-center gap-2">
                                <span>Read full article</span>
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
                                    className="text-lg"
                                >
                                    →
                                </motion.span>
                            </span>
                            
                            {/* Platform Indicator */}
                            <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                                <FiExternalLink className="w-3 h-3" />
                                Preview
                            </span>
                        </div>
                    </div>
                </a>
            </Link>
        </motion.article>
    );
};

const BlogGrid = ({ limit = 3, showFeatured = true, columns = 3 }) => {
    let posts = [...mockBlogPosts];
    
    // Filter featured posts if needed
    if (showFeatured) {
        posts = posts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    
    posts = posts.slice(0, limit);
    
    const gridCols = {
        1: 'md:grid-cols-1',
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-2 lg:grid-cols-3',
        4: 'md:grid-cols-2 lg:grid-cols-4'
    };

    return (
        <div className={`grid grid-cols-1 ${gridCols[columns] || gridCols[3]} gap-8`}>
            {posts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
            ))}
        </div>
    );
};

export default BlogGrid;