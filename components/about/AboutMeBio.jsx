import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    aboutMeData, 
    aboutMeSections, 
    personalInfo, 
    skillsBreakdown,
    careerPhilosophy,
    getRandomFunFact,
    getDevelopmentSkills,
    getSecuritySkills,
    getCombinedExpertise
} from '../../data/aboutMeData';
import { 
    FiGithub, 
    FiLinkedin, 
    FiInstagram, 
    FiMail,
    FiDownload,
    FiCode,
    FiShield,
    FiTrendingUp,
    FiUsers,
    FiAward,
    FiTarget,
    FiBook,
    FiBriefcase
} from 'react-icons/fi';

function AboutMeBio() {
    const [activeTab, setActiveTab] = useState('overview');
    const [randomFact, setRandomFact] = useState(getRandomFunFact());

    const tabContent = {
        overview: aboutMeSections.short,
        technical: aboutMeSections.technical,
        cybersecurity: aboutMeSections.cybersecurity,
        detailed: aboutMeData,
        seeking: aboutMeSections.jobSeeking
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FiGithub className="text-xl" />,
            color: 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600',
            url: 'https://github.com/OussamaMi01',
            label: 'Visit my GitHub profile'
        },
        {
            name: 'LinkedIn',
            icon: <FiLinkedin className="text-xl" />,
            color: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600',
            url: 'https://linkedin.com/in/oussama-missaoui-a48589246',
            label: 'Connect on LinkedIn'
        },
        {
            name: 'Instagram',
            icon: <FiInstagram className="text-xl" />,
            color: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
            url: 'https://instagram.com/os.design.tn',
            label: 'Follow on Instagram'
        },
        {
            name: 'Email',
            icon: <FiMail className="text-xl" />,
            color: 'bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600',
            url: 'mailto:your.email@domain.com',
            label: 'Send me an email'
        }
    ];

    const refreshFact = () => {
        setRandomFact(getRandomFunFact());
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
        >
            {/* Enhanced Profile Section */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:w-1/3"
            >
                <div className="sticky top-8">
                    {/* Profile Card */}
                    <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-gradient-to-br from-white to-gray-50 dark:from-ternary-dark dark:to-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700"
                    >
                        {/* Profile Image */}
                        <div className="relative group mb-6">
                            <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-white shadow-2xl dark:border-gray-800">
                                <Image
                                    src="/images/about/Oussama_profile_pic.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-2xl group-hover:scale-110 transition-transform duration-500"
                                    alt="Oussama Missaoui - Computer Science Graduate | Cybersecurity Master's Student"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                    <p className="text-white font-semibold text-lg">{personalInfo.name}</p>
                                </div>
                            </div>
                            
                            {/* Status Indicator */}
                            <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                        </div>

                        {/* Personal Info */}
                        <div className="text-center mb-6">
                            <h1 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-2">
                                {personalInfo.name}
                            </h1>
                            <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                                {personalInfo.title}
                            </p>
                            <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-4">
                                <span>📍 {personalInfo.location}</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {personalInfo.status}
                            </p>
                        </div>

                        {/* Education Info */}
                        <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800">
                            <h3 className="font-semibold text-primary-dark dark:text-primary-light mb-2 flex items-center gap-2">
                                <FiBook className="text-indigo-500" />
                                Education
                            </h3>
                            <div className="space-y-2">
                                <div className="text-sm">
                                    <p className="font-medium text-indigo-700 dark:text-indigo-300">
                                        {personalInfo.education.bachelor}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {personalInfo.education.institution1}
                                    </p>
                                </div>
                                <div className="text-sm pt-2 border-t border-indigo-100 dark:border-indigo-800">
                                    <p className="font-medium text-indigo-700 dark:text-indigo-300">
                                        {personalInfo.education.master}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {personalInfo.education.institution2} (Current)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Focus Areas */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-primary-dark dark:text-primary-light mb-3 flex items-center gap-2">
                                <FiTarget className="text-indigo-500" />
                                Focus Areas
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {personalInfo.focusAreas.map((area, idx) => (
                                    <span 
                                        key={idx}
                                        className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-800"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="font-semibold text-primary-dark dark:text-primary-light mb-3">
                                Let&apos;s Connect
                            </h3>
                            <div className="flex justify-center space-x-3">
                                {socialLinks.map((platform, idx) => (
                                    <motion.a
                                        key={idx}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={platform.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 ${platform.color} rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:shadow-xl`}
                                        aria-label={platform.label}
                                    >
                                        {platform.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Fun Fact Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg p-4 border border-amber-200 dark:border-amber-800"
                    >
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-sm">💡</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-1">
                                    Quick Fact
                                </h4>
                                <p className="text-amber-700 dark:text-amber-400 text-sm leading-relaxed">
                                    {randomFact}
                                </p>
                                <button
                                    onClick={refreshFact}
                                    className="text-xs text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 mt-2 transition-colors"
                                >
                                    Show another fact
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Currently Learning Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg p-4 border border-green-200 dark:border-green-800"
                    >
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-sm">📚</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                                    Currently Learning
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {personalInfo.currentlyLearning.map((item, idx) => (
                                        <span 
                                            key={idx}
                                            className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-xs"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Enhanced Bio Content */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:w-2/3"
            >
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-ternary-dark dark:to-gray-800 rounded-2xl shadow-xl p-6 lg:p-8 backdrop-blur-sm">
                    {/* Navigation Tabs */}
                    <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                        {Object.entries({
                            overview: 'Overview',
                            technical: 'Development',
                            cybersecurity: 'Cybersecurity',
                            seeking: 'Career Goals',
                            detailed: 'Full Story'
                        }).map(([key, label]) => (
                            <motion.button
                                key={key}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveTab(key)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    activeTab === key
                                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                                }`}
                            >
                                {label}
                            </motion.button>
                        ))}
                    </div>

                    {/* Bio Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            {tabContent[activeTab].map((bio, index) => (
                                <motion.div
                                    key={bio.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex gap-4 group"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-lg">{bio.emoji}</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-ternary-dark dark:text-ternary-light leading-relaxed text-lg">
                                            {bio.bio}
                                        </p>
                                        {bio.technologies && (
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {bio.technologies.map((tech, idx) => (
                                                    <span 
                                                        key={idx}
                                                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Combined Expertise Section for Overview Tab */}
                            {activeTab === 'overview' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
                                >
                                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/10 dark:to-blue-900/10 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
                                        <div className="flex items-center gap-3 mb-4">
                                            <FiShield className="text-2xl text-indigo-500" />
                                            <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300">
                                                My Unique Value Proposition
                                            </h3>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                                            I bring a <span className="font-semibold text-indigo-600 dark:text-indigo-400">{getCombinedExpertise().strength}</span> - 
                                            practical software development skills combined with formal cybersecurity education.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                                                    <FiCode className="text-indigo-500" />
                                                    Development Skills
                                                </h4>
                                                <ul className="space-y-1">
                                                    {getDevelopmentSkills().slice(0, 5).map((skill, idx) => (
                                                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                                                            • {skill.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                                                    <FiShield className="text-indigo-500" />
                                                    Cybersecurity Knowledge
                                                </h4>
                                                <ul className="space-y-1">
                                                    {getSecuritySkills().slice(0, 5).map((skill, idx) => (
                                                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                                                            • {skill.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Target Roles for Seeking Tab */}
                            {activeTab === 'seeking' && careerPhilosophy.targetRoles && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
                                >
                                    <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-4 flex items-center gap-2">
                                        <FiBriefcase className="text-indigo-500" />
                                        Target Roles
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {careerPhilosophy.targetRoles.map((role, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ scale: 1.02, y: -2 }}
                                                className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-xl p-4 border border-indigo-100 dark:border-indigo-800"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                                                        <FiBriefcase className="text-indigo-600 dark:text-indigo-400" />
                                                    </div>
                                                    <span className="font-semibold text-indigo-700 dark:text-indigo-300">
                                                        {role}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Career Philosophy - Updated for security focus */}
                    {activeTab === 'overview' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
                        >
                            <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-4 flex items-center gap-2">
                                <FiAward className="text-indigo-500" />
                                My Security Philosophy
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                {careerPhilosophy.mission}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {careerPhilosophy.values.map((value, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-xl p-4 border border-indigo-100 dark:border-indigo-800"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl">{value.icon}</span>
                                            <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">
                                                {value.title}
                                            </h4>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {value.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* CTA Section - Updated for security roles */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center"
                    >
                        <div>
                            <h4 className="font-semibold text-primary-dark dark:text-primary-light mb-2">
                                Looking for security-focused developers?
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Let&apos;s discuss how my unique skill set can enhance your team&apos;s security posture
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <FiMail className="text-lg" />
                                Get In Touch
                            </motion.a>
                            <motion.a
                                href="/resume.pdf"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-6 py-3 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300"
                            >
                                <FiDownload className="text-lg" />
                                Download CV
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default AboutMeBio;