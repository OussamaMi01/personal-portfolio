// components/achievements/FilterBar.jsx
import { motion } from 'framer-motion';
import { FiFilter } from 'react-icons/fi';
import { categoryIcons } from './constants';

export default function FilterBar({ categories, activeFilter, onFilterChange, countOf, t }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex flex-wrap justify-center gap-2 mb-10"
    >
      {categories.map(({ key }) => {
        const isActive = activeFilter === key;
        const count = countOf(key);
        return (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              isActive
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-transparent shadow-md shadow-amber-200 dark:shadow-amber-900/30'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700'
            }`}
          >
            {isActive && <FiFilter size={12} />}
            {categoryIcons[key]}
            {t(`achievements.categories.${key}`, key)}
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
              {count}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}