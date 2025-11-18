import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import PagesMetaHead from '../../components/PagesMetaHead';

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
        tags: ["React", "Next.js", "Performance", "Scalability"]
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
        tags: ["TypeScript", "Web Development", "Best Practices"]
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
        tags: ["AI", "Future", "Automation", "Web Development"]
    }
};

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;
    
    const post = blogPosts[slug];

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Post Not Found
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        The blog post you're looking for doesn't exist.
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
            className="min-h-screen py-20"
        >
            <PagesMetaHead title={post.title} description={post.excerpt} />

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
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
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
                    {/* Category */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium mb-6"
                    >
                        {post.category}
                    </motion.span>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                    >
                        {post.title}
                    </motion.h1>

                    {/* Meta Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 dark:text-gray-300 mb-8"
                    >
                        <span>{post.date}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{post.readTime}</span>
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

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-teal-100 dark:from-gray-700 dark:to-gray-600 h-64 sm:h-80 lg:h-96"
                >
                    {/* Placeholder for actual image */}
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">Featured Image</span>
                    </div>
                </motion.div>

                {/* Article Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="prose prose-lg dark:prose-invert max-w-none"
                >
                    <div 
                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </motion.div>

                {/* Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
                >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Tags:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="mt-12 flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700"
                >
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        All Articles
                    </button>
                    
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group"
                    >
                        Back to Top
                        <span className="group-hover:-translate-y-1 transition-transform">↑</span>
                    </button>
                </motion.div>
            </article>
        </motion.div>
    );
}