import { useTranslation } from 'next-i18next';
import { servicesData } from '../data/servicesData';
 
// Keys must EXACTLY match the `title` field in servicesData.js
const SLUG_MAP = {
  'Full-Stack Development':         'full-stack-development',
  'Mobile App Development':         'mobile-app-development',
  'AI & Machine Learning':          'ai-machine-learning',
  'Data Analytics & Visualization': 'data-analytics-visualization',
  'Digital Marketing Strategy':     'digital-marketing-strategy',
  'UI/UX Design & Branding':        'ui-ux-design-branding',
  'E-Commerce Solutions':           'ecommerce-solutions',
  'Content Creation & Strategy':    'content-creation-strategy',
  'Cloud Infrastructure & DevOps':  'cloud-infrastructure-devops',
};
 
export const useServicesData = () => {
  const { t } = useTranslation('services');
  const raw = t('items', { returnObjects: true });
  const items = typeof raw === 'object' && raw !== null ? raw : {};
 
  return servicesData.map(service => {
    const slug = SLUG_MAP[service.title];
    const tr   = (slug && items[slug]) ? items[slug] : {};
    return {
      ...service,
      title:          tr.title          || service.title,
      description:    tr.description    || service.description,
      category:       tr.category       || service.category,
      duration:       tr.duration       || service.duration,
      startingPrice:  tr.startingPrice  || service.startingPrice,
      caseStudy:      tr.caseStudy      || service.caseStudy,
      clientBenefits: Array.isArray(tr.clientBenefits) ? tr.clientBenefits : service.clientBenefits,
      features:       Array.isArray(tr.features)       ? tr.features       : service.features,
    };
  });
};

export default useServicesData;