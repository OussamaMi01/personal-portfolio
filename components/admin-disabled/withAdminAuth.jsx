// components/admin/withAdminAuth.jsx
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import AdminLogin from './AdminLogin';

const withAdminAuth = (WrappedComponent) => {
    const WithAdminAuth = (props) => {
        const router = useRouter();
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const [loading, setLoading] = useState(true);

        const checkAuth = useCallback(async () => {
            try {
                const adminSession = localStorage.getItem('admin_session');
                
                if (!adminSession) {
                    redirectToLogin();
                    return;
                }

                const session = JSON.parse(adminSession);
                
                if (session.expires < Date.now()) {
                    localStorage.removeItem('admin_session');
                    redirectToLogin();
                    return;
                }

                if (session.user && session.user.role !== 'admin') {
                    redirectToLogin();
                    return;
                }

                setIsAuthenticated(true);
            } catch (error) {
                console.error('Auth check failed:', error);
                redirectToLogin();
            } finally {
                setLoading(false);
            }
        }, []);

        const redirectToLogin = useCallback(() => {
            router.replace('/admin/login');
        }, [router]);

        useEffect(() => {
            checkAuth();
        }, [checkAuth]);

        const handleLogin = (sessionData) => {
            const session = {
                ...sessionData,
                expires: Date.now() + (24 * 60 * 60 * 1000)
            };
            localStorage.setItem('admin_session', JSON.stringify(session));
            setIsAuthenticated(true);
        };

        if (loading) {
            return (
                <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-ternary-dark flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600 dark:text-gray-400">Verifying authentication...</p>
                    </div>
                </div>
            );
        }

        if (!isAuthenticated) {
            return <AdminLogin onLogin={handleLogin} />;
        }

        return <WrappedComponent {...props} />;
    };

    // Add display name for better debugging
    WithAdminAuth.displayName = `WithAdminAuth(${getDisplayName(WrappedComponent)})`;
    
    return WithAdminAuth;
};

// Helper function to get display name
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAdminAuth;