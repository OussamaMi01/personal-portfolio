// data/servicesData.js
import { v4 as uuidv4 } from 'uuid';
import {
    FiCode,
    FiSmartphone,
    FiCpu,
    FiPieChart,
    FiTrendingUp,
    FiPenTool,
    FiEdit,
    FiCloud,
    FiShoppingBag,
    FiShield,
    FiServer,
    FiBriefcase,
    FiZap,
    FiLayers,
    FiTarget,
    FiCheckCircle
} from 'react-icons/fi';

// Icon mapping for services (using actual icon components)
const serviceIcons = {
    'Full-Stack Development': FiCode,
    'Mobile App Development': FiSmartphone,
    'AI & Machine Learning': FiCpu,
    'Data Analytics & Visualization': FiPieChart,

    'UI/UX Design & Branding': FiPenTool,
  
    'Cloud Infrastructure & DevOps': FiCloud,
    'E-Commerce Solutions': FiShoppingBag,
    'Cybersecurity': FiShield,
    'System Administration': FiServer,
    'IT Service Management': FiBriefcase,
};

// Color mapping for service icons (gradient backgrounds)
const serviceColors = {
    'Full-Stack Development': 'from-indigo-500 to-purple-500',
    'Mobile App Development': 'from-green-500 to-emerald-500',
    'AI & Machine Learning': 'from-purple-500 to-pink-500',
    'Data Analytics & Visualization': 'from-teal-500 to-cyan-500',
  
    'UI/UX Design & Branding': 'from-pink-500 to-rose-500',
 
    'Cloud Infrastructure & DevOps': 'from-sky-500 to-blue-500',
    'E-Commerce Solutions': 'from-blue-500 to-indigo-500',
    'Cybersecurity': 'from-red-600 to-orange-500',
    'System Administration': 'from-gray-600 to-gray-800',
    'IT Service Management': 'from-cyan-500 to-blue-500',
};

