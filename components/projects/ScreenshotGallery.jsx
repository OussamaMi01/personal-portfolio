// components/projects/ScreenshotGallery.jsx
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ScreenshotGallery = ({ screenshots }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!screenshots || screenshots.length === 0) return null;

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setSelectedImage(screenshots[index]);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const next = (currentIndex + 1) % screenshots.length;
        setCurrentIndex(next);
        setSelectedImage(screenshots[next]);
    };

    const prevImage = () => {
        const prev = (currentIndex - 1 + screenshots.length) % screenshots.length;
        setCurrentIndex(prev);
        setSelectedImage(screenshots[prev]);
    };

    return (
        <>
            {/* Gallery Grid */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                    📸 Project Screenshots
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {screenshots.map((screenshot, index) => (
                        <motion.div
                            key={screenshot.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-ternary-dark"
                            onClick={() => openLightbox(index)}
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={screenshot.img}
                                    alt={screenshot.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                                    <p className="text-white text-sm font-medium">{screenshot.title}</p>
                                    <FiZoomIn className="text-white text-xl" />
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-primary-dark dark:text-primary-light mb-1">
                                    {screenshot.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {screenshot.description}
                                </p>
                                {screenshot.type && (
                                    <span className="inline-block mt-2 px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs">
                                        {screenshot.type}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
                        >
                            <FiX className="text-3xl" />
                        </button>
                        
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
                        >
                            <FiChevronLeft className="text-3xl" />
                        </button>
                        
                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
                        >
                            <FiChevronRight className="text-3xl" />
                        </button>
                        
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-6xl max-h-[90vh] w-full h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={selectedImage.img}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    quality={100}
                                />
                            </div>
                            <div className="absolute bottom-6 left-0 right-0 text-center text-white bg-black/50 py-3 px-4 mx-auto w-fit rounded-full backdrop-blur-sm">
                                <p className="font-medium">{selectedImage.title}</p>
                                <p className="text-sm text-gray-300">{selectedImage.description}</p>
                            </div>
                        </motion.div>
                        
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                            {screenshots.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); setSelectedImage(screenshots[idx]); }}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ScreenshotGallery;