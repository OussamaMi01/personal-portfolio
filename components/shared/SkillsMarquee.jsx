// components/shared/SkillsMarquee.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useMemo, useState, useEffect } from 'react';
import {
    FaJava, FaPython, FaJs, FaAngular, FaNodeJs, FaReact,
    FaGitAlt, FaCode, FaPaintBrush, FaAd, FaSearchengin, FaLightbulb, 
    FaCamera, FaVideo, FaShareAlt, FaMicrophone, FaChartLine, FaBrain, 
    FaCogs, FaTools, FaFigma, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, 
    FaNpm, FaYarn, FaLinux, FaWindows, FaShoppingCart, FaCreditCard, 
    FaLock, FaUsers, FaChartBar, FaGlobe, FaCubes, FaTrademark, FaBook,
} from 'react-icons/fa';
import {
    SiExpress, SiMongodb, SiMysql, SiSpring, SiTailwindcss, SiNextdotjs,
    SiTypescript, SiNumpy, SiPandas, SiScikitlearn, SiPytorch, SiTensorflow,
    SiGithub, SiJira, SiConfluence, SiCanva, SiAdobexd,
    SiBlender, SiFacebook,
    SiInstagram, SiTwitter, SiYoutube, SiTiktok, SiGoogleads, SiVuedotjs,
    SiLaravel, SiPhp, SiWordpress, SiShopify,
    SiDocker, SiKubernetes
} from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import { 
    FiGlobe, FiCloud, FiFeather, FiVideo, FiZap, FiAperture, FiTool,
    FiStar, FiAward, FiTrendingUp
} from 'react-icons/fi';

