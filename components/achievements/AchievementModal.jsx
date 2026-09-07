// components/achievements/AchievementModal.jsx
import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'next-i18next';
import { categoryIcons, categoryColors } from './constants';

export default function AchievementModal({ item, onClose }) {
  const { t } = useTranslation('achievements');
  const colors = categoryColors[item.category] || categoryColors.course;

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-lg max-h-[85vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-start gap-4 p-5 border-b border-gray-100 dark:border-gray-700">
          <div className="flex-shrink-0 w-16 h-16 relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl overflow-hidden flex items-center justify-center">
            {item.image ? (
              <Image src={item.image} alt={item.title} fill className="object-contain p-2" sizes="64px" />
            ) : (
              <span className="text-3xl">{item.emoji}</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${colors.text} ${colors.bg} border ${colors.border}`}>
              {categoryIcons[item.category]}
              {item.category}
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-tight">
              {item.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{item.issuer}</p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 p-5 border-b border-gray-100 dark:border-gray-700">
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 text-center">
            <p className="text-base font-semibold text-gray-900 dark:text-gray-100">{item.date}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('modal.year', 'Year')}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 text-center">
            <p className="text-base font-semibold text-gray-900 dark:text-gray-100">{item.status}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('modal.status', 'Status')}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 text-center">
            <p className="text-base font-semibold text-gray-900 dark:text-gray-100">{item.tags.length}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('modal.skills', 'Skills')}</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 space-y-5">
          {/* Description */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
              {t('modal.about', 'About')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
              {t('modal.skillsCovered', 'Skills covered')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Verify link */}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 px-4 py-2.5 border border-indigo-200 dark:border-indigo-800 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
            >
              <FiExternalLink size={14} />
              {t('modal.verify', 'Verify credential')}
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}