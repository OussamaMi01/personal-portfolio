// components/testimonials/TestimonialsSection.jsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiArrowLeft, 
    FiArrowRight, 
    FiStar,
    FiAward
} from 'react-icons/fi';
import TestimonialCard from './TestimonialCard';
import { testimonialsData } from '../../data/testimonialsData';

const TestimonialsSection = () => {
    const [testimonials] = useState(testimonialsData);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const xDown = useRef(null);

    // Animation variants
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    };

    // Auto-play functionality - moved paginate logic inside useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                setDirection(1);
                return nextIndex >= testimonials.length ? 0 : nextIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]); // Only depend on testimonials.length

    // Separate paginate function for manual navigation
    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) return testimonials.length - 1;
            if (nextIndex >= testimonials.length) return 0;
            return nextIndex;
        });
    };

    // Touch handlers
    const handleTouchStart = (evt) => {
        const firstTouch = evt.touches[0];
        xDown.current = firstTouch.clientX;
    };

    const handleTouchMove = (evt) => {
        if (!xDown.current) return;

        const xUp = evt.touches[0].clientX;
        const xDiff = xDown.current - xUp;

        if (Math.abs(xDiff) > 50) {
            if (xDiff > 0) {
                paginate(1);
            } else {
                paginate(-1);
            }
            xDown.current = null;
        }
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-ternary-dark">
            <div className="container mx-auto px-4">
                {/* Header - Similar to other sections */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6"
                    >
                        <FiAward className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Testimonials</span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4">
                        What Clients Say
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Hear directly from those I&apos;ve collaborated with
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative flex items-center justify-center min-h-[400px]"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: 'spring', stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            className="absolute w-full max-w-2xl px-4"
                        >
                            <TestimonialCard testimonial={testimonials[currentIndex]} />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-0 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow text-primary-dark dark:text-primary-light focus:outline-none"
                        aria-label="Previous testimonial"
                    >
                        <FiArrowLeft className="text-2xl" />
                    </button>
                    
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-0 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow text-primary-dark dark:text-primary-light focus:outline-none"
                        aria-label="Next testimonial"
                    >
                        <FiArrowRight className="text-2xl" />
                    </button>
                </div>

                {/* Progress Dots */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex 
                                    ? 'bg-indigo-500 scale-125' 
                                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-indigo-300'
                            }`}
                        />
                    ))}
                </div>

                {/* Counter */}
                <div className="text-center mt-4">
                    <p className="text-gray-600 dark:text-gray-400">
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                            {currentIndex + 1}
                        </span>
                        <span className="mx-2">of</span>
                        <span className="font-semibold">
                            {testimonials.length}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;