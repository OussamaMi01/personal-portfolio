import { useState, useEffect } from 'react';
import AdminLogin from '../../components/admin/AdminLogin';
import AdminLayout from '../../components/admin/AdminLayout';
import Dashboard from '../../components/admin/Dashboard';
import ServicesManager from '../../components/admin/ServicesManager';
import ProjectsManager from '../../components/admin/ProjectsManager';
import ExperienceManager from '../../components/admin/ExperienceManager';
import Settings from '../../components/admin/Settings'; 
import TestimonialsManager from '../../components/admin/TestimonialsManager';
import MessagesManager from '../../components/admin/MessagesManager';
import Analytics from '../../components/admin/Analytics';

const AdminPanel = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({
        name: 'Oussama Missaoui',
        role: 'Administrator',
        initials: 'OM',
        email: 'oussama@example.com'
    });

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const adminSession = localStorage.getItem('admin_session');
                if (adminSession) {
                    const session = JSON.parse(adminSession);
                    if (session.expires > Date.now()) {
                        setIsAuthenticated(true);
                        // Load user data from session
                        if (session.user) {
                            setUserData(prev => ({ ...prev, ...session.user }));
                        }
                    } else {
                        localStorage.removeItem('admin_session');
                    }
                }
            } catch (error) {
                console.error('Auth check failed:', error);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const handleLogin = (sessionData) => {
        const session = {
            ...sessionData,
            user: {
                name: sessionData.name || 'Oussama Missaoui',
                email: sessionData.email || 'oussama@example.com',
                role: 'Administrator',
                initials: 'OM'
            },
            expires: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
        };
        localStorage.setItem('admin_session', JSON.stringify(session));
        setIsAuthenticated(true);
        setUserData(session.user);
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_session');
        setIsAuthenticated(false);
        setActiveTab('dashboard');
    };

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    const renderContent = () => {
        const contentProps = {
            onNavigateToSettings: () => setActiveTab('settings'),
            onNavigateToDashboard: () => setActiveTab('dashboard')
        };

        switch (activeTab) {
            case 'dashboard':
                return <Dashboard {...contentProps} />;
            case 'services':
                return <ServicesManager {...contentProps} />;
            case 'projects':
                return <ProjectsManager {...contentProps} />;
            case 'experience':
                return <ExperienceManager {...contentProps} />;
            case 'testimonials':
                return <TestimonialsManager {...contentProps} />;
            case 'messages':
                return <MessagesManager {...contentProps} />;
            case 'analytics':
                return <Analytics {...contentProps} />;
            case 'settings':
                return <Settings onBackToDashboard={() => setActiveTab('dashboard')} />;
            default:
                return <Dashboard {...contentProps} />;
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-ternary-dark flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading Admin Panel...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLogin} />;
    }

    return (
        <AdminLayout 
            activeTab={activeTab} 
            onTabChange={handleTabChange} 
            onLogout={handleLogout}
            userData={userData}
        >
            {renderContent()}
        </AdminLayout>
    );
};

export default AdminPanel;