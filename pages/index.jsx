// pages/index.jsx
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PagesMetaHead from '../components/PagesMetaHead';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import SkillsMarquee from '../components/shared/SkillsMarquee';
import Experience from '../components/experience/Experience';
import Service from '../components/service/Service';
import SectionDivider from '../components/shared/SectionDivider';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import BlogGrid from '../components/blog/BlogGrid';
import StatsCard from '../components/shared/StatsCard';

export default function Home() {
    const { t } = useTranslation('home');
    const [currentRole, setCurrentRole] = useState('engineer');

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-32 lg:space-y-40"
        >
            <PagesMetaHead title={t('page.title', 'Home')} />

            {/* AppBanner Section */}
            <section>
                <AppBanner currentRole={currentRole} setCurrentRole={setCurrentRole} />
            </section>

            {/* SkillsMarquee Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <SkillsMarquee currentRole={currentRole} />
            </motion.section>

            {/* Divider 1 - After Skills */}
            <SectionDivider delay={0.3} />

            {/* Projects Grid Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <ProjectsGrid limit={3} currentRole={currentRole} />

                <motion.div
                    className="mt-16 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Link href="/projects" passHref legacyBehavior>
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="font-general-medium flex items-center gap-3 px-8 py-4 rounded-2xl shadow-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg sm:text-xl hover:shadow-2xl transition-all duration-300 group"
                        >
                            <span>{t('projects.viewAll')}</span>
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </motion.a>
                    </Link>
                </motion.div>
            </motion.section>

            {/* Divider 2 - After Projects */}
            <SectionDivider delay={0.5} variant="minimal" />

            {/* Experience Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <Experience currentRole={currentRole} />
            </motion.section>

            {/* Divider 3 - After Experience */}
            <SectionDivider delay={0.7} size="lg" />

            {/* Services Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <Service currentRole={currentRole} />
            </motion.section>

            {/* Divider 4 - After Services */}
            <SectionDivider delay={0.9} variant="fancy" />

            {/* Testimonials Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
            >
                <TestimonialsSection />
            </motion.section>

           

            {/* Divider 5 - After Testimonials */}
            <SectionDivider delay={1.1} variant="minimal" />

            {/* Stats Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
            >
                <div className="text-center mb-12">
                    <motion.h3
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-primary-light mb-8"
                    >
                        {t('stats.byTheNumbers', 'By The')}{' '}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            {t('stats.numbers', 'Numbers')}
                        </span>
                    </motion.h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <StatsCard number="20+" label={t('stats.projectsCompleted', 'Projects Completed')} delay={0.1} />
                    <StatsCard number="3+" label={t('stats.yearsExperience', 'Years Experience')} delay={0.2} />
                    <StatsCard number="10+" label={t('stats.satisfiedClients', 'Satisfied Clients')} delay={0.3} />
                    <StatsCard number="25+" label={t('stats.technologies', 'Technologies')} delay={0.4} />
                </div>
            </motion.section>

            {/* Final CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
            >
                <div className="text-center">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-ternary-dark rounded-3xl p-12 sm:p-16 lg:p-20 shadow-2xl border border-indigo-100 dark:border-gray-700 max-w-6xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-primary-light mb-6"
                        >
                            {t('cta.ready', 'Ready to Start Your')}{' '}
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                {t('cta.project', 'Project')}
                            </span>
                            ?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                        >
                            {t('cta.subtitle', 'Let\'s collaborate to bring your ideas to life with innovative solutions and creative expertise.')}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link href="/contact" passHref legacyBehavior>
                                <motion.a
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg text-center"
                                >
                                    {t('cta.getInTouch', 'Get In Touch')}
                                </motion.a>
                            </Link>
                            <Link href="/projects" passHref legacyBehavior>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-2xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 font-semibold text-lg text-center"
                                >
                                    {t('cta.viewWork', 'View My Work')}
                                </motion.a>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    );
}

// Add ALL necessary namespaces for i18n support
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common', 
                'home', 
                'experience', 
                'projects', 
                'services', 
                'testimonials',
                'blog',       
                'about'        
            ])),
        },
    };
}