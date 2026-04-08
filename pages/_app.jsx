// pages/_app.js
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import DefaultLayout from '../components/layout/DefaultLayout';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <DefaultLayout>
            <AnimatePresence mode="wait">
                {/* key={router.asPath} triggers exit/enter animation on every route change */}
                <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>
        </DefaultLayout>
    );
}

export default appWithTranslation(MyApp, nextI18NextConfig);