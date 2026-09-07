// components/achievements/constants.jsx
import {
  HiOutlineCertificate, HiOutlineBadgeCheck,
  HiOutlineTrophy, HiOutlineBookOpen, HiOutlineViewGrid
} from 'react-icons/hi';

export const categoryIcons = {
  all:           <HiOutlineViewGrid size={16} />,
  certification: <HiOutlineCertificate size={16} />,
  badge:         <HiOutlineBadgeCheck size={16} />,
  course:        <HiOutlineBookOpen size={16} />,
};

export const categoryColors = {
  certification: { 
    text: 'text-indigo-600 dark:text-indigo-400', 
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',  
    border: 'border-indigo-200 dark:border-indigo-800' 
  },
  badge: { 
    text: 'text-teal-600 dark:text-teal-400',     
    bg: 'bg-teal-50 dark:bg-teal-900/20',      
    border: 'border-teal-200 dark:border-teal-800'     
  },
  achievement: { 
    text: 'text-amber-600 dark:text-amber-400',   
    bg: 'bg-amber-50 dark:bg-amber-900/20',    
    border: 'border-amber-200 dark:border-amber-800'   
  },
  course: { 
    text: 'text-blue-600 dark:text-blue-400',     
    bg: 'bg-blue-50 dark:bg-blue-900/20',      
    border: 'border-blue-200 dark:border-blue-800'     
  },
};

export const statusColors = {
  completed:   'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400',
  'in-progress':'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400',
  planned:     'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
};