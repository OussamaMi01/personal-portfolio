// pages/about.jsx
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import AboutClients from '../../components/about/AboutClients';
import AboutCounter from '../../components/about/AboutCounter';
import AboutMeBio from '../../components/about/AboutMeBio';
import PagesMetaHead from '../../components/PagesMetaHead';
import useTranslatedAboutData from '../../hooks/useTranslatedAboutData';
import useToolkitData from '../../hooks/useToolkitData';

function About() {
  const { t } = useTranslation('common', 'about');
  const aboutData = useTranslatedAboutData();
  const toolkitData = useToolkitData();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PagesMetaHead 
        title={t('page.title')} 
        description={t('page.subtitle')}
      />

      {/* About Me Bio Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32"
      >
        <AboutMeBio aboutData={aboutData} />
      </motion.section>

      {/* Section Divider */}
      <div className="relative my-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-ternary-dark">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-ternary-dark"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AboutCounter 
            personalInfo={aboutData.personalInfo}
            skills={aboutData.skillsBreakdown}
          />
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="relative my-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-ternary-dark">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="py-16 lg:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4">
              {aboutData.skillsBreakdown.development?.title || 'Development Skills'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('page.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Development Skills */}
            <div className="bg-white dark:bg-ternary-dark rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-6">
                {aboutData.skillsBreakdown.development?.title || 'Development Skills'}
              </h3>
              <div className="space-y-4">
                {aboutData.skillsBreakdown.development?.items?.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cybersecurity Skills */}
            <div className="bg-white dark:bg-ternary-dark rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-6">
                {aboutData.skillsBreakdown.cybersecurity?.title || 'Cybersecurity Skills'}
              </h3>
              <div className="space-y-4">
                {aboutData.skillsBreakdown.cybersecurity?.items?.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div className="bg-white dark:bg-ternary-dark rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-6">
                {aboutData.skillsBreakdown.soft?.title || 'Professional Skills'}
              </h3>
              <div className="space-y-4">
                {aboutData.skillsBreakdown.soft?.items?.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="relative my-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-ternary-dark">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          </div>
        </div>
      </div>

      {/* Career Philosophy Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-ternary-dark"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-dark dark:text-primary-light mb-4 max-w-4xl mx-auto leading-tight">
              {aboutData.careerPhilosophy.mission}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.careerPhilosophy.values?.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-ternary-dark rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-dark dark:text-primary-light mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-6">
              Career Goals
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {aboutData.careerPhilosophy.goals?.map((goal, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium"
                >
                  {goal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="relative my-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-ternary-dark">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          </div>
        </div>
      </div>

      {/* Target Roles Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="py-16 lg:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 lg:p-12 border border-indigo-100 dark:border-indigo-800">
            <h2 className="text-2xl lg:text-3xl font-bold text-center text-primary-dark dark:text-primary-light mb-8">
              {aboutData.personalInfo.status}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aboutData.careerPhilosophy.targetRoles?.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="bg-white dark:bg-ternary-dark rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow"
                >
                  <p className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                    {role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="relative my-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-ternary-dark">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          </div>
        </div>
      </div>

      {/* Clients/Toolkit Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="pb-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AboutClients 
            clientsData={toolkitData.clientsData}
            heading={toolkitData.clientsHeading}
            description={t('page.subtitle')}
          />
        </div>
      </motion.section>
    </motion.div>
  );
}

// Server-side translations
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'about'])),
    },
  };
}

export default About;