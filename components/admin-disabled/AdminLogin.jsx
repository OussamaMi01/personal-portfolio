// components/admin/AdminLogin.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    FiLock, 
    FiUser, 
    FiArrowRight, 
    FiEye, 
    FiEyeOff,
    FiShield,
    FiAlertCircle
} from 'react-icons/fi';

const AdminLogin = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [attempts, setAttempts] = useState(0);

    // Admin credentials (in production, these would be environment variables)
    const ADMIN_CREDENTIALS = {
        username: process.env.NEXT_PUBLIC_ADMIN_USERNAME || 'admin',
        password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123'
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            if (credentials.username === ADMIN_CREDENTIALS.username && 
                credentials.password === ADMIN_CREDENTIALS.password) {
                
                const sessionData = {
                    user: {
                        name: 'Oussama Missaoui',
                        role: 'admin',
                        initials: 'OM',
                        email: 'oussama@example.com',
                        loginTime: new Date().toISOString()
                    },
                    id: `session_${Date.now()}`,
                    expires: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
                };
                
                setAttempts(0);
                onLogin(sessionData);
            } else {
                const newAttempts = attempts + 1;
                setAttempts(newAttempts);
                
                if (newAttempts >= 3) {
                    setError('Too many failed attempts. Please try again later.');
                    setTimeout(() => setAttempts(0), 30000); // Reset after 30 seconds
                } else {
                    setError(`Invalid credentials. ${3 - newAttempts} attempts remaining.`);
                }
            }
        } catch (error) {
            setError('Login failed. Please check your connection and try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (field, value) => {
        setCredentials(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (error) setError('');
    };

    const isFormValid = credentials.username.trim() && credentials.password.trim();

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-ternary-dark dark:to-gray-800 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="bg-white/80 dark:bg-ternary-dark/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 dark:border-gray-700/50">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                        >
                            <FiShield className="text-2xl text-white" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2"
                        >
                            Admin Portal
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-600 dark:text-gray-400 text-lg"
                        >
                            Secure access to portfolio management
                        </motion.p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Username Field */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Username
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiUser className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300" />
                                </div>
                                <input
                                    type="text"
                                    value={credentials.username}
                                    onChange={(e) => handleInputChange('username', e.target.value)}
                                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-primary-dark dark:text-primary-light placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>
                        </motion.div>

                        {/* Password Field */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiLock className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={credentials.password}
                                    onChange={(e) => handleInputChange('password', e.target.value)}
                                    className="block w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-primary-dark dark:text-primary-light placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                                >
                                    {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                                </button>
                            </div>
                        </motion.div>

                        {/* Error Message */}
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400"
                            >
                                <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                                <span className="text-sm font-medium">{error}</span>
                            </motion.div>
                        )}

                        {/* Submit Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            whileHover={{ 
                                scale: isFormValid ? 1.02 : 1,
                                y: isFormValid ? -2 : 0
                            }}
                            whileTap={{ scale: isFormValid ? 0.98 : 1 }}
                            type="submit"
                            disabled={loading || !isFormValid || attempts >= 3}
                            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none font-semibold text-lg group"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Authenticating...
                                </>
                            ) : (
                                <>
                                    <span>Access Dashboard</span>
                                    <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                                </>
                            )}
                        </motion.button>
                    </form>

                    {/* Security Information */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="mt-8 space-y-4"
                    >
                        {/* Demo Credentials */}
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                            <p className="text-sm text-blue-600 dark:text-blue-400 text-center">
                                <strong>Demo Credentials:</strong><br />
                                Username: <code className="bg-blue-100 dark:bg-blue-900/40 px-2 py-1 rounded">admin</code><br />
                                Password: <code className="bg-blue-100 dark:bg-blue-900/40 px-2 py-1 rounded">admin123</code>
                            </p>
                        </div>

                        {/* Security Notice */}
                        <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
                            <p className="text-xs text-amber-600 dark:text-amber-400 text-center">
                                🔒 Secure admin access. All activities are logged.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;