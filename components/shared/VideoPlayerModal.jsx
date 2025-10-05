// components/shared/VideoPlayerModal.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMaximize, FiMinimize, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';

function VideoPlayerModal({ videoUrl, onClose, title = "Video Presentation" }) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const iframeRef = useRef(null);

    useEffect(() => {
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            iframeRef.current?.requestFullscreen?.();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen?.();
            setIsFullscreen(false);
        }
    };

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!videoUrl) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-all duration-300"
                onClick={handleBackdropClick}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: -20 }}
                    transition={{ 
                        type: "spring",
                        damping: 25,
                        stiffness: 300
                    }}
                    className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-2 md:p-4 max-w-6xl w-11/12 mx-auto border border-gray-200 dark:border-gray-700"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
                            {title}
                        </h3>
                        
                        <div className="flex items-center gap-3">
                            {/* Mute Toggle */}
                            <button
                                onClick={() => setIsMuted(!isMuted)}
                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                                aria-label={isMuted ? "Unmute video" : "Mute video"}
                            >
                                {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
                            </button>

                            {/* Fullscreen Toggle */}
                            <button
                                onClick={toggleFullscreen}
                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                            >
                                {isFullscreen ? <FiMinimize size={20} /> : <FiMaximize size={20} />}
                            </button>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                                aria-label="Close video player"
                            >
                                <FiX size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Video Container */}
                    <div className="relative rounded-lg overflow-hidden bg-black">
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                                    <p className="text-white text-sm">Loading video...</p>
                                </div>
                            </div>
                        )}

                        {/* Video Player */}
                        <div 
                            className="relative"
                            style={{ paddingBottom: '56.25%', height: 0 }}
                        >
                            <iframe
                                ref={iframeRef}
                                src={`${videoUrl}${isMuted ? '&mute=1' : ''}`}
                                title="Video Player"
                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                allowFullScreen
                                onLoad={handleIframeLoad}
                                loading="eager"
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                            <p>Click the fullscreen button for better viewing experience</p>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={onClose}
                                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 font-medium"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={toggleFullscreen}
                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200 font-medium"
                                >
                                    {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default VideoPlayerModal;