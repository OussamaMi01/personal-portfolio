import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiHome, 
    FiBriefcase, 
    FiAward, 
    FiUser, 
    FiSettings, 
    FiLogOut,
    FiMenu,
    FiX,
    FiMessageSquare,
    FiTrendingUp,
    FiUsers,
    FiBell,
    FiSearch
} from 'react-icons/fi';

const AdminLayout = ({ children, activeTab, onTabChange, onLogout, userData = {} }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);
    const [unreadCount, setUnreadCount] = useState(0);

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) {
                setSidebarOpen(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Load notifications
    useEffect(() => {
        loadNotifications();
    }, []);

    const loadNotifications = () => {
        // Simulate loading notifications from localStorage or API
        const mockNotifications = [
            { id: 1, type: 'message', title: 'New message from John', time: '5 min ago', read: false },
            { id: 2, type: 'project', title: 'Project update available', time: '1 hour ago', read: false },
            { id: 3, type: 'system', title: 'System backup completed', time: '2 hours ago', read: true },
            { id: 4, type: 'alert', title: 'High traffic on portfolio', time: '1 day ago', read: true },
        ];
        setNotifications(mockNotifications);
        setUnreadCount(mockNotifications.filter(n => !n.read).length);
    };

    const markAsRead = (id) => {
        setNotifications(prev => 
            prev.map(notif => 
                notif.id === id ? { ...notif, read: true } : notif
            )
        );
        setUnreadCount(prev => Math.max(0, prev - 1));
    };

    const markAllAsRead = () => {
        setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
        setUnreadCount(0);
    };

    const tabs = [
        { id: 'dashboard', label: 'Dashboard', icon: FiHome, description: 'Overview and analytics' },
        { id: 'services', label: 'Services', icon: FiBriefcase, description: 'Manage your services' },
        { id: 'projects', label: 'Projects', icon: FiAward, description: 'Portfolio projects' },
        { id: 'experience', label: 'Experience', icon: FiUser, description: 'Work experience' },
        { id: 'testimonials', label: 'Testimonials', icon: FiUsers, description: 'Client feedback' },
        { id: 'messages', label: 'Messages', icon: FiMessageSquare, description: 'Contact messages' },
        { id: 'analytics', label: 'Analytics', icon: FiTrendingUp, description: 'Performance metrics' },
        { id: 'settings', label: 'Settings', icon: FiSettings, description: 'Configuration' },
    ];

    // Close sidebar when switching tabs on mobile
    const handleTabChange = (tabId) => {
        onTabChange(tabId);
        if (isMobile) {
            setSidebarOpen(false);
        }
    };

    const getNotificationIcon = (type) => {
        const icons = {
            message: FiMessageSquare,
            project: FiAward,
            system: FiSettings,
            alert: FiBell
        };
        return icons[type] || FiBell;
    };

    const getNotificationColor = (type) => {
        const colors = {
            message: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
            project: 'text-green-500 bg-green-50 dark:bg-green-900/20',
            system: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20',
            alert: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20'
        };
        return colors[type] || 'text-gray-500 bg-gray-50 dark:bg-gray-900/20';
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
            {/* Desktop Sidebar */}
            <div className="hidden lg:flex lg:flex-shrink-0">
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-80 bg-white dark:bg-ternary-dark shadow-xl border-r border-gray-200 dark:border-gray-700 flex flex-col"
                >
                    {/* Sidebar Header */}
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                OM
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Portfolio Admin
                                </h1>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Content Management System
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-1">
                        {tabs.map((tab, index) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            
                            return (
                                <motion.button
                                    key={tab.id}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => handleTabChange(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                                        isActive
                                            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md'
                                    }`}
                                >
                                    {/* Animated background for active state */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    
                                    <Icon className={`text-lg flex-shrink-0 relative z-10 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                                    <div className="flex-1 text-left relative z-10">
                                        <span className={`font-medium block ${isActive ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                                            {tab.label}
                                        </span>
                                        <span className={`text-xs block mt-1 ${
                                            isActive ? 'text-indigo-100' : 'text-gray-500 dark:text-gray-400'
                                        }`}>
                                            {tab.description}
                                        </span>
                                    </div>
                                    
                                    {/* Active indicator */}
                                    {isActive && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-2 h-2 bg-white rounded-full relative z-10"
                                        />
                                    )}
                                </motion.button>
                            );
                        })}
                    </nav>

                    {/* User Section & Logout */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
                        {/* User Info */}
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                                {userData.initials || 'OM'}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-primary-dark dark:text-primary-light truncate">
                                    {userData.name || 'Oussama Missaoui'}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                                    {userData.role || 'Administrator'}
                                </p>
                            </div>
                        </div>

                        {/* Logout Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 border border-red-200 dark:border-red-800"
                        >
                            <FiLogOut className="text-lg flex-shrink-0" />
                            <span className="font-medium">Logout</span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Sidebar - Overlay */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSidebarOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        />
                        
                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: -320 }}
                            animate={{ x: 0 }}
                            exit={{ x: -320 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed inset-y-0 left-0 w-80 bg-white dark:bg-ternary-dark shadow-2xl z-50 lg:hidden border-r border-gray-200 dark:border-gray-700 flex flex-col"
                        >
                            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                                        OM
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                            Portfolio Admin
                                        </h1>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            CMS
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSidebarOpen(false)}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                                >
                                    <FiX className="text-xl text-gray-600 dark:text-gray-400" />
                                </button>
                            </div>

                            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                                {tabs.map((tab) => {
                                    const Icon = tab.icon;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => handleTabChange(tab.id)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                                                activeTab === tab.id
                                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                            }`}
                                        >
                                            <Icon className="text-lg flex-shrink-0" />
                                            <div className="text-left">
                                                <span className="font-medium block">{tab.label}</span>
                                                <span className="text-xs text-gray-500 dark:text-gray-400 block mt-1">
                                                    {tab.description}
                                                </span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </nav>

                            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                                <button
                                    onClick={onLogout}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300"
                                >
                                    <FiLogOut className="text-lg flex-shrink-0" />
                                    <span className="font-medium">Logout</span>
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="bg-white dark:bg-ternary-dark border-b border-gray-200 dark:border-gray-700 p-4 lg:p-6 sticky top-0 z-30 shadow-sm">
                    <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
                        <div className="flex items-center gap-4">
                            {/* Mobile menu button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                            >
                                <FiMenu className="text-xl" />
                            </motion.button>

                            {/* Breadcrumb and title */}
                            <div className="lg:ml-4">
                                <h2 className="text-xl font-semibold text-primary-dark dark:text-primary-light capitalize">
                                    {tabs.find(tab => tab.id === activeTab)?.label || 'Dashboard'}
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {tabs.find(tab => tab.id === activeTab)?.description || 'Overview and management'}
                                </p>
                            </div>
                        </div>

                        {/* Header Actions */}
                        <div className="flex items-center gap-4">
                            {/* Search Bar */}
                            <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-2 min-w-[200px]">
                                <FiSearch className="text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-transparent border-none focus:outline-none text-sm text-gray-700 dark:text-gray-300 placeholder-gray-500 w-full"
                                />
                            </div>

                            {/* Notifications */}
                            <div className="relative">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowNotifications(!showNotifications)}
                                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 relative"
                                >
                                    <FiBell className="text-xl" />
                                    {unreadCount > 0 && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                                        >
                                            {unreadCount}
                                        </motion.span>
                                    )}
                                </motion.button>

                                {/* Notifications Dropdown */}
                                <AnimatePresence>
                                    {showNotifications && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-ternary-dark rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 z-40"
                                        >
                                            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                                                <h3 className="font-semibold text-primary-dark dark:text-primary-light">
                                                    Notifications
                                                </h3>
                                                {unreadCount > 0 && (
                                                    <button
                                                        onClick={markAllAsRead}
                                                        className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                                                    >
                                                        Mark all as read
                                                    </button>
                                                )}
                                            </div>
                                            <div className="max-h-96 overflow-y-auto">
                                                {notifications.length > 0 ? (
                                                    notifications.map((notification) => {
                                                        const Icon = getNotificationIcon(notification.type);
                                                        return (
                                                            <div
                                                                key={notification.id}
                                                                className={`p-4 border-b border-gray-100 dark:border-gray-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors duration-200 ${
                                                                    !notification.read ? 'bg-blue-50 dark:bg-blue-900/10' : ''
                                                                }`}
                                                                onClick={() => markAsRead(notification.id)}
                                                            >
                                                                <div className="flex items-start gap-3">
                                                                    <div className={`p-2 rounded-lg ${getNotificationColor(notification.type)}`}>
                                                                        <Icon className="text-lg" />
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <p className="font-medium text-primary-dark dark:text-primary-light text-sm">
                                                                            {notification.title}
                                                                        </p>
                                                                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                                                                            {notification.time}
                                                                        </p>
                                                                    </div>
                                                                    {!notification.read && (
                                                                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2" />
                                                                    )}
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                ) : (
                                                    <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                                                        <FiBell className="text-3xl mx-auto mb-2 opacity-50" />
                                                        <p>No notifications</p>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* User info */}
                            <div className="flex items-center gap-3">
                                <div className="text-right hidden sm:block">
                                    <p className="font-semibold text-primary-dark dark:text-primary-light">
                                        {userData.name || 'Oussama Missaoui'}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {userData.role || 'Administrator'}
                                    </p>
                                </div>
                                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 shadow-lg">
                                    {userData.initials || 'OM'}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-4 lg:p-6 overflow-auto bg-gray-50 dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="h-full"
                            >
                                {children}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;