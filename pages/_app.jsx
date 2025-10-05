import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import DefaultLayout from '../components/layout/DefaultLayout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const isAdminRoute = router.pathname.startsWith('/admin');

    return (
        <AnimatePresence mode="wait">
            <div className={`transition duration-300 ${
                isAdminRoute 
                    ? 'min-h-screen bg-gray-50 dark:bg-gray-900' 
                    : 'bg-secondary-light dark:bg-primary-dark'
            }`}>
                {isAdminRoute ? (
                    // Admin routes don't use the DefaultLayout
                    <Component {...pageProps} />
                ) : (
                    // Regular portfolio routes use DefaultLayout
                    <DefaultLayout>
                        <Component {...pageProps} />
                    </DefaultLayout>
                )}
            </div>
        </AnimatePresence>
    );
}

export default MyApp;