// components/about/AboutCounter.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'next-i18next';

function AboutCounter({ personalInfo, skills }) {
  const { t } = useTranslation('about');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const counters = [
    {
      id: 1,
      number: 3,
      suffix: '+',
      label: t('titles.yearsOfExperience', 'Years of experience'),
      sublabel: t('titles.combinedExperience', 'Combined professional and freelance'),
      delay: 0.1
    },
    {
      id: 2,
      number: 20,
      suffix: '+',
      label: t('titles.projectsCompleted', 'Projects completed'),
      sublabel: t('titles.softwareSolutions', 'Software & design solutions'),
      delay: 0.2
    },
    {
      id: 3,
      number: 95,
      suffix: '%',
      label: t('titles.clientSatisfaction', 'Client satisfaction'),
      sublabel: t('titles.positiveFeedback', 'Positive feedback rate'),
      delay: 0.3
    },
    {
      id: 4,
      number: 1000,
      suffix: '+',
      label: t('titles.continuousLearning', 'Continuous learning'),
      sublabel: t('titles.hoursOfDevelopment', 'Hours of skill development'),
      delay: 0.4
    }
  ];

  // You can also use dynamic values from personalInfo if needed
  // For example, if you want to use actual data:
   const actualYears = personalInfo?.experience || 3;
  const actualProjects = skills?.development?.items?.length || 20;

  return (
    <div className="text-center">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark dark:text-primary-light mb-4">
        {t('titles.myJourneyInNumbers', 'My Journey in Numbers')}
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
        {t('titles.quantifyingGrowth', 'Quantifying my growth as a developer and creator through measurable achievements')}
      </p>
      <div 
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {counters.map((counter) => (
          <motion.div
            key={counter.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: counter.delay }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {inView ? counter.number : 0}{counter.suffix}
            </div>
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-2">
              {counter.label}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {counter.sublabel}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AboutCounter;