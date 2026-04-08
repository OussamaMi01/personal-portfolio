// pages/projects/[slug].js
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { 
    FiClock, FiTag, FiArrowLeft, FiExternalLink, FiPhone, FiGlobe, 
    FiPlayCircle, FiCalendar, FiCheckCircle, FiAward, FiZap, FiAlertCircle,
    FiImage, FiInfo, FiGithub, FiLink, FiEye, FiStar, FiUsers, FiCode
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';
import RelatedProjects from '../../components/projects/RelatedProjects';
import VideoPlayerModal from '../../components/shared/VideoPlayerModal';

function ProjectSingle(props) {
    const project = props.project;

    // State for video player modal
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideoEmbedUrl, setCurrentVideoEmbedUrl] = useState('');
    // State for image lightbox
    const [selectedImage, setSelectedImage] = useState(null);
    const [showLightbox, setShowLightbox] = useState(false);

    const openVideoModal = (embedUrl) => {
        setCurrentVideoEmbedUrl(embedUrl);
        setShowVideoModal(true);
    };

    const closeVideoModal = () => {
        setShowVideoModal(false);
        setCurrentVideoEmbedUrl('');
    };

    const openLightbox = (image) => {
        setSelectedImage(image);
        setShowLightbox(true);
    };

    const closeLightbox = () => {
        setShowLightbox(false);
        setSelectedImage(null);
    };

    // Get live demo URL - prioritize liveLinks.demo, then website, then GitHub Pages
    const getLiveDemoUrl = () => {
        if (project.liveLinks?.demo) return project.liveLinks.demo;
        if (project.ProjectInfo?.SocialLinks?.website) return project.ProjectInfo.SocialLinks.website;
        if (project.liveDemoUrl) return project.liveDemoUrl;
        return null;
    };

    const liveDemoUrl = getLiveDemoUrl();

    // Get GitHub URL
    const getGitHubUrl = () => {
        if (project.liveLinks?.github) return project.liveLinks.github;
        if (project.ProjectInfo?.SocialLinks?.github) return project.ProjectInfo.SocialLinks.github;
        return null;
    };

    const githubUrl = getGitHubUrl();

    // Get Behance URL
    const getBehanceUrl = () => {
        if (project.liveLinks?.behance) return project.liveLinks.behance;
        if (project.ProjectInfo?.SocialLinks?.behance) return project.ProjectInfo.SocialLinks.behance;
        return null;
    };

    const behanceUrl = getBehanceUrl();

    return (
        <div className="container mx-auto px-4 sm:px-6 py-8">
            <PagesMetaHead title={project.ProjectHeader?.title || project.title} />

            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8 mb-6"
            >
                <Link
                    href="/projects"
                    className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                >
                    <FiArrowLeft className="mr-2" /> Back to Projects
                </Link>
            </motion.div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-10 text-center lg:text-left"
            >
                <h1 className="font-general-semibold text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4">
                    {project.ProjectHeader?.title || project.title}
                </h1>

                {/* Status and Meta Info */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                            project.status === 'done'
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                                : project.status === 'in-progress'
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                                : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                        }`}
                    >
                        {project.status === 'done' ? (
                            <FiCheckCircle className="mr-2" />
                        ) : project.status === 'in-progress' ? (
                            <FiClock className="mr-2 animate-spin-slow" />
                        ) : (
                            <FiAlertCircle className="mr-2" />
                        )}
                        <span>
                            {project.status === 'done'
                                ? 'Completed'
                                : project.status === 'in-progress'
                                ? 'In Progress'
                                : 'Planned'}
                        </span>
                    </motion.div>

                    {/* Publish Date */}
                    {project.ProjectHeader?.publishDate && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.15 }}
                            className="flex items-center bg-gray-100 dark:bg-ternary-dark px-4 py-2 rounded-full shadow-md"
                        >
                            <FiCalendar className="text-lg text-ternary-dark dark:text-ternary-light mr-2" />
                            <span className="font-general-medium text-primary-dark dark:text-primary-light">
                                {project.ProjectHeader.publishDate}
                            </span>
                        </motion.div>
                    )}
                </div>

                {/* Tags Section */}
                {project.ProjectHeader?.tags && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="mb-6"
                    >
                        <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                            {Array.isArray(project.ProjectHeader.tags) ? (
                                project.ProjectHeader.tags.map((tag, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
                                        whileHover={{
                                            y: -2,
                                            scale: 1.05,
                                            boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.3)"
                                        }}
                                        className="group relative px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-800 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
                                    >
                                        <FiTag className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
                                        {tag}
                                    </motion.span>
                                ))
                            ) : (
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ y: -2, scale: 1.05 }}
                                    className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-800 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
                                >
                                    <FiTag className="w-3.5 h-3.5" />
                                    {project.ProjectHeader.tags}
                                </motion.span>
                            )}
                        </div>
                    </motion.div>
                )}

                {/* Progress Bar for In-Progress Projects */}
                {project.status === 'in-progress' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="mb-6 max-w-md mx-auto lg:mx-0"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <FiZap className="text-amber-500" />
                                Project Progress
                            </span>
                            <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                                {project.progress || 75}%
                            </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${project.progress || 75}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                            />
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                            Estimated completion: {project.estimatedCompletion || 'Q2 2026'}
                        </p>
                    </motion.div>
                )}

                {/* Completion Badge for Done Projects */}
                {project.status === 'done' && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-full border border-green-200 dark:border-green-800"
                    >
                        <FiAward className="text-green-600 dark:text-green-400" />
                        <span className="text-sm font-medium text-green-700 dark:text-green-300">
                            Successfully completed
                        </span>
                    </motion.div>
                )}

                <div className="border-b border-gray-200 dark:border-gray-700 mb-8"></div>
            </motion.div>

            {/* ========== OVERVIEW SECTION (NEW) ========== */}
            {project.overview && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-8 border border-indigo-100 dark:border-gray-700"
                >
                    {/* Summary */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <FiInfo className="text-2xl text-indigo-500" />
                            <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light">
                                Project Overview
                            </h2>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {project.overview.summary}
                        </p>
                    </div>

                    {/* Key Features */}
                    {project.overview.keyFeatures && project.overview.keyFeatures.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-primary-dark dark:text-primary-light mb-3 flex items-center gap-2">
                                <FiStar className="text-amber-500" />
                                Key Features
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.overview.keyFeatures.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                        <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Problem & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {project.overview.problemSolved && (
                            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border-l-4 border-red-500">
                                <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                                    <FiAlertCircle className="text-red-500" />
                                    Problem Solved
                                </h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    {project.overview.problemSolved}
                                </p>
                            </div>
                        )}
                        {project.overview.solution && (
                            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border-l-4 border-green-500">
                                <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
                                    <FiCode className="text-green-500" />
                                    Solution
                                </h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    {project.overview.solution}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Impact */}
                    {project.overview.impact && (
                        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4">
                            <h3 className="font-semibold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
                                <FiAward className="text-amber-500" />
                                Impact & Results
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                {project.overview.impact}
                            </p>
                        </div>
                    )}
                </motion.div>
            )}

            {/* ========== QUICK LINKS SECTION ========== */}
            {(liveDemoUrl || githubUrl || behanceUrl) && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="mb-12"
                >
                    <div className="flex flex-wrap gap-4 justify-center">
                        {liveDemoUrl && (
                            <a
                                href={liveDemoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                            >
                                <FiEye className="w-5 h-5" />
                                Live Demo
                                <FiExternalLink className="w-4 h-4" />
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                            >
                                <FiGithub className="w-5 h-5" />
                                GitHub Repository
                            </a>
                        )}
                        {behanceUrl && (
                            <a
                                href={behanceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                            >
                                <FiExternalLink className="w-5 h-5" />
                                View on Behance
                            </a>
                        )}
                    </div>
                </motion.div>
            )}

            {/* ========== SCREENSHOT GALLERY (NEW) ========== */}
            {project.screenshots && project.screenshots.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light flex items-center gap-2">
                            <FiImage className="text-indigo-500" />
                            Screenshots & Gallery
                        </h2>
                       
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.screenshots.map((img, index) => (
                            <motion.div
                                key={img.id || index}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                onClick={() => openLightbox(img)}
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={img.img}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        alt={img.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={90}
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <FiEye className="text-white text-3xl" />
                                    </div>
                                </div>
                                <div className="p-3 bg-white dark:bg-ternary-dark">
                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                                        {img.title}
                                    </p>
                                    {img.description && (
                                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">
                                            {img.description}
                                        </p>
                                    )}
                                    {img.type && (
                                        <span className="inline-block mt-1 px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs text-center w-full">
                                            {img.type}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Legacy ProjectImages fallback */}
            {!project.screenshots && project.ProjectImages && project.ProjectImages.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light flex items-center gap-2">
                            <FiImage className="text-indigo-500" />
                            Screenshots & Gallery
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.ProjectImages.map((img) => (
                            <motion.div
                                key={img.id}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                onClick={() => openLightbox(img)}
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={img.img}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        alt={img.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={90}
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <FiEye className="text-white text-3xl" />
                                    </div>
                                </div>
                                <div className="p-3 bg-white dark:bg-ternary-dark">
                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                                        {img.title}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Video Gallery */}
            {project.ProjectVideos && project.ProjectVideos.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                        <FiPlayCircle className="text-indigo-500" />
                        Video Gallery
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.ProjectVideos.map((video) => (
                            <div
                                key={video.id}
                                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                                onClick={() => openVideoModal(video.driveEmbedUrl)}
                            >
                                <div className="relative aspect-video">
                                    <Image
                                        src={video.thumbnail}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        alt={video.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={90}
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <FiPlayCircle className="text-white text-6xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent text-white text-center rounded-b-2xl">
                                    <p className="font-general-medium text-sm">{video.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Project Info */}
            <div className="flex flex-col lg:flex-row gap-10 mb-20">
                {/* Left Column - Project Details */}
                <motion.div
                    className="w-full lg:w-2/3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <div className="bg-white dark:bg-ternary-dark p-6 rounded-2xl shadow-md">
                        <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                            {project.ProjectInfo?.ProjectDetailsHeading || "Project Details"}
                        </h2>

                        {project.ProjectInfo?.ProjectDetails && project.ProjectInfo.ProjectDetails.map((detail) => (
                            <p
                                key={detail.id}
                                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light leading-relaxed"
                            >
                                {detail.details}
                            </p>
                        ))}

                        {/* Add Behance Link button here for Behance projects */}
                        {project.isBehanceProject && project.behanceUrl && (
                            <div className="mt-8 text-center">
                                <a
                                    href={project.behanceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg"
                                >
                                    View Full Project on Behance <FiExternalLink className="ml-2" />
                                </a>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Right Column - Project Meta */}
                <motion.div
                    className="w-full lg:w-1/3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <div className="sticky top-6 space-y-6">
                        {/* Technologies */}
                        {project.ProjectInfo?.Technologies && project.ProjectInfo.Technologies.length > 0 && project.ProjectInfo.Technologies[0].techs && project.ProjectInfo.Technologies[0].techs.length > 0 && (
                            <div className="bg-white dark:bg-ternary-dark p-6 rounded-2xl shadow-md">
                                <h3 className="text-xl font-semibold text-secondary-dark dark:text-secondary-light mb-4">
                                    {project.ProjectInfo.Technologies[0].title || "Technologies Used"}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.ProjectInfo.Technologies[0].techs.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Objectives */}
                        {project.ProjectInfo?.ObjectivesDetails && (
                            <div className="bg-white dark:bg-ternary-dark p-6 rounded-2xl shadow-md">
                                <h3 className="text-xl font-semibold text-secondary-dark dark:text-secondary-light mb-4">
                                    {project.ProjectInfo.ObjectivesHeading || "Project Objectives"}
                                </h3>
                                <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                                    {project.ProjectInfo.ObjectivesDetails}
                                </p>
                            </div>
                        )}

                        {/* Role & Category */}
                        <div className="bg-white dark:bg-ternary-dark p-6 rounded-2xl shadow-md">
                            <h3 className="text-xl font-semibold text-secondary-dark dark:text-secondary-light mb-4">
                                Project Info
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <FiUsers className="text-indigo-500 mt-1" />
                                    <div>
                                        <span className="font-medium text-gray-700 dark:text-gray-300">Role: </span>
                                        <span className="text-gray-600 dark:text-gray-400">
                                            {project.role?.join(', ') || 'Developer'}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <FiTag className="text-indigo-500 mt-1" />
                                    <div>
                                        <span className="font-medium text-gray-700 dark:text-gray-300">Category: </span>
                                        <span className="text-gray-600 dark:text-gray-400">
                                            {project.category || 'Full-Stack'}
                                        </span>
                                    </div>
                                </div>
                                {project.ProjectHeader?.publishDate && (
                                    <div className="flex items-start gap-2">
                                        <FiCalendar className="text-indigo-500 mt-1" />
                                        <div>
                                            <span className="font-medium text-gray-700 dark:text-gray-300">Released: </span>
                                            <span className="text-gray-600 dark:text-gray-400">
                                                {project.ProjectHeader.publishDate}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Related Projects */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-20"
            >
                <RelatedProjects currentProjectId={project.id} />
            </motion.div>

            {/* Video Player Modal */}
            <AnimatePresence>
                {showVideoModal && (
                    <VideoPlayerModal
                        videoUrl={currentVideoEmbedUrl}
                        onClose={closeVideoModal}
                    />
                )}
            </AnimatePresence>

            {/* Image Lightbox Modal */}
            <AnimatePresence>
                {showLightbox && selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl max-h-[90vh] w-full h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.img}
                                alt={selectedImage.title}
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                quality={95}
                            />
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            {selectedImage.title && (
                                <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2">
                                    <p className="text-sm">{selectedImage.title}</p>
                                    {selectedImage.description && (
                                        <p className="text-xs text-gray-300">{selectedImage.description}</p>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export async function getServerSideProps({ query }) {
    const { slug } = query;
    const project = projectsData.find(
        (p) => p.url === slug || p.id === slug
    );

    if (!project) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            project,
        },
    };
}

export default ProjectSingle;