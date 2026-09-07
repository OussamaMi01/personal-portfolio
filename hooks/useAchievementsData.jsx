// hooks/useAchievementsData.js
import { useTranslation } from 'next-i18next';
import { achievementsData, achievementCategories } from '../data/achievementsData';

// Keys must EXACTLY match the `id` field in achievementsData.js
const SLUG_MAP = {
  'cybersecurity': 'cybersecurity',
  'aws-cloud-essentials': 'aws-cloud-essentials',
  'auth-authorization': 'auth-authorization',
  'intro-to-kubernetes': 'intro-to-kubernetes',
  'content-creation': 'content-creation',
  'graphic-design': 'graphic-design',
  'digital-marketing': 'digital-marketing',
  'video-editing': 'video-editing',
};

export const useAchievementsData = () => {
  const { t } = useTranslation('achievements');
  
  // Guard: if namespace not loaded yet, t() returns the key string
  const raw = t('items', { returnObjects: true });
  const items = typeof raw === 'object' && raw !== null ? raw : {};

  // Map achievements with translations
  const translatedAchievements = achievementsData.map(achievement => {
    const slug = SLUG_MAP[achievement.id];
    const tr = (slug && items[slug]) ? items[slug] : {};
    
    return {
      ...achievement,
      title: tr.title || achievement.title,
      description: tr.description || achievement.description,
      category: tr.category || achievement.category,
      status: tr.status || achievement.status,
      tags: Array.isArray(tr.tags) ? tr.tags : achievement.tags,
      issuer: tr.issuer || achievement.issuer,
      date: tr.date || achievement.date,
      // Keep the role array from the data
      role: achievement.role || [],
    };
  });

  // Filter achievements by role
  const getAchievementsByRole = (role = 'engineer') => {
    return translatedAchievements.filter(item => 
      item.role && item.role.includes(role)
    );
  };

  // Get all achievements (no filter)
  const getAllAchievements = () => translatedAchievements;

  return {
    achievements: translatedAchievements,
    getAchievementsByRole,
    getAllAchievements,
    categories: achievementCategories,
  };
};

export default useAchievementsData;