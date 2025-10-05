import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    FiBriefcase, 
    FiAward, 
    FiUser, 
    FiMessageSquare, 
    FiTrendingUp,
    FiEye,
    FiUsers,
    FiFileText,
    FiSettings,
    FiBarChart2,
    FiEdit,
    FiTrash2,
    FiPlus,
    FiRefreshCw
} from 'react-icons/fi';

const Dashboard = ({ onNavigateToSettings }) => {
    const [stats, setStats] = useState({
        services: 0,
        projects: 0,
        experiences: 0,
        messages: 0,
        skills: 0,
        testimonials: 0
    });

    const [recentActivity, setRecentActivity] = useState([]);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        services: [],
        projects: [],
        experiences: [],
        messages: []
    });

    useEffect(() => {
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {
        setLoading(true);
        try {
            // Load real data from localStorage
            const services = JSON.parse(localStorage.getItem('portfolio-services') || '[]');
            const projects = JSON.parse(localStorage.getItem('portfolio-projects') || '[]');
            const experiences = JSON.parse(localStorage.getItem('portfolio-experience') || '[]');
            const messages = JSON.parse(localStorage.getItem('portfolio-messages') || '[]');
            const skills = JSON.parse(localStorage.getItem('portfolio-skills') || '[]');
            const testimonials = JSON.parse(localStorage.getItem('portfolio-testimonials') || '[]');

            setData({
                services,
                projects,
                experiences,
                messages,
                skills,
                testimonials
            });

            // Calculate stats from real data
            setStats({
                services: services.length,
                projects: projects.length,
                experiences: experiences.length,
                messages: messages.length,
                skills: skills.length,
                testimonials: testimonials.length
            });

            // Generate recent activity from actual data
            const activity = generateRecentActivity(services, projects, experiences, messages);
            setRecentActivity(activity);

        } catch (error) {
            console.error('Failed to load dashboard data:', error);
        } finally {
            setLoading(false);
        }
    };

    const generateRecentActivity = (services, projects, experiences, messages) => {
        const activity = [];
        
        // Get latest projects
        const latestProjects = projects
            .sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt))
            .slice(0, 2);
        
        latestProjects.forEach(project => {
            activity.push({
                id: `project-${project.id}`,
                type: 'project',
                action: 'updated',
                title: project.title,
                time: formatTimeAgo(project.updatedAt || project.createdAt),
                data: project
            });
        });

        // Get latest services
        const latestServices = services
            .sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt))
            .slice(0, 2);
        
        latestServices.forEach(service => {
            activity.push({
                id: `service-${service.id}`,
                type: 'service',
                action: 'updated',
                title: service.title,
                time: formatTimeAgo(service.updatedAt || service.createdAt),
                data: service
            });
        });

        // Get latest messages
        const latestMessages = messages
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 2);
        
        latestMessages.forEach(message => {
            activity.push({
                id: `message-${message.id}`,
                type: 'message',
                action: 'received',
                title: `Message from ${message.name}`,
                time: formatTimeAgo(message.createdAt),
                data: message
            });
        });

        return activity.sort((a, b) => new Date(b.time) - new Date(a.time)).slice(0, 6);
    };

    const formatTimeAgo = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins} minutes ago`;
        if (diffHours < 24) return `${diffHours} hours ago`;
        if (diffDays < 7) return `${diffDays} days ago`;
        return date.toLocaleDateString();
    };

    const getActivityIcon = (type) => {
        const icons = {
            project: FiAward,
            service: FiBriefcase,
            experience: FiUser,
            message: FiMessageSquare,
            skill: FiTrendingUp,
            testimonial: FiUsers
        };
        return icons[type] || FiFileText;
    };

    const getActivityColor = (type) => {
        const colors = {
            project: 'from-yellow-500 to-amber-500',
            service: 'from-indigo-500 to-purple-500',
            experience: 'from-blue-500 to-cyan-500',
            message: 'from-green-500 to-emerald-500',
            skill: 'from-orange-500 to-red-500',
            testimonial: 'from-pink-500 to-rose-500'
        };
        return colors[type] || 'from-gray-500 to-gray-700';
    };

    const statCards = [
        {
            id: 1,
            title: 'Total Services',
            value: stats.services,
            icon: FiBriefcase,
            color: 'from-indigo-500 to-purple-500',
            change: `+${Math.floor(stats.services * 0.1)}`, // 10% growth placeholder
            data: data.services
        },
        {
            id: 2,
            title: 'Projects',
            value: stats.projects,
            icon: FiAward,
            color: 'from-yellow-500 to-amber-500',
            change: `+${Math.floor(stats.projects * 0.15)}`,
            data: data.projects
        },
        {
            id: 3,
            title: 'Experiences',
            value: stats.experiences,
            icon: FiUser,
            color: 'from-blue-500 to-cyan-500',
            change: `+${Math.floor(stats.experiences * 0.05)}`,
            data: data.experiences
        },
        {
            id: 4,
            title: 'Messages',
            value: stats.messages,
            icon: FiMessageSquare,
            color: 'from-green-500 to-emerald-500',
            change: `+${Math.floor(stats.messages * 0.2)}`,
            data: data.messages
        },
        {
            id: 5,
            title: 'Skills',
            value: stats.skills,
            icon: FiTrendingUp,
            color: 'from-orange-500 to-red-500',
            change: `+${Math.floor(stats.skills * 0.08)}`,
            data: data.skills
        },
        {
            id: 6,
            title: 'Testimonials',
            value: stats.testimonials,
            icon: FiUsers,
            color: 'from-pink-500 to-rose-500',
            change: `+${Math.floor(stats.testimonials * 0.12)}`,
            data: data.testimonials
        }
    ];

    const quickActions = [
        {
            id: 1,
            title: 'Add New Service',
            description: 'Create a new service offering',
            icon: FiPlus,
            color: 'from-indigo-500 to-purple-500',
            action: () => console.log('Add service')
        },
        {
            id: 2,
            title: 'Manage Projects',
            description: 'Update your project portfolio',
            icon: FiEdit,
            color: 'from-yellow-500 to-amber-500',
            action: () => console.log('Manage projects')
        },
        {
            id: 3,
            title: 'View Analytics',
            description: 'Check portfolio performance',
            icon: FiBarChart2,
            color: 'from-green-500 to-emerald-500',
            action: () => console.log('View analytics')
        },
        {
            id: 4,
            title: 'Settings',
            description: 'Configure portfolio settings',
            icon: FiSettings,
            color: 'from-blue-500 to-cyan-500',
            action: onNavigateToSettings
        }
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-96">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
            >
                <div className="text-center sm:text-left">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                        <FiTrendingUp className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Admin Dashboard</span>
                    </div>
                    <h2 className="text-4xl font-bold text-primary-dark dark:text-primary-light mb-2">
                        Portfolio <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Overview</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Real-time management of your portfolio content
                    </p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={loadDashboardData}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors duration-300"
                >
                    <FiRefreshCw className="w-4 h-4" />
                    Refresh Data
                </motion.button>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {statCards.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-white dark:bg-ternary-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                            onClick={() => console.log(`View ${stat.title}`, stat.data)}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="text-2xl text-white" />
                                </div>
                                <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                    {stat.change}
                                </span>
                            </div>
                            <h3 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                                {stat.title}
                            </p>
                            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                                <div 
                                    className={`bg-gradient-to-r ${stat.color} h-1 rounded-full transition-all duration-500`}
                                    style={{ width: `${Math.min(100, (stat.value / 20) * 100)}%` }}
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white dark:bg-ternary-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light">
                            Recent Activity
                        </h3>
                        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                            <FiEye className="text-lg" />
                            <span className="font-medium">Live Updates</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {recentActivity.length > 0 ? recentActivity.map((activity, index) => {
                            const ActivityIcon = getActivityIcon(activity.type);
                            const colorClass = getActivityColor(activity.type);
                            
                            return (
                                <motion.div
                                    key={activity.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 group cursor-pointer"
                                    onClick={() => console.log('View activity:', activity)}
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <ActivityIcon className="text-xl text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-primary-dark dark:text-primary-light">
                                            {activity.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            {activity.action} • {activity.time}
                                        </p>
                                    </div>
                                    <div className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium capitalize">
                                        {activity.type}
                                    </div>
                                </motion.div>
                            );
                        }) : (
                            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                                No recent activity
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-4">
                        Quick Actions
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {quickActions.map((action, index) => {
                            const Icon = action.icon;
                            return (
                                <motion.button
                                    key={action.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={action.action}
                                    className="bg-white dark:bg-ternary-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="text-2xl text-white" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-primary-dark dark:text-primary-light mb-2">
                                        {action.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {action.description}
                                    </p>
                                    <div className={`mt-3 w-8 h-1 bg-gradient-to-r ${action.color} rounded-full group-hover:w-12 transition-all duration-300`} />
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Data Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-2xl p-6 border border-indigo-100 dark:border-indigo-800/30"
                    >
                        <h4 className="text-lg font-semibold text-primary-dark dark:text-primary-light mb-3">
                            Data Summary
                        </h4>
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex justify-between">
                                <span>Total Items:</span>
                                <span className="font-semibold text-primary-dark dark:text-primary-light">
                                    {Object.values(stats).reduce((a, b) => a + b, 0)}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Last Updated:</span>
                                <span className="font-semibold text-primary-dark dark:text-primary-light">
                                    {new Date().toLocaleDateString()}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Storage Used:</span>
                                <span className="font-semibold text-primary-dark dark:text-primary-light">
                                    {Math.round((JSON.stringify(data).length / 1024) * 100) / 100} KB
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;