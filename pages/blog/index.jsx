import { motion } from 'framer-motion';
import PagesMetaHead from '../../components/PagesMetaHead';
import BlogGrid from '../../components/blog/BlogGrid';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { FiBookOpen } from 'react-icons/fi';

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['home, common, blog'])),
        },
    };
}
export default function BlogIndex() {
     const { t } = useTranslation('blog');
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-20"
        >
             <PagesMetaHead 
                title={t('pageTitle', 'Blog | Oussama Missaoui')}
                description={t('pageDescription', 'Insights, tutorials, and thoughts on web development, design, and technology.')}
            />
            

            {/* Blog Grid Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <BlogGrid limit={9} /> 
            </motion.section>

        </motion.div>
    );
}