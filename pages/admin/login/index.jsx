// pages/admin/login/index.jsx
import { useEffect, useState } from 'react';
import AdminLogin from '../../../components/admin/AdminLogin';

const AdminLoginPage = () => {
    const [isCheckingSession, setIsCheckingSession] = useState(true);

    useEffect(() => {
        const checkExistingSession = () => {
            try {
                const adminSession = localStorage.getItem('admin_session');
                if (adminSession) {
                    const session = JSON.parse(adminSession);
                    if (session.expires > Date.now()) {
                        console.log('Valid session found, redirecting to admin');
                        window.location.href = '/admin';
                        return;
                    } else {
                        console.log('Expired session found, clearing it');
                        localStorage.removeItem('admin_session');
                    }
                }
            } catch (error) {
                console.error('Session check failed:', error);
                localStorage.removeItem('admin_session');
            } finally {
                setIsCheckingSession(false);
            }
        };

        checkExistingSession();
    }, []);

    const handleLogin = async (sessionData) => {
        try {
            // Save to localStorage
            localStorage.setItem('admin_session', JSON.stringify(sessionData));
            
            // Also set a cookie for the middleware
            document.cookie = `admin_session=${JSON.stringify(sessionData)}; path=/; max-age=86400; SameSite=Lax`;
            
            console.log('Login successful, redirecting to admin');
            window.location.href = '/admin';
            
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    if (isCheckingSession) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-ternary-dark flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Checking authentication...</p>
                </div>
            </div>
        );
    }

    return <AdminLogin onLogin={handleLogin} />;
};

export default AdminLoginPage;