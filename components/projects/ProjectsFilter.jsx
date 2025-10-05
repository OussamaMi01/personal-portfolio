// components/projects/ProjectsFilter.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiX } from 'react-icons/fi';

const selectOptions = [
  'All Projects',
  'Web Application',
  'Mobile Application',
  'UI/UX Design',
  'Branding',
  'Digital Art',
  'Video Production',
  'Software Engineering'
];

function ProjectsFilter({ selectProject, setSelectProject }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleSelect = (option) => {
    setSelectProject(option === 'All Projects' ? '' : option);
    setIsOpen(false);
  };

  const clearFilter = (e) => {
    e.stopPropagation();
    setSelectProject('');
  };

  return (
    <div className="relative w-full sm:w-64">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={toggleDropdown}
        className={`
          flex items-center justify-between
          pl-4 pr-3 py-3
          w-full
          border-2
          border-gray-200
          dark:border-gray-700
          rounded-xl
          text-md
          bg-white
          dark:bg-ternary-dark  
          text-gray-800
          dark:text-gray-100
          hover:border-indigo-300
          dark:hover:border-indigo-600
          transition-all duration-300
          ${isOpen ? 'ring-2 ring-indigo-500 border-indigo-500' : ''}
        `}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate font-medium">
          {selectProject || 'Filter by Category'}
        </span>
        
        <div className="flex items-center ml-2">
          {selectProject && (
            <motion.button 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={clearFilter}
              className="mr-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition p-1 rounded"
              aria-label="Clear filter"
            >
              <FiX size={16} />
            </motion.button>
          )}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiChevronDown className="text-gray-400" />
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              absolute
              z-50
              mt-2
              w-full
              bg-white
              dark:bg-ternary-dark  
              border-2
              border-gray-200
              dark:border-gray-700
              rounded-xl
              shadow-2xl
              overflow-hidden
            "
          >
            <ul className="py-1 max-h-60 overflow-auto">
              {selectOptions.map((option, index) => (
                <motion.li 
                  key={option}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => handleSelect(option)}
                    className={`
                      w-full
                      px-4
                      py-3
                      text-left
                      text-md
                      font-medium
                      transition-all duration-200
                      ${
                        selectProject === (option === 'All Projects' ? '' : option)
                          ? 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 border-r-2 border-indigo-500'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }
                    `}
                    role="option"
                    aria-selected={selectProject === (option === 'All Projects' ? '' : option)}
                  >
                    {option}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectsFilter;