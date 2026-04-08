import { useTranslation } from 'next-i18next';
import { experienceData } from '../data/experienceData';
 
// Keys must EXACTLY match the `company` field in experienceData.js
const SLUG_MAP = {
  'AL Idhafa Company':                      'software-developer-intern',
  'Upwork':                                 'web-developer-upwork',
  'We Are Kasserine - Tunivisions Foundation': 'marketing-manager',
  'Social Media Platforms':                 'freelance-graphic-designer',
  'Independent Projects':                   'digital-content-creator',
};
 
export const useExperienceData = () => {
  const { t } = useTranslation('experience');
  // Guard: if namespace not loaded yet, t() returns the key string
  const raw = t('items', { returnObjects: true });
  const items = typeof raw === 'object' && raw !== null ? raw : {};
 
  return experienceData.map(job => {
    const slug = SLUG_MAP[job.company];
    const tr   = (slug && items[slug]) ? items[slug] : {};
    return {
      ...job,
      title:       tr.title       || job.title,
      type:        tr.type        || job.type,
      location:    tr.location    || job.location,
      description: Array.isArray(tr.description) ? tr.description : job.description,
    };
  });
};
 
export default useExperienceData;
 