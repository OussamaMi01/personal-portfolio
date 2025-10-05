// components/admin/Settings.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FiSettings,
    FiUser,
    FiPalette,
    FiDatabase,
    FiBell,
    FiSave,
    FiRefreshCw,
    FiCheck
} from 'react-icons/fi';

// Create icon components first to avoid prop issues
const ProfileIcon = FiUser;
const AppearanceIcon = FiPalette;
const NotificationsIcon = FiBell;
const DataIcon = FiDatabase;

const Settings = ({ onBackToDashboard }) => {
    const [settings, setSettings] = useState({
        profile: {
            name: 'Oussama Missaoui',
            title: 'Full-Stack Developer & AI Specialist',
            email: 'oussama@example.com',
            phone: '+1 (555) 123-4567',
            location: 'Tunis, Tunisia',
            bio: 'Passionate full-stack developer with expertise in modern web technologies and AI solutions.'
        },
        appearance: {
            theme: 'system',
            animations: true,
            reducedMotion: false
        },
        notifications: {
            emailNotifications: true,
            newMessageAlerts: true,
            monthlyReports: false,
            securityAlerts: true
        },
        data: {
            autoBackup: true,
            backupFrequency: 'weekly',
            exportFormat: 'json'
        }
    });

    const [activeTab, setActiveTab] = useState('profile');
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = () => {
        try {
            const savedSettings = localStorage.getItem('portfolio-settings');
            if (savedSettings) {
                setSettings(JSON.parse(savedSettings));
            }
        } catch (error) {
            console.error('Failed to load settings:', error);
        }
    };

    const saveSettings = async () => {
        setLoading(true);
        try {
            localStorage.setItem('portfolio-settings', JSON.stringify(settings));
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (error) {
            console.error('Failed to save settings:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateSetting = (section, key, value) => {
        setSettings(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [key]: value
            }
        }));
    };

    // Define tabs with direct icon components
    const tabs = [
        { id: 'profile', name: 'Profile', icon: ProfileIcon },
        { id: 'appearance', name: 'Appearance', icon: AppearanceIcon },
        { id: 'notifications', name: 'Notifications', icon: NotificationsIcon },
        { id: 'data', name: 'Data', icon: DataIcon }
    ];

    const ToggleSwitch = ({ enabled, onChange, label, description }) => (
        <div className="flex items-center justify-between py-4">
            <div className="flex-1">
                <div className="font-medium text-primary-dark dark:text-primary-light">
                    {label}
                </div>
                {description && (
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {description}
                    </div>
                )}
            </div>
            <button
                onClick={() => onChange(!enabled)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                    enabled ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
            >
                <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        enabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                />
            </button>
        </div>
    );

    return (
        <div className="space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
                <div>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                        <FiSettings className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Portfolio Settings</span>
                    </div>
                    <h2 className="text-4xl font-bold text-primary-dark dark:text-primary-light mb-2">
                        Settings
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Manage your portfolio configuration
                    </p>
                </div>
                
                <div className="flex gap-3">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onBackToDashboard}
                        className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                    >
                        Back to Dashboard
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={saveSettings}
                        disabled={loading}
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors duration-300 disabled:opacity-50"
                    >
                        {loading ? (
                            <FiRefreshCw className="w-4 h-4 animate-spin" />
                        ) : saved ? (
                            <FiCheck className="w-4 h-4" />
                        ) : (
                            <FiSave className="w-4 h-4" />
                        )}
                        {saved ? 'Saved!' : 'Save Changes'}
                    </motion.button>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-1"
                >
                    <div className="bg-white dark:bg-ternary-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                        <nav className="space-y-2">
                            {tabs.map((tab) => {
                                const IconComponent = tab.icon;
                                const isActive = activeTab === tab.id;
                                
                                return (
                                    <motion.button
                                        key={tab.id}
                                        whileHover={{ x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                                            isActive
                                                ? 'bg-indigo-500 text-white shadow-lg'
                                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                        }`}
                                    >
                                        <IconComponent className="w-5 h-5" />
                                        <span className="font-medium">{tab.name}</span>
                                    </motion.button>
                                );
                            })}
                        </nav>
                    </div>
                </motion.div>

                {/* Settings Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:col-span-3"
                >
                    <div className="bg-white dark:bg-ternary-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                        {/* Profile Settings */}
                        {activeTab === 'profile' && (
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-6">
                                    Profile Information
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={settings.profile.name}
                                            onChange={(e) => updateSetting('profile', 'name', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-primary-dark dark:text-primary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Professional Title
                                        </label>
                                        <input
                                            type="text"
                                            value={settings.profile.title}
                                            onChange={(e) => updateSetting('profile', 'title', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-primary-dark dark:text-primary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                            placeholder="e.g., Senior Developer"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={settings.profile.email}
                                            onChange={(e) => updateSetting('profile', 'email', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-primary-dark dark:text-primary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={settings.profile.phone}
                                            onChange={(e) => updateSetting('profile', 'phone', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-primary-dark dark:text-primary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            value={settings.profile.location}
                                            onChange={(e) => updateSetting('profile', 'location', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-primary-dark dark:text-primary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                            placeholder="City, Country"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Bio
                                        </label>
                                        <textarea
                                            value={settings.profile.bio}
                                            onChange={(e) => updateSetting('profile', 'bio', e.target.value)}
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-primary-dark dark:text-primary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Write a brief introduction about yourself..."
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Appearance Settings */}
                        {activeTab === 'appearance' && (
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-6">
                                    Appearance Settings
                                </h3>
                                
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            Theme
                                        </label>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {['light', 'dark', 'system'].map((theme) => (
                                                <motion.button
                                                    key={theme}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => updateSetting('appearance', 'theme', theme)}
                                                    className={`p-4 border-2 rounded-xl text-left transition-all duration-300 ${
                                                        settings.appearance.theme === theme
                                                            ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                                                            : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                                                    }`}
                                                >
                                                    <div className="font-medium text-primary-dark dark:text-primary-light capitalize">
                                                        {theme}
                                                    </div>
                                                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                        {theme === 'system' ? 'Follow system preference' : `${theme} mode`}
                                                    </div>
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <ToggleSwitch
                                            enabled={settings.appearance.animations}
                                            onChange={(value) => updateSetting('appearance', 'animations', value)}
                                            label="Enable Animations"
                                            description="Smooth transitions and micro-interactions"
                                        />
                                        <ToggleSwitch
                                            enabled={settings.appearance.reducedMotion}
                                            onChange={(value) => updateSetting('appearance', 'reducedMotion', value)}
                                            label="Reduced Motion"
                                            description="Minimize animations for accessibility"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Notifications Settings */}
                        {activeTab === 'notifications' && (
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-6">
                                    Notification Settings
                                </h3>
                                <div className="space-y-6">
                                    <ToggleSwitch
                                        enabled={settings.notifications.emailNotifications}
                                        onChange={(value) => updateSetting('notifications', 'emailNotifications', value)}
                                        label="Email Notifications"
                                        description="Receive email notifications for important updates"
                                    />
                                    <ToggleSwitch
                                        enabled={settings.notifications.newMessageAlerts}
                                        onChange={(value) => updateSetting('notifications', 'newMessageAlerts', value)}
                                        label="New Message Alerts"
                                        description="Get alerts when you receive new contact messages"
                                    />
                                    <ToggleSwitch
                                        enabled={settings.notifications.monthlyReports}
                                        onChange={(value) => updateSetting('notifications', 'monthlyReports', value)}
                                        label="Monthly Reports"
                                        description="Receive monthly portfolio performance reports"
                                    />
                                    <ToggleSwitch
                                        enabled={settings.notifications.securityAlerts}
                                        onChange={(value) => updateSetting('notifications', 'securityAlerts', value)}
                                        label="Security Alerts"
                                        description="Get notified about security-related events"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Data Settings */}
                        {activeTab === 'data' && (
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-6">
                                    Data Management
                                </h3>
                                <div className="space-y-6">
                                    <ToggleSwitch
                                        enabled={settings.data.autoBackup}
                                        onChange={(value) => updateSetting('data', 'autoBackup', value)}
                                        label="Auto Backup"
                                        description="Automatically backup your portfolio data"
                                    />
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Backup Frequency
                                        </label>
                                        <select
                                            value={settings.data.backupFrequency}
                                            onChange={(e) => updateSetting('data', 'backupFrequency', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-primary-dark dark:text-primary-light focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                        >
                                            <option value="daily">Daily</option>
                                            <option value="weekly">Weekly</option>
                                            <option value="monthly">Monthly</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Settings;