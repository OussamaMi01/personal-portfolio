import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheckCircle, FiAlertCircle, FiInfo, FiBell } from 'react-icons/fi';
import { useEffect } from 'react';

function CustomAlert({ message, type = 'info', onClose, autoClose = 5000 }) {
  // Determine icon, color, and title based on type
  const alertConfig = {
    success: {
      Icon: FiCheckCircle,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      title: 'Success!',
      buttonColor: 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
    },
    error: {
      Icon: FiAlertCircle,
      iconColor: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-200 dark:border-red-800',
      title: 'Error!',
      buttonColor: 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
    },
    warning: {
      Icon: FiAlertCircle,
      iconColor: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      title: 'Warning!',
      buttonColor: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500'
    },
    info: {
      Icon: FiInfo,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      title: 'Information',
      buttonColor: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
    }
  };

  const { Icon, iconColor, bgColor, borderColor, title, buttonColor } = alertConfig[type] || alertConfig.info;

  // Auto-close functionality
  useEffect(() => {
    if (autoClose && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoClose);

      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 transition-all duration-500"
      >
        {/* Enhanced Backdrop with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Alert Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ 
            type: "spring",
            damping: 25,
            stiffness: 300
          }}
          className={`
            relative z-10 max-w-md w-full 
            ${bgColor} ${borderColor}
            rounded-2xl shadow-2xl p-6
            border-2
            transform-gpu
          `}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            aria-label="Close alert"
          >
            <FiX size={20} />
          </button>

          {/* Alert Icon & Content */}
          <div className="flex items-start space-x-4">
            {/* Animated Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.1
              }}
              className="flex-shrink-0"
            >
              <div className={`p-3 rounded-full ${bgColor.replace('50', '100').replace('900/20', '800/30')} border ${borderColor}`}>
                <Icon className={`${iconColor} text-2xl`} />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <motion.h3
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg font-semibold text-gray-900 dark:text-white mb-1"
              >
                {title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
              >
                {message}
              </motion.p>
            </div>
          </div>

          {/* Progress Bar for Auto-close */}
          {autoClose && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: autoClose / 1000, ease: "linear" }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-current opacity-20 origin-left rounded-b-2xl"
            />
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-end space-x-3 mt-6"
          >
            <button
              onClick={onClose}
              className={`
                px-6 py-2.5 text-white font-medium rounded-lg
                transition-all duration-300 transform hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-offset-2
                ${buttonColor}
              `}
            >
              OK
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CustomAlert;