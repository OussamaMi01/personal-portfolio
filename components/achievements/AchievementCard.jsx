// components/achievements/AchievementCard.jsx
import Image from 'next/image';
import { motion } from 'framer-motion';
import { categoryIcons, categoryColors, statusColors } from './constants';

export default function AchievementCard({ item, onClick, t }) {
  const colors = categoryColors[item.category] || categoryColors.course;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
      onClick={() => onClick(item)}
      className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
    >
      {/* Image / Emoji */}
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center overflow-hidden">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <motion.span
            className="text-5xl select-none"
            whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.4 }}
          >
            {item.emoji}
          </motion.span>
        )}
        
        {/* Status badge */}
        <div className={`absolute top-2 right-2 text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[item.status] || statusColors.planned}`}>
          {t(`achievements.status.${item.status}`, item.status)}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        {/* Category pill */}
        <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full w-fit ${colors.text} ${colors.bg} border ${colors.border}`}>
          {categoryIcons[item.category]}
          {t(`achievements.categories.${item.category}`, item.category)}
        </div>

        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug line-clamp-2">
          {t(`achievements.items.${item.id}.title`, item.title)}
        </h3>
        
        <p className="text-xs text-gray-500 dark:text-gray-400">{item.issuer} · {item.date}</p>

        {/* Tags preview */}
        <div className="flex flex-wrap gap-1 mt-auto pt-1">
          {item.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700">
              {tag}
            </span>
          ))}
          {item.tags.length > 2 && (
            <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500 rounded-lg border border-gray-200 dark:border-gray-700">
              +{item.tags.length - 2}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}