export const servicesData = [
    {
        id: uuidv4(),
        title: 'Full-Stack Development',
        description: 'Comprehensive web solutions from concept to deployment, building scalable, performant applications with modern technologies and best practices.',
        icon: serviceIcons['Full-Stack Development'],
        iconName: 'FiCode',
        colorClass: serviceColors['Full-Stack Development'],
        role: ['engineer'],
        category: 'development',
        duration: '2-4 weeks',
        startingPrice: '270 - 850 USD',
        clientBenefits: [
            'Faster time-to-market for digital products',
            'Reduced development costs with integrated solutions',
            'Seamless user experiences across all devices',
            'Future-proof architecture for business growth',
            'Maintainable and scalable codebase'
        ],
        technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
        features: ['Responsive Design', 'API Integration', 'Database Design', 'Performance Optimization', 'Security Implementation', 'SEO Optimization']
    },
    {
        id: uuidv4(),
        title: 'Mobile App Development',
        description: 'Native Android applications focused on performance, intuitive UX, and delivering tangible business value through mobile technology.',
        icon: serviceIcons['Mobile App Development'],
        iconName: 'FiSmartphone',
        colorClass: serviceColors['Mobile App Development'],
        role: ['engineer'],
        category: 'mobile',
        duration: '3-6 weeks',
        startingPrice: '510 - 1700 USD',
        clientBenefits: [
            'Increased customer engagement through mobile channels',
            'Streamlined business processes with custom apps',
            'Enhanced brand presence in app marketplaces',
            'Secure data handling and compliance standards',
            'Offline functionality and push notifications'
        ],
        technologies: ['Java', 'Kotlin', 'Android SDK', 'Firebase', 'Material Design'],
        features: ['Native Performance', 'Material Design UI', 'Push Notifications', 'Offline Capability', 'Secure Authentication', 'In-App Purchases']
    },
    {
        id: uuidv4(),
        title: 'AI & Machine Learning',
        description: 'Intelligent systems that automate complex processes, uncover hidden insights, and enhance decision-making through cutting-edge AI technologies.',
        icon: serviceIcons['AI & Machine Learning'],
        iconName: 'FiCpu',
        colorClass: serviceColors['AI & Machine Learning'],
        role: ['engineer'],
        category: 'ai-ml',
        duration: '2-5 weeks',
        startingPrice: '340 - 1360 USD',
        clientBenefits: [
            'Automated repetitive tasks to save operational costs',
            'Data-driven insights for strategic decision-making',
            'Personalized customer experiences at scale',
            'Predictive analytics for proactive business strategies',
            'Competitive advantage through AI innovation'
        ],
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP'],
        features: ['Predictive Modeling', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems', 'Anomaly Detection', 'Automated Reporting']
    },
    {
        id: uuidv4(),
        title: 'Data Analytics & Visualization',
        description: 'Transforming complex datasets into clear, actionable intelligence through advanced analytics and compelling visualizations.',
        icon: serviceIcons['Data Analytics & Visualization'],
        iconName: 'FiPieChart',
        colorClass: serviceColors['Data Analytics & Visualization'],
        role: ['engineer'],
        category: 'analytics',
        duration: '1-3 weeks',
        startingPrice: '170 - 510 USD',
        clientBenefits: [
            'Clear visualization of business performance metrics',
            'Identification of untapped growth opportunities',
            'Measurable ROI on marketing and operational spend',
            'Competitive insights from market data analysis',
            'Data-driven culture and decision-making processes'
        ],
        technologies: ['Python', 'Pandas', 'SQL', 'Tableau', 'Power BI', 'Matplotlib'],
        features: ['Interactive Dashboards', 'Real-time Analytics', 'Custom Reporting', 'Data Warehousing', 'Performance Metrics', 'Trend Analysis']
    },
    {
        id: uuidv4(),
        title: 'UI/UX Design & Branding',
        description: 'Visually compelling brand identities and intuitive user experiences that resonate with audiences and drive business results.',
        icon: serviceIcons['UI/UX Design & Branding'],
        iconName: 'FiPenTool',
        colorClass: serviceColors['UI/UX Design & Branding'],
        role: ['designer'],
        category: 'design',
        duration: '1-2 weeks',
        startingPrice: '100 - 270 USD',
        clientBenefits: [
            'Stronger brand recognition and customer recall',
            'Higher engagement with compelling visual content',
            'Improved user satisfaction and retention rates',
            'Competitive differentiation in crowded markets',
            'Consistent brand experience across all touchpoints'
        ],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'Illustrator', 'Photoshop', 'InVision'],
        features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Design Systems', 'Brand Identity', 'Usability Testing']
    },
    {
        id: uuidv4(),
        title: 'E-Commerce Solutions',
        description: 'Complete online store development with seamless shopping experiences, secure payments, and scalable architecture.',
        icon: serviceIcons['E-Commerce Solutions'],
        iconName: 'FiShoppingBag',
        colorClass: serviceColors['E-Commerce Solutions'],
        role: ['engineer'],
        category: 'ecommerce',
        duration: '3-6 weeks',
        startingPrice: '510 - 1360 USD',
        clientBenefits: [
            '24/7 global sales capability',
            'Reduced operational costs compared to physical stores',
            'Scalable platform for business growth',
            'Integrated inventory and order management',
            'Multi-channel selling capabilities'
        ],
        technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'React', 'Node.js'],
        features: ['Product Catalogs', 'Shopping Cart', 'Payment Gateway', 'Order Management', 'Inventory Tracking', 'Analytics Dashboard']
    },
    {
        id: uuidv4(),
        title: 'Cloud Infrastructure & DevOps',
        description: 'Scalable cloud solutions and automated deployment pipelines for reliable, high-performance applications.',
        icon: serviceIcons['Cloud Infrastructure & DevOps'],
        iconName: 'FiCloud',
        colorClass: serviceColors['Cloud Infrastructure & DevOps'],
        role: ['engineer'],
        category: 'devops',
        duration: '2-4 weeks',
        startingPrice: '340 - 1000 USD',
        clientBenefits: [
            'Improved application reliability and uptime',
            'Faster deployment cycles and time-to-market',
            'Scalable infrastructure for business growth',
            'Reduced operational costs through automation',
            'Enhanced security and compliance'
        ],
        technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions'],
        features: ['Containerization', 'Auto-scaling', 'Load Balancing', 'Monitoring & Logging', 'Disaster Recovery', 'Security Compliance']
    },
    
];

// Service categories for filtering
export const serviceCategories = {
    'all': 'All Services',
    'development': 'Web Development',
    'mobile': 'Mobile Apps',
    'ai-ml': 'AI & Machine Learning',
    'analytics': 'Data Analytics',
    'design': 'UI/UX Design',
    'ecommerce': 'E-Commerce',
    'devops': 'Cloud & DevOps'
};

// Helper functions
export const getServicesByCategory = (category = 'all') => {
    if (category === 'all') return servicesData;
    return servicesData.filter(service => service.category === category);
};

export const getServicesByRole = (role = 'all') => {
    if (role === 'all') return servicesData;
    return servicesData.filter(service => service.role?.includes(role));
};

export const getFeaturedServices = () => {
    return servicesData.slice(0, 4);
};

export default servicesData;