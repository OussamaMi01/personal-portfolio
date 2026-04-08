import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { FiArrowLeft, FiArrowRight, FiAward } from 'react-icons/fi';
import TestimonialCard from './TestimonialCard';
import { useTestimonialsData } from '../../hooks/useTestimonialsData'; 

const TestimonialsSection = () => {
    const { t } = useTranslation('testimonials');
    const testimonials = useTestimonialsData(); // ✅ translated hook
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const xDown = useRef(null);

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
    };

    useEffect(() => {
        if (!testimonials.length) return;
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex(prev => (prev + 1 >= testimonials.length ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex(prev => {
            const next = prev + newDirection;
            if (next < 0) return testimonials.length - 1;
            if (next >= testimonials.length) return 0;
            return next;
        });
    };

    const handleTouchStart = (evt) => { xDown.current = evt.touches[0].clientX; };
    const handleTouchMove = (evt) => {
        if (!xDown.current) return;
        const diff = xDown.current - evt.touches[0].clientX;
        if (Math.abs(diff) > 50) {
            paginate(diff > 0 ? 1 : -1);
            xDown.current = null;
        }
    };

    if (!testimonials.length) return null;

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-ternary-dark">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6">
                        <FiAward className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{t('ui.badge')}</span>
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4">
                        {t('ui.title')} <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{t('ui.titleHighlight')}</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {t('ui.subtitle')}
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative flex items-center justify-center min-h-[400px]"
                    onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div key={currentIndex} custom={direction}
                            variants={variants} initial="enter" animate="center" exit="exit"
                            transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                            className="absolute w-full max-w-2xl px-4">
                            <TestimonialCard testimonial={testimonials[currentIndex]} />
                        </motion.div>
                    </AnimatePresence>

                    <button onClick={() => paginate(-1)}
                        className="absolute left-0 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow text-primary-dark dark:text-primary-light focus:outline-none"
                        aria-label="Previous testimonial">
                        <FiArrowLeft className="text-2xl" />
                    </button>
                    <button onClick={() => paginate(1)}
                        className="absolute right-0 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow text-primary-dark dark:text-primary-light focus:outline-none"
                        aria-label="Next testimonial">
                        <FiArrowRight className="text-2xl" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button key={index}
                            onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-indigo-500 scale-125' : 'bg-gray-300 dark:bg-gray-600 hover:bg-indigo-300'}`}
                        />
                    ))}
                </div>

                {/* Counter */}
                <div className="text-center mt-4">
                    <p className="text-gray-600 dark:text-gray-400">
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{currentIndex + 1}</span>
                        <span className="mx-2">{t('ui.of')}</span>
                        <span className="font-semibold">{testimonials.length}</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;