// Enhanced skill icon map with better colors and categories
const skillIconMap = {
    // Programming Languages
    'Java': { Icon: FaJava, color: 'text-red-600', bgColor: 'bg-red-50 dark:bg-red-900/20', category: 'language' },
    'Python': { Icon: FaPython, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-900/20', category: 'language' },
    'JavaScript': { Icon: FaJs, color: 'text-yellow-500', bgColor: 'bg-yellow-50 dark:bg-yellow-900/20', category: 'language' },
    'TypeScript': { Icon: SiTypescript, color: 'text-blue-700', bgColor: 'bg-blue-50 dark:bg-blue-900/20', category: 'language' },
    'PHP': { Icon: SiPhp, color: 'text-indigo-700', bgColor: 'bg-indigo-50 dark:bg-indigo-900/20', category: 'language' },
    'C#': { Icon: FaCode, color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-900/20', category: 'language' },

    // Frontend Frameworks
    'React': { Icon: FaReact, color: 'text-cyan-500', bgColor: 'bg-cyan-50 dark:bg-cyan-900/20', category: 'frontend' },
    'Angular': { Icon: FaAngular, color: 'text-red-500', bgColor: 'bg-red-50 dark:bg-red-900/20', category: 'frontend' },
    'Vue.js': { Icon: SiVuedotjs, color: 'text-emerald-500', bgColor: 'bg-emerald-50 dark:bg-emerald-900/20', category: 'frontend' },
    'Next.js': { Icon: SiNextdotjs, color: 'text-gray-800 dark:text-gray-200', bgColor: 'bg-gray-100 dark:bg-gray-800', category: 'frontend' },
    'Tailwind CSS': { Icon: SiTailwindcss, color: 'text-teal-500', bgColor: 'bg-teal-50 dark:bg-teal-900/20', category: 'frontend' },
    'HTML': { Icon: FaHtml5, color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-900/20', category: 'frontend' },
    'CSS': { Icon: FaCss3Alt, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-900/20', category: 'frontend' },

    // Backend & Databases
    'Node.js': { Icon: FaNodeJs, color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-900/20', category: 'backend' },
    'Express.js': { Icon: SiExpress, color: 'text-gray-800 dark:text-gray-200', bgColor: 'bg-gray-100 dark:bg-gray-800', category: 'backend' },
    'Spring Boot': { Icon: SiSpring, color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-900/20', category: 'backend' },
    'Laravel': { Icon: SiLaravel, color: 'text-red-500', bgColor: 'bg-red-50 dark:bg-red-900/20', category: 'backend' },
    'MySQL': { Icon: SiMysql, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-900/20', category: 'database' },
    'MongoDB': { Icon: SiMongodb, color: 'text-green-700', bgColor: 'bg-green-50 dark:bg-green-900/20', category: 'database' },
    'GraphQL': { Icon: GrGraphQl, color: 'text-pink-600', bgColor: 'bg-pink-50 dark:bg-pink-900/20', category: 'backend' },
    'RESTful APIs': { Icon: FiGlobe, color: 'text-indigo-600', bgColor: 'bg-indigo-50 dark:bg-indigo-900/20', category: 'backend' },

    // DevOps & Tools
    'Docker': { Icon: SiDocker, color: 'text-blue-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20', category: 'devops' },
    'Kubernetes': { Icon: SiKubernetes, color: 'text-blue-700', bgColor: 'bg-blue-50 dark:bg-blue-900/20', category: 'devops' },
    'AWS': { Icon: FiCloud, color: 'text-orange-500', bgColor: 'bg-orange-50 dark:bg-orange-900/20', category: 'cloud' },
    'Git': { Icon: FaGitAlt, color: 'text-red-500', bgColor: 'bg-red-50 dark:bg-red-900/20', category: 'tool' },
    'GitHub': { Icon: SiGithub, color: 'text-gray-800 dark:text-gray-200', bgColor: 'bg-gray-100 dark:bg-gray-800', category: 'tool' },
    'Linux': { Icon: FaLinux, color: 'text-yellow-600', bgColor: 'bg-yellow-50 dark:bg-yellow-900/20', category: 'tool' },
    'NPM': { Icon: FaNpm, color: 'text-red-600', bgColor: 'bg-red-50 dark:bg-red-900/20', category: 'tool' },
    'Jira': { Icon: SiJira, color: 'text-blue-700', bgColor: 'bg-blue-50 dark:bg-blue-900/20', category: 'tool' },

    // AI/ML
    'Machine Learning': { Icon: FaBrain, color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-900/20', category: 'ai' },
    'NLP': { Icon: FaCogs, color: 'text-teal-600', bgColor: 'bg-teal-50 dark:bg-teal-900/20', category: 'ai' },
    'Scikit-learn': { Icon: SiScikitlearn, color: 'text-orange-500', bgColor: 'bg-orange-50 dark:bg-orange-900/20', category: 'ai' },
    'PyTorch': { Icon: SiPytorch, color: 'text-orange-500', bgColor: 'bg-orange-50 dark:bg-orange-900/20', category: 'ai' },
    'TensorFlow': { Icon: SiTensorflow, color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-900/20', category: 'ai' },

    // Creator Skills
    'Digital Marketing': { Icon: FaAd, color: 'text-orange-500', bgColor: 'bg-orange-50 dark:bg-orange-900/20', category: 'marketing' },
    'Content Creation': { Icon: FaLightbulb, color: 'text-yellow-500', bgColor: 'bg-yellow-50 dark:bg-yellow-900/20', category: 'content' },
    'SEO': { Icon: FaSearchengin, color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-900/20', category: 'marketing' },
    'Graphic Design': { Icon: FaPaintBrush, color: 'text-purple-500', bgColor: 'bg-purple-50 dark:bg-purple-900/20', category: 'design' },
    'Branding': { Icon: FaTrademark, color: 'text-pink-500', bgColor: 'bg-pink-50 dark:bg-pink-900/20', category: 'design' },
    'Photography': { Icon: FaCamera, color: 'text-gray-700', bgColor: 'bg-gray-100 dark:bg-gray-800', category: 'creative' },
    'Video Editing': { Icon: FaVideo, color: 'text-red-600', bgColor: 'bg-red-50 dark:bg-red-900/20', category: 'creative' },
    'Social Media Strategy': { Icon: FaShareAlt, color: 'text-blue-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20', category: 'marketing' },
    'UI/UX Design': { Icon: FaFigma, color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-900/20', category: 'design' },
    'Illustration': { Icon: FiFeather, color: 'text-orange-500', bgColor: 'bg-orange-50 dark:bg-orange-900/20', category: 'creative' },
    'Animation': { Icon: FiZap, color: 'text-purple-700', bgColor: 'bg-purple-50 dark:bg-purple-900/20', category: 'creative' },
    'Public Speaking': { Icon: FaMicrophone, color: 'text-blue-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20', category: 'communication' },
    'Storytelling': { Icon: FaBook, color: 'text-amber-600', bgColor: 'bg-amber-50 dark:bg-amber-900/20', category: 'content' },
    'Canva': { Icon: SiCanva, color: 'text-purple-500', bgColor: 'bg-purple-50 dark:bg-purple-900/20', category: 'tool' },
    'Adobe XD': { Icon: SiAdobexd, color: 'text-pink-600', bgColor: 'bg-pink-50 dark:bg-pink-900/20', category: 'tool' },
    'Photoshop': { Icon: FiAperture, color: 'text-blue-700', bgColor: 'bg-blue-50 dark:bg-blue-900/20', category: 'tool' },
    'Blender': { Icon: SiBlender, color: 'text-orange-500', bgColor: 'bg-orange-50 dark:bg-orange-900/20', category: 'tool' },
    'Facebook Ads': { Icon: SiFacebook, color: 'text-blue-700', bgColor: 'bg-blue-50 dark:bg-blue-900/20', category: 'marketing' },
    'Instagram': { Icon: SiInstagram, color: 'text-pink-600', bgColor: 'bg-pink-50 dark:bg-pink-900/20', category: 'platform' },
    'Google Ads': { Icon: SiGoogleads, color: 'text-blue-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20', category: 'marketing' },
    'YouTube': { Icon: SiYoutube, color: 'text-red-600', bgColor: 'bg-red-50 dark:bg-red-900/20', category: 'platform' },
    'TikTok': { Icon: SiTiktok, color: 'text-black dark:text-white', bgColor: 'bg-gray-100 dark:bg-gray-800', category: 'platform' },
};

const allSkills = {
    engineer: [
        'Java', 'Python', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Vue.js',
        'Node.js', 'Express.js', 'Next.js', 'Spring Boot', 'Laravel', 'MySQL', 'MongoDB',
        'GraphQL', 'RESTful APIs', 'Docker', 'Kubernetes', 'AWS', 'Git', 'GitHub',
        'Linux', 'Tailwind CSS', 'HTML', 'CSS', 'Machine Learning', 'NLP', 'Scikit-learn',
        'PyTorch', 'TensorFlow', 'Jira'
    ],
    creator: [
        'Digital Marketing', 'Content Creation', 'SEO', 'Graphic Design', 'Branding',
        'Photography', 'Video Editing', 'Social Media Strategy', 'UI/UX Design',
        'Illustration', 'Animation', 'Public Speaking', 'Storytelling', 'Canva',
        'Adobe XD', 'Photoshop', 'Blender', 'Facebook Ads', 'Instagram', 'Google Ads',
        'YouTube', 'TikTok'
    ],
};

const marqueeVariants = {
    animate: {
        x: ['0%', '-100%'],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 50,
                ease: 'linear',
            },
        },
    },
};

function SkillsMarquee({ currentRole }) {
    const [isPaused, setIsPaused] = useState(false);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skillsToDisplay = useMemo(() => {
        const skills = allSkills[currentRole] || [];
        const skillsWithIcons = skills
            .map(skill => {
                const iconData = skillIconMap[skill];
                return iconData ? { name: skill, ...iconData } : null;
            })
            .filter(Boolean);

        return [...skillsWithIcons, ...skillsWithIcons];
    }, [currentRole]);

    const title = currentRole === 'engineer' ? 'Tech Stack & Expertise' : 'Creative Tools & Skills';
    const subtitle = currentRole === 'engineer' 
        ? 'Technologies I work with to build amazing digital experiences'
        : 'Tools and skills I use to create compelling visual stories';

    if (!skillsToDisplay || skillsToDisplay.length === 0) {
        return null;
    }

    return (
        <section className="w-full py-12 bg-gradient-to-b from-gray-50 to-white dark:from-ternary-dark dark:to-gray-900">
            <div className="container mx-auto text-center mb-8 px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentRole}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h2 className="font-general-semibold text-3xl sm:text-4xl lg:text-5xl text-ternary-dark dark:text-primary-light mb-4">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div 
                className="relative w-full overflow-hidden py-8 border-y border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-800 to-transparent z-10" />
                
                <motion.div
                    className="flex whitespace-nowrap will-change-transform"
                    variants={marqueeVariants}
                    animate={isPaused ? {} : "animate"}
                >
                    {skillsToDisplay.map(({ name, Icon, color, bgColor, category }, index) => (
                        <motion.div
                            key={`${name}-${index}`}
                            className={`
                                flex items-center flex-shrink-0 mx-4 px-6 py-4 rounded-2xl
                                transition-all duration-300 transform hover:scale-105
                                ${bgColor} border border-gray-200 dark:border-gray-600
                                shadow-sm hover:shadow-lg
                            `}
                            whileHover={{ y: -5 }}
                            onHoverStart={() => setHoveredSkill(name)}
                            onHoverEnd={() => setHoveredSkill(null)}
                        >
                            <div className={`relative ${color} transition-colors duration-300`}>
                                {Icon && (
                                    <Icon className="w-8 h-8 md:w-10 md:h-10 mr-4 transition-transform duration-300" />
                                )}
                                {hoveredSkill === name && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="absolute -top-2 -right-2"
                                    >
                                        <FiStar className="w-4 h-4 text-yellow-500 fill-current" />
                                    </motion.div>
                                )}
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
                                    {name}
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">
                                    {category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Stats Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8"
            >
                <div className="flex flex-wrap justify-center gap-6 text-center">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <FiAward className="text-indigo-500" />
                        <span className="font-medium">{skillsToDisplay.length / 2}+ Skills</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <FiTrendingUp className="text-green-500" />
                        <span className="font-medium">Continuously Learning</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default SkillsMarquee;