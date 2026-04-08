// pages/contact.jsx
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import PagesMetaHead from '../../components/PagesMetaHead';
import ContactDetails from '../../components/contact/ContactDetails';
import ContactForm from '../../components/contact/ContactForm';

const ContactPage = () => {
    const { t } = useTranslation('contact');

    return (
        <>
            <PagesMetaHead 
                title={t('page.title', 'Contact | Oussama Missaoui')}
                description={t('page.subtitle', 'Get in touch with me for your project needs. I\'m available for collaborations, freelance work, and consulting.')}
            />
            
            <div className="container mx-auto px-4 sm:px-6 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12">
                    <ContactDetails />
                    <ContactForm />
                </div>
            </div>
        </>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'home', 'contact'])),
        },
    };
}

export default ContactPage;