import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
        tags: ["React", "Next.js", "Performance"]
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
        tags: ["TypeScript", "Web Development", "Best Practices"]
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
        tags: ["AI", "Future", "Automation"]
    }
];

const BlogCard = ({ post, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group"
        >
            <Link href={`/blog/${post.slug}`} passHref legacyBehavior>
                <a className="block">
                    {/* Image Container */}
                    <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-indigo-500 text-white text-xs font-medium rounded-full">
                                {post.category}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                            {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Read More */}
                        <div className="flex items-center justify-between">
                            <span className="text-indigo-600 dark:text-indigo-400 font-medium group-hover:gap-2 transition-all duration-300 flex items-center gap-1">
                                Read article
                                <motion.span
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                                >
                                    →
                                </motion.span>
                            </span>
                        </div>
                    </div>
                </a>
            </Link>
        </motion.article>
    );
};

const BlogGrid = ({ limit = 3 }) => {
    const posts = mockBlogPosts.slice(0, limit);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
            ))}
        </div>
    );
};

export default BlogGrid;