import Image from 'next/image';
import { useState} from 'react';
import Link from 'next/link';
import { FiClock, FiTag, FiArrowLeft, FiExternalLink, FiPhone, FiGlobe, FiPlayCircle } from 'react-icons/fi'; // Import FiPlayCircle
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';
import RelatedProjects from '../../components/projects/RelatedProjects';
import VideoPlayerModal from '../../components/shared/VideoPlayerModal'; 

function ProjectSingle(props) {
    const project = props.project;

    // State for video player modal
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideoEmbedUrl, setCurrentVideoEmbedUrl] = useState('');

    const openVideoModal = (embedUrl) => {
        setCurrentVideoEmbedUrl(embedUrl);
        setShowVideoModal(true);
    };

    const closeVideoModal = () => {
        setShowVideoModal(false);
        setCurrentVideoEmbedUrl(''); // Clear URL on close
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 py-8">
            <PagesMetaHead title={project.ProjectHeader.title} />

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
                    {project.ProjectHeader.title}
                </h1>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                    {project.ProjectHeader.publishDate && (
                        <div className="flex items-center bg-gray-100 dark:bg-ternary-dark px-3 py-1 rounded-full">
                            <FiClock className="text-lg text-ternary-dark dark:text-ternary-light mr-2" />
                            <span className="font-general-medium text-primary-dark dark:text-primary-light">
                                {project.ProjectHeader.publishDate}
                            </span>
                        </div>
                    )}
                    {project.ProjectHeader.tags && (
                         <div className="flex items-center bg-gray-100 dark:bg-ternary-dark px-3 py-1 rounded-full">
                            <FiTag className="text-lg text-ternary-dark dark:text-ternary-light mr-2" />
                            <span className="font-general-medium text-primary-dark dark:text-primary-light">
                                {Array.isArray(project.ProjectHeader.tags) ? project.ProjectHeader.tags.join(', ') : project.ProjectHeader.tags}
                            </span>
                        </div>
                    )}
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 mb-8"></div>
            </motion.div>

            {/* Gallery (for images) */}
            {project.ProjectImages && project.ProjectImages.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                >
                    {project.ProjectImages.map((img) => (
                        <div
                            key={img.id}
                            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Image
                                src={img.img}
                                className="w-full h-auto object-cover cursor-pointer transform hover:scale-105 transition-transform duration-500"
                                alt={img.title}
                                layout="responsive"
                                width={800}
                                height={500}
                                quality={90}
                            />
                        </div>
                    ))}
                </motion.div>
            )}

            {/* Video Gallery (NEW SECTION) */}
            {project.ProjectVideos && project.ProjectVideos.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                        Video Gallery
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.ProjectVideos.map((video) => (
                            <div
                                key={video.id}
                                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                                onClick={() => openVideoModal(video.driveEmbedUrl)}
                            >
                                <Image
                                    src={video.thumbnail}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    alt={video.title}
                                    layout="responsive"
                                    width={800}
                                    height={450} // Standard 16:9 aspect ratio for video thumbnails
                                    quality={90}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <FiPlayCircle className="text-white text-6xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent text-white text-center rounded-b-2xl">
                                    <p className="font-general-medium text-lg">{video.title}</p>
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
                            {project.ProjectInfo.ProjectDetailsHeading || "Project Overview"}
                        </h2>

                        {project.ProjectInfo.ProjectDetails && project.ProjectInfo.ProjectDetails.map((detail) => (
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
                        {/* Client Details (only for internal projects with CompanyInfo) */}
                        {!project.isBehanceProject && project.ProjectInfo.CompanyInfo && project.ProjectInfo.CompanyInfo.length > 0 && (
                            <div className="bg-white dark:bg-ternary-dark p-6 rounded-2xl shadow-md">
                                <h3 className="text-xl font-semibold text-secondary-dark dark:text-secondary-light mb-4 flex items-center">
                                    <FiExternalLink className="mr-2" />
                                    {project.ProjectInfo.ClientHeading}
                                </h3>
                                <ul className="space-y-3">
                                    {project.ProjectInfo.CompanyInfo.map((info) => (
                                        <li
                                            className="font-general-regular text-ternary-dark dark:text-ternary-light flex items-start"
                                            key={info.id}
                                        >
                                            <span className="font-medium w-24">{info.title}:</span>
                                            {info.title === 'Website' && info.details ? (
                                                <a
                                                    href={info.details}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-indigo-600 dark:text-indigo-400 hover:underline ml-2 flex items-center"
                                                >
                                                    <FiGlobe className="mr-1" /> {info.details.replace('https://', '')}
                                                </a>
                                            ) : info.title === 'Phone' && info.details ? (
                                                <Link
                                                    href={`tel:${info.details}`}
                                                    className="text-ternary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-400 ml-2 flex items-center"
                                                >
                                                    <FiPhone className="mr-1" /> {info.details}
                                                </Link>
                                            ) : (
                                                <span className="ml-2">{info.details}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Technologies */}
                        {project.ProjectInfo.Technologies && project.ProjectInfo.Technologies.length > 0 && project.ProjectInfo.Technologies[0].techs && project.ProjectInfo.Technologies[0].techs.length > 0 && (
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
                        {project.ProjectInfo.ObjectivesDetails && (
                            <div className="bg-white dark:bg-ternary-dark p-6 rounded-2xl shadow-md">
                                <h3 className="text-xl font-semibold text-secondary-dark dark:text-secondary-light mb-4">
                                    {project.ProjectInfo.ObjectivesHeading || "Project Objectives"}
                                </h3>
                                <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                                    {project.ProjectInfo.ObjectivesDetails}
                                </p>
                            </div>
                        )}

                        {/* Social Links (GitHub, Website, Behance - consolidated) */}
                        {project.ProjectInfo.SocialLinks && (project.ProjectInfo.SocialLinks.github || project.ProjectInfo.SocialLinks.website || project.ProjectInfo.SocialLinks.behance) && (
                            <div className="bg-white dark:bg-ternary-dark p-6 rounded-2xl shadow-md">
                                <h3 className="text-xl font-semibold text-secondary-dark dark:text-secondary-light mb-4">
                                    Project Links
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {project.ProjectInfo.SocialLinks.github && (
                                        <a
                                            href={project.ProjectInfo.SocialLinks.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg flex items-center hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.475.087.68-.206.68-.458 0-.225-.007-.756-.011-1.488-2.775.605-3.363-1.34-3.363-1.34-.454-1.15-.11-1.458-.11-1.458.387-.27.03-.264.03-.264.429-.297.042-.29 0-.472-1.285-.924-1.285-.924-2.78-.588-3.328-1.55-.264-.537.12-.537.12.03-.12.875.87.537.87.537 1.25.1 2.05.786 2.3 1.517.1.378.07.72.07.868 0 .193-.153.424-.316.551-2.905-.33-5.952-1.464-5.952-6.59 0-1.45.52-2.632 1.37-3.555-.145-.333-.63-1.683.125-3.504 0 0 1.12-.355 3.665 1.346 1.06-.295 2.18-.444 3.3-.448 1.115.004 2.235.153 3.3.448 2.545-1.701 3.665-1.346 3.665-1.346.756 1.82.27 3.17.125 3.504.85.923 1.37 2.105 1.37 3.555 0 5.13-3.05 6.257-5.965 6.58-.1.085-.2.23-.2.658 0 .47.01.954 0 1.287 0 .25.205.545.68.458C19.145 20.2 22 16.446 22 12.017 22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
                                            </svg>
                                            GitHub
                                        </a>
                                    )}
                                    {project.ProjectInfo.SocialLinks.website && (
                                        <a
                                            href={project.ProjectInfo.SocialLinks.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg flex items-center hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
                                        >
                                            <FiGlobe className="w-5 h-5 mr-2" />
                                            Website
                                        </a>
                                    )}
                                    {project.ProjectInfo.SocialLinks.behance && (
                                        <a
                                            href={project.ProjectInfo.SocialLinks.behance}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg flex items-center hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M22.75 14.8c0 1.2-.5 2.1-1.3 2.7-.9.6-2.1.9-3.7.9h-3.4v4.5H10V18.4H6.6v4.5H2V2.4h14.7c1.6 0 2.9.2 3.8.7.9.5 1.5 1.2 1.9 2.1.4.9.6 1.9.6 3.1 0 1-.2 1.9-.6 2.7-.4.8-1 1.4-1.8 1.8-.8.4-1.7.6-2.8.6zm-3.8-6.1c0-.9-.2-1.6-.6-2-.4-.4-.9-.6-1.6-.6h-3.6v5.2h3.6c.7 0 1.2-.2 1.6-.6.4-.4.6-.9.6-1.4z" />
                                            </svg>
                                            Behance
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
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
        </div>
    );
}

// getServerSideProps remains the same as the last correct version
export async function getServerSideProps({ query }) {
    const { id } = query;
    const project = projectsData.find(
        (p) => p.id === id
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