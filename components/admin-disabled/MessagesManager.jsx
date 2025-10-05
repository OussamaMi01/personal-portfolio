import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiMail, FiUser, FiCalendar, FiTrash2, FiEye } from 'react-icons/fi';

const MessagesManager = ({ onNavigateToSettings, onNavigateToDashboard }) => {
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadMessages();
    }, []);

    const loadMessages = () => {
        const savedMessages = JSON.parse(localStorage.getItem('portfolio-messages') || '[]');
        setMessages(savedMessages);
        setLoading(false);
    };

    const deleteMessage = (id) => {
        if (confirm('Are you sure you want to delete this message?')) {
            const updated = messages.filter(m => m.id !== id);
            setMessages(updated);
            localStorage.setItem('portfolio-messages', JSON.stringify(updated));
            if (selectedMessage?.id === id) {
                setSelectedMessage(null);
            }
        }
    };

    const markAsRead = (id) => {
        const updated = messages.map(msg => 
            msg.id === id ? { ...msg, read: true } : msg
        );
        setMessages(updated);
        localStorage.setItem('portfolio-messages', JSON.stringify(updated));
    };

    const unreadCount = messages.filter(msg => !msg.read).length;

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
                        <FiMessageSquare className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Messages Management</span>
                    </div>
                    <h2 className="text-4xl font-bold text-primary-dark dark:text-primary-light mb-2">
                        Contact <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Messages</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Manage and respond to client inquiries
                    </p>
                </div>
                
                {unreadCount > 0 && (
                    <div className="px-4 py-2 bg-red-500 text-white rounded-full text-sm font-medium">
                        {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
                    </div>
                )}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Messages List */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-1 space-y-4"
                >
                    {messages.length === 0 ? (
                        <div className="bg-white dark:bg-ternary-dark rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg text-center">
                            <FiMessageSquare className="text-4xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                No Messages
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Contact messages will appear here.
                            </p>
                        </div>
                    ) : (
                        messages.map((message, index) => (
                            <motion.div
                                key={message.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => {
                                    setSelectedMessage(message);
                                    if (!message.read) markAsRead(message.id);
                                }}
                                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                                    selectedMessage?.id === message.id
                                        ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 shadow-lg'
                                        : 'bg-white dark:bg-ternary-dark border-gray-200/50 dark:border-gray-700/50 hover:shadow-md'
                                } ${!message.read ? 'border-l-4 border-l-blue-500' : ''}`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <FiUser className="text-gray-400" />
                                        <span className="font-semibold text-primary-dark dark:text-primary-light">
                                            {message.name}
                                        </span>
                                    </div>
                                    {!message.read && (
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    )}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 truncate mb-2">
                                    {message.subject || 'No subject'}
                                </p>
                                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <FiCalendar className="w-3 h-3" />
                                        {new Date(message.timestamp).toLocaleDateString()}
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            deleteMessage(message.id);
                                        }}
                                        className="p-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors duration-200"
                                    >
                                        <FiTrash2 className="w-3 h-3" />
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    )}
                </motion.div>

                {/* Message Detail */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="lg:col-span-2"
                >
                    {selectedMessage ? (
                        <div className="bg-white dark:bg-ternary-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg h-full">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light">
                                    Message Details
                                </h3>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-200">
                                        <FiMail className="w-4 h-4" />
                                    </button>
                                    <button 
                                        onClick={() => deleteMessage(selectedMessage.id)}
                                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200"
                                    >
                                        <FiTrash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            From
                                        </label>
                                        <p className="text-primary-dark dark:text-primary-light font-medium">
                                            {selectedMessage.name}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Email
                                        </label>
                                        <p className="text-primary-dark dark:text-primary-light font-medium">
                                            {selectedMessage.email}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Subject
                                    </label>
                                    <p className="text-primary-dark dark:text-primary-light font-medium">
                                        {selectedMessage.subject || 'No subject'}
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Message
                                    </label>
                                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                                            {selectedMessage.message}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Received: {new Date(selectedMessage.timestamp).toLocaleString()}
                                    </span>
                                    {!selectedMessage.read && (
                                        <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                                            New
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white dark:bg-ternary-dark rounded-2xl p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-lg h-full flex items-center justify-center text-center">
                            <div>
                                <FiEye className="text-4xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                    Select a Message
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Choose a message from the list to view its details
                                </p>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default MessagesManager;