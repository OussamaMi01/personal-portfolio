import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const StatsCard = ({ number, label, delay = 0, duration = 2 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(number.replace('+', ''));
        const increment = end / (duration * 60); // 60fps
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);

        return () => clearInterval(timer);
    }, [number, duration]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="text-center group"
        >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group-hover:border-indigo-300 dark:group-hover:border-indigo-600 group-hover:-translate-y-2">
                {/* Animated Number */}
                <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: delay + 0.2 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2"
                >
                    {number.includes('+') ? `${count}+` : count}
                </motion.div>
                
                {/* Label */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: delay + 0.4 }}
                    className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base"
                >
                    {label}
                </motion.p>
                
                {/* Animated underline */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '40px' }}
                    transition={{ duration: 0.5, delay: delay + 0.6 }}
                    className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-3"
                />
            </div>
        </motion.div>
    );
};

export default StatsCard;