import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PagesMetaHead from '../../components/PagesMetaHead';
import { FiArrowLeft, FiArrowUp, FiCalendar, FiClock, FiTag, FiAlertTriangle, FiExternalLink, FiBookOpen } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaJs, FaPython, FaDatabase, FaMobile } from 'react-icons/fa';

// Icon mapping for categories
const categoryIcons = {
    'React & Next.js': FaReact,
    'TypeScript': FaJs,
    'Node.js': FaNodeJs,
    'Python': FaPython,
    'Database': FaDatabase,
    'Mobile': FaMobile,
    'Industry Trends': FiTag,
};

// Mock data - replace with your actual data source
const blogPosts = {
    'scalable-react-nextjs': {
        id: 1,
        title: "Building Scalable React Applications with Next.js",
        excerpt: "Learn how to build highly scalable and performant React applications using Next.js best practices and modern architecture patterns.",
        content: `
            <h2>Introduction</h2>
            <p>Building scalable React applications requires careful architecture planning and the right tools. Next.js provides an excellent foundation for creating applications that can grow with your user base.</p>
            
            <h2>Key Principles</h2>
            <p>When building scalable applications, consider these key principles:</p>
            <ul>
                <li>Component reusability</li>
                <li>State management</li>
                <li>Performance optimization</li>
                <li>Code splitting</li>
            </ul>
            
            <h2>Next.js Features for Scalability</h2>
            <p>Next.js offers several features that make scaling easier:</p>
            <ul>
                <li>Automatic code splitting</li>
                <li>Server-side rendering</li>
                <li>Static site generation</li>
                <li>API routes</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>By leveraging Next.js's built-in features and following best practices, you can create React applications that scale efficiently and provide excellent user experiences.</p>
        `,
        image: "/images/blog/nextjs-scalable.jpg",
        date: "2024-01-15",
        readTime: "8 min read",
        category: "React & Next.js",
        tags: ["React", "Next.js", "Performance", "Scalability"],
        platform: "Medium"
    },
    'mastering-typescript': {
        id: 2,
        title: "Mastering TypeScript in Modern Web Development",
        excerpt: "Deep dive into TypeScript advanced patterns and how they can improve your code quality and developer experience.",
        content: `
            <h2>Why TypeScript Matters</h2>
            <p>TypeScript has become an essential tool for modern web development, providing type safety and better developer experience.</p>
            
            <h2>Advanced Patterns</h2>
            <p>Learn advanced TypeScript patterns like generics, conditional types, and utility types to write more robust code.</p>
            
            <h2>Integration with Frameworks</h2>
            <p>TypeScript works seamlessly with React, Vue, Angular, and other modern frameworks.</p>
        `,
        image: "/images/blog/typescript-mastery.jpg",
        date: "2024-01-10",
        readTime: "12 min read",
        category: "TypeScript",
        tags: ["TypeScript", "Web Development", "Best Practices"],
        platform: "Dev.to"
    },
    'ai-web-development-future': {
        id: 3,
        title: "The Future of Web Development: AI and Automation",
        excerpt: "Exploring how artificial intelligence is transforming web development workflows and what it means for developers.",
        content: `
            <h2>The AI Revolution</h2>
            <p>Artificial intelligence is changing how we build websites and applications, from code generation to design assistance.</p>
            
            <h2>Current Tools</h2>
            <p>Explore current AI tools that are helping developers be more productive and creative.</p>
            
            <h2>Future Implications</h2>
            <p>What does the future hold for web developers in an AI-driven world?</p>
        `,
        image: "/images/blog/ai-web-dev.jpg",
        date: "2024-01-05",
        readTime: "6 min read",
        category: "Industry Trends",
        tags: ["AI", "Future", "Automation", "Web Development"],
        platform: "Hashnode"
    }
};

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;
    
    const post = blogPosts[slug];
    const CategoryIcon = post ? categoryIcons[post.category] || FiTag : FiTag;

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Post Not Found
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        The blog post you&apos;re looking for doesn&apos;t exist.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
        >
            <PagesMetaHead title={post.title} description={post.excerpt} />

            {/* Enhanced Development Banner with Platform Info */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3 text-white">
                            <FiBookOpen className="w-5 h-5" />
                            <span className="text-sm md:text-base font-medium">
                                🚀 Discover more in-depth articles on my blog platform
                            </span>
                        </div>
                        <Link 
                            href="https://blog.oussama-missaoui.dev" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2 bg-white text-indigo-600 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 group"
                        >
                            <span>Visit Full Blog Platform</span>
                            <FiExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </motion.div>

          

            <div className="py-20">
                {/* Article Header */}
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <button
                            onClick={() => router.back()}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group font-medium"
                        >
                            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </button>
                    </motion.div>

                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center mb-12"
                    >
                        {/* Category with Icon */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium mb-6 border border-indigo-200 dark:border-indigo-800"
                        >
                            <CategoryIcon className="w-4 h-4" />
                            {post.category}
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                        >
                            {post.title}
                        </motion.h1>

                        {/* Meta Info with Icons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600 dark:text-gray-300 mb-8"
                        >
                            <div className="flex items-center gap-2">
                                <FiCalendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiClock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                            {post.platform && (
                                <div className="flex items-center gap-2">
                                    <FiBookOpen className="w-4 h-4" />
                                    <span>Published on {post.platform}</span>
                                </div>
                            )}
                        </motion.div>

                        {/* Excerpt */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
                        >
                            {post.excerpt}
                        </motion.p>
                    </motion.header>

                    {/* Featured Image - Now using actual images from /images/blog/ */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 h-64 sm:h-80 lg:h-96 relative shadow-2xl"
                    >
                        {post.image ? (
                            <div className="relative w-full h-full group">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2">
                                    <FiBookOpen className="w-4 h-4" />
                                    <span>Featured Article</span>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        <CategoryIcon className="w-10 h-10 text-white" />
                                    </div>
                                    <span className="text-gray-600 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-full backdrop-blur-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Article Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-blockquote:border-l-indigo-400 prose-blockquote:bg-indigo-50 dark:prose-blockquote:bg-indigo-900/20"
                    >
                        <div 
                            className="text-gray-700 dark:text-gray-300 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </motion.div>

                    {/* Read More Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="mt-12 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    📚 More articles available on my blog platform
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    This is a preview. Get access to 50+ in-depth articles, tutorials, and guides.
                                </p>
                            </div>
                            <Link
                                href="https://blog.oussama-missaoui.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group whitespace-nowrap"
                            >
                                <FiBookOpen className="w-5 h-5" />
                                <span>Visit Blog Platform</span>
                                <FiExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <FiTag className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Tags:
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm flex items-center gap-2 border border-gray-200 dark:border-gray-700"
                                >
                                    <FiTag className="w-3 h-3" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200 dark:border-gray-700"
                    >
                        <button
                            onClick={() => router.push('/blog')}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group font-medium px-6 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            All Articles
                        </button>
                        
                        <Link
                            href="https://blog.oussama-missaoui.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group font-medium px-6 py-3 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                        >
                            <FiBookOpen className="w-4 h-4" />
                            Browse Full Blog
                            <FiExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>

                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group font-medium px-6 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                            Back to Top
                            <FiArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.div>
                </article>
            </div>
        </motion.div>
    );
}