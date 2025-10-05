import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiUsers, FiEye, FiMousePointer, FiClock, FiBarChart2 } from 'react-icons/fi';

const Analytics = ({ onNavigateToSettings, onNavigateToDashboard }) => {
    const [analyticsData, setAnalyticsData] = useState({});
    const [timeRange, setTimeRange] = useState('7d');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadAnalyticsData();
    }, [timeRange]);

    const loadAnalyticsData = () => {
        // Simulate analytics data
        const mockData = {
            visitors: 1247,
            pageViews: 3842,
            bounceRate: 42.3,
            avgSession: '2m 34s',
            topPages: [
                { page: '/', views: 1247 },
                { page: '/projects', views: 892 },
                { page: '/services', views: 756 },
                { page: '/about', views: 543 },
                { page: '/contact', views: 321 }
            ],
            trafficSources: [
                { source: 'Direct', percentage: 45 },
                { source: 'Social', percentage: 25 },
                { source: 'Search', percentage: 20 },
                { source: 'Referral', percentage: 10 }
            ]
        };
        
        setAnalyticsData(mockData);
        setLoading(false);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-96">
                <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
                <div>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                        <FiTrendingUp className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Portfolio Analytics</span>
                    </div>
                    <h2 className="text-4xl font-bold text-primary-dark dark:text-primary-light mb-2">
                        Performance <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Analytics</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Track your portfolio performance and visitor engagement
                    </p>
                </div>
                
                <select
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-primary-dark dark:text-primary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                >
                    <option value="7d">Last 7 days</option>
                    <option value="30d">Last 30 days</option>
                    <option value="90d">Last 90 days</option>
                </select>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    icon={FiUsers}
                    title="Total Visitors"
                    value={analyticsData.visitors?.toLocaleString()}
                    change="+12.4%"
                    color="from-blue-500 to-cyan-500"
                />
                <StatCard
                    icon={FiEye}
                    title="Page Views"
                    value={analyticsData.pageViews?.toLocaleString()}
                    change="+8.2%"
                    color="from-green-500 to-emerald-500"
                />
                <StatCard
                    icon={FiMousePointer}
                    title="Bounce Rate"
                    value={`${analyticsData.bounceRate}%`}
                    change="-3.1%"
                    color="from-orange-500 to-amber-500"
                />
                <StatCard
                    icon={FiClock}
                    title="Avg. Session"
                    value={analyticsData.avgSession}
                    change="+0.2m"
                    color="from-purple-500 to-pink-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Pages */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-ternary-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                >
                    <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-4 flex items-center gap-2">
                        <FiBarChart2 className="text-indigo-500" />
                        Top Pages
                    </h3>
                    <div className="space-y-3">
                        {analyticsData.topPages?.map((page, index) => (
                            <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                                <span className="font-medium text-primary-dark dark:text-primary-light">
                                    {page.page}
                                </span>
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {page.views.toLocaleString()} views
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Traffic Sources */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white dark:bg-ternary-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                >
                    <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-4 flex items-center gap-2">
                        <FiTrendingUp className="text-green-500" />
                        Traffic Sources
                    </h3>
                    <div className="space-y-4">
                        {analyticsData.trafficSources?.map((source, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-primary-dark dark:text-primary-light">
                                        {source.source}
                                    </span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        {source.percentage}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                    <div 
                                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${source.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const StatCard = ({ icon: Icon, title, value, change, color }) => (
    <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-white dark:bg-ternary-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
    >
        <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg`}>
                <Icon className="text-2xl text-white" />
            </div>
            <span className={`text-sm font-medium ${
                change.startsWith('+') 
                    ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20' 
                    : 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
            } px-2 py-1 rounded-full`}>
                {change}
            </span>
        </div>
        <h3 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-2">
            {value}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 font-medium">
            {title}
        </p>
    </motion.div>
);

export default Analytics;