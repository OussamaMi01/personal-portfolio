// components/testimonials/TestimonialCard.jsx
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const TestimonialCard = ({ testimonial }) => {
    // Simple star rating
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <FiStar
                key={i}
                className={`text-lg ${
                    i < rating 
                        ? 'text-amber-500 fill-amber-500' 
                        : 'text-gray-300 dark:text-gray-600'
                }`}
            />
        ));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-ternary-dark rounded-2xl shadow-lg p-8 w-full max-w-2xl mx-auto flex flex-col items-center text-center"
        >
            {/* Client Image */}
            {testimonial.image && (
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-indigo-300 dark:border-indigo-600">
                    <Image
                        src={testimonial.image}
                        fill
                        className="rounded-full object-cover"
                        alt={testimonial.name}
                        sizes="80px"
                    />
                </div>
            )}

            {/* Star Rating */}
            {testimonial.rating && (
                <div className="flex items-center gap-1 mb-6">
                    {renderStars(testimonial.rating)}
                </div>
            )}

            {/* Quote */}
            <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Client Info */}
            <div className="text-primary-dark dark:text-primary-light">
                <p className="text-xl font-semibold mb-1">{testimonial.name}</p>
                <p className="text-gray-600 dark:text-gray-400">{testimonial.title}</p>
                {testimonial.company && (
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                        {testimonial.company}
                    </p>
                )}
            </div>
        </motion.div>
    );
};

export default TestimonialCard;