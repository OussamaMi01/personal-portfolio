// components/achievements/AchievementsSection.jsx
import { useState, useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import useAchievementsData from '../../hooks/useAchievementsData';
import AchievementModal from './AchievementModal';
import { categoryColors, statusColors } from './constants';

export default function AchievementsSection({ currentRole = 'engineer' }) {
  const { t } = useTranslation('achievements');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  
  const { getAchievementsByRole, categories } = useAchievementsData();

  // Debug logs
  console.log('AchievementsSection - currentRole:', currentRole);

  // Get achievements for the current role using the role field
  const roleAchievements = useMemo(() => {
    const filtered = getAchievementsByRole(currentRole);
    console.log(`Found ${filtered.length} achievements for role: ${currentRole}`);
    return filtered;
  }, [currentRole, getAchievementsByRole]);

  // Get available categories for the current role
  const availableCategories = useMemo(() => {
    const categorySet = new Set(roleAchievements.map(item => item.category));
    const cats = [{ key: 'all' }];
    const allCategories = [
      { key: 'certification' },
      { key: 'badge' },
      { key: 'achievement' },
      { key: 'course' },
    ];
    allCategories.forEach(cat => {
      if (categorySet.has(cat.key)) {
        cats.push(cat);
      }
    });
    return cats;
  }, [roleAchievements]);

  // Filter achievements based on selected category
  const filteredAchievements = useMemo(() => {
    if (activeFilter === 'all') {
      return roleAchievements;
    }
    return roleAchievements.filter(item => item.category === activeFilter);
  }, [activeFilter, roleAchievements]);

  // Get count for a category
  const getCategoryCount = (categoryKey) => {
    if (categoryKey === 'all') return roleAchievements.length;
    return roleAchievements.filter(item => item.category === categoryKey).length;
  };

  // Get category colors
  const getCategoryColors = (category) => {
    const catLower = category.toLowerCase();
    const colorMap = {
      certification: categoryColors.certification,
      badge: categoryColors.badge,
      achievement: categoryColors.achievement,
      course: categoryColors.course,
    };
    return colorMap[catLower] || categoryColors.course;
  };

  // Get status color
  const getStatusColor = (status) => {
    return statusColors[status] || statusColors.planned;
  };

  // Get category label - using translation
  const getCategoryLabel = (key) => {
    const keyLower = key.toLowerCase();
    const labels = {
      all: t('categories.all', 'All'),
      certification: t('categories.certification', 'Certifications'),
      badge: t('categories.badge', 'Badges'),
      achievement: t('categories.achievement', 'Achievements'),
      course: t('categories.course', 'Courses'),
    };
    return labels[keyLower] || key;
  };

  // Get status label - using translation
  const getStatusLabel = (status) => {
    const labels = {
      completed: t('status.completed', 'Completed'),
      'in-progress': t('status.in-progress', 'In Progress'),
      planned: t('status.planned', 'Planned'),
    };
    return labels[status] || status;
  };

  // Get role content - using translation
  const getRoleContent = (role = 'engineer') => {
    const content = {
      engineer: {
        title: t('roles.engineer.title', 'Engineering Achievements'),
        subtitle: t('roles.engineer.subtitle', 'Certifications, badges, and achievements in my software engineering journey'),
        badge: t('roles.engineer.badge', 'Engineering & Tech Credentials')
      },
      creator: {
        title: t('roles.creator.title', 'Creative Achievements'),
        subtitle: t('roles.creator.subtitle', 'Certifications, badges, and achievements in my creative journey'),
        badge: t('roles.creator.badge', 'Creative & Design Credentials')
      }
    };
    return content[role] || content.engineer;
  };

  const roleContent = getRoleContent(currentRole);

  // Show empty state if no achievements
  if (roleAchievements.length === 0) {
    return (
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t('empty.title', 'No Achievements Yet')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('empty.description', 'No achievements available for this role.')}
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Modal */}
      {selectedItem && (
        <AchievementModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}

      {/* Main Section */}
      <section className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 mb-4">
            <span>🏆</span>
            <span className="text-sm font-medium">{roleContent.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              {roleContent.title}
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {roleContent.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {availableCategories.map((category) => {
            const count = getCategoryCount(category.key);
            return (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category.key
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-amber-300'
                }`}
              >
                {getCategoryLabel(category.key)}
                <span className="ml-2 text-xs opacity-75">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAchievements.map((item) => {
            const colors = getCategoryColors(item.category);
            const statusColor = getStatusColor(item.status);
            
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* Card Image/Emoji */}
                <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center relative">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="h-32 w-auto object-contain" />
                  ) : (
                    <span className="text-6xl group-hover:scale-110 transition-transform">
                      {item.emoji || '🏆'}
                    </span>
                  )}
                  <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                    item.status === 'completed' ? 'bg-green-500' :
                    item.status === 'in-progress' ? 'bg-yellow-500' :
                    'bg-gray-400'
                  }`} />
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${colors.text} ${colors.bg} border ${colors.border}`}>
                      {getCategoryLabel(item.category)}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${statusColor}`}>
                      {getStatusLabel(item.status)}
                    </span>
                  </div>

                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {item.issuer} · {item.date}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 2 && (
                      <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">
                        +{item.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 dark:text-gray-400">
              {t('empty.filterEmpty', 'No achievements found in this category for your current role.')}
            </p>
          </div>
        )}
      </section>
    </>
  );
}