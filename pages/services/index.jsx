// pages/services.jsx
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Service from '../../components/service/Service';
import PagesMetaHead from '../../components/PagesMetaHead';
import { FiBriefcase } from 'react-icons/fi';

const ServicesPage = () => {
    const { t } = useTranslation('home');

    return (
        <>
            <PagesMetaHead
                title="Services | Oussama Missaoui"
                description="Explore my full range of technical and creative services"
            />

            {/* Page Hero — rendered by the PAGE, not the component */}
            <div className="container mx-auto px-4 sm:px-6 pt-28 pb-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6">
                        <FiBriefcase className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{t('services.badge')}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark dark:text-primary-light mb-4">
                        {t('services.title')}{' '}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            {t('services.titleHighlight')}
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        {t('services.subtitle')}
                    </p>
                </motion.div>
            </div>

            
            <Service currentRole="all" showFilters hideHeader />

            {/* Page-level CTA — distinct from the home page CTA */}
            <div className="container mx-auto px-4 sm:px-6 py-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-ternary-dark rounded-3xl p-12 border border-indigo-100 dark:border-gray-700"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mb-4">
                        {t('services.ctaTitle')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        {t('services.ctaSubtitle')}
                    </p>
                    <Link href="/contact" passHref legacyBehavior>
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg"
                        >
                            {t('services.getInTouch')}
                        </motion.a>
                    </Link>
                </motion.div>
            </div>
        </>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common','home', 'services'])),
        },
    };
}

export default ServicesPage;