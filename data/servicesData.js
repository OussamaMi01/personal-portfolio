import {
    FiCode,
    FiSmartphone,
    FiShuffle,
    FiCpu,
    FiPieChart,
    FiMessageSquare,
    FiTrendingUp,
    FiPenTool,
    FiEdit,
    FiCloud,
    FiServer,
    FiTarget,
    FiAward,
    FiBookOpen,
    FiLayers,
    FiDatabase,
    FiGlobe,
    FiZap,
    FiUsers,
    FiMonitor,
    FiShoppingBag,
    FiVideo,
    FiCamera,
    FiBarChart,
    FiLock,
    FiHeart,
    FiTool,
    FiBox,
    FiCheckCircle
} from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';

export const servicesData = [{
        id: uuidv4(),
        title: 'Full-Stack Development',
        description: 'Comprehensive web solutions from concept to deployment, building scalable, performant applications with modern technologies and best practices.',
        icon: FiCode,
        colorClass: 'from-indigo-500 to-purple-500',
        bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
        role: ['engineer', 'designer'],
        category: 'development',
        expertise: 'expert',
        duration: '2-6 months',
        startingPrice: '$2,500',
        clientBenefits: [
            'Faster time-to-market for digital products',
            'Reduced development costs with integrated solutions',
            'Seamless user experiences across all devices',
            'Future-proof architecture for business growth',
            'Maintainable and scalable codebase'
        ],
        technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
        deliveryMethods: ['Agile Development', 'CI/CD Pipeline', 'Code Reviews', 'Automated Testing'],
        features: [
            'Responsive Design',
            'API Integration',
            'Database Design',
            'Performance Optimization',
            'Security Implementation',
            'SEO Optimization'
        ],
        caseStudy: 'Built e-commerce platform processing 10k+ monthly orders',
        testimonials: ['Increased conversion rate by 35%', 'Improved page load speed by 60%']
    },
    {
        id: uuidv4(),
        title: 'Mobile App Development',
        description: 'Native Android applications focused on performance, intuitive UX, and delivering tangible business value through mobile technology.',
        icon: FiSmartphone,
        colorClass: 'from-green-500 to-emerald-500',
        bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
        role: ['engineer'],
        category: 'mobile',
        expertise: 'advanced',
        duration: '3-8 months',
        startingPrice: '$3,000',
        clientBenefits: [
            'Increased customer engagement through mobile channels',
            'Streamlined business processes with custom apps',
            'Enhanced brand presence in app marketplaces',
            'Secure data handling and compliance standards',
            'Offline functionality and push notifications'
        ],
        technologies: ['Java', 'Kotlin', 'Android SDK', 'Firebase', 'Material Design'],
        deliveryMethods: ['Native Development', 'Material Design Guidelines', 'Play Store Deployment', 'Analytics Integration'],
        features: [
            'Native Performance',
            'Material Design UI',
            'Push Notifications',
            'Offline Capability',
            'Secure Authentication',
            'In-App Purchases'
        ],
        caseStudy: 'Developed fitness app with 50k+ downloads and 4.8-star rating',
        testimonials: ['User retention increased by 45%', 'App store feature in Health & Fitness category']
    },
    {
        id: uuidv4(),
        title: 'AI & Machine Learning',
        description: 'Intelligent systems that automate complex processes, uncover hidden insights, and enhance decision-making through cutting-edge AI technologies.',
        icon: FiCpu,
        colorClass: 'from-red-500 to-pink-500',
        bgColor: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20',
        role: ['engineer', 'analyst'],
        category: 'ai-ml',
        expertise: 'advanced',
        duration: '1-4 months',
        startingPrice: '$4,000',
        clientBenefits: [
            'Automated repetitive tasks to save operational costs',
            'Data-driven insights for strategic decision-making',
            'Personalized customer experiences at scale',
            'Predictive analytics for proactive business strategies',
            'Competitive advantage through AI innovation'
        ],
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP'],
        deliveryMethods: ['Data Analysis', 'Model Training', 'API Integration', 'Performance Monitoring'],
        features: [
            'Predictive Modeling',
            'Natural Language Processing',
            'Computer Vision',
            'Recommendation Systems',
            'Anomaly Detection',
            'Automated Reporting'
        ],
        caseStudy: 'Implemented fraud detection system reducing false positives by 70%',
        testimonials: ['Reduced manual review time by 80%', 'Improved detection accuracy by 65%']
    },
    {
        id: uuidv4(),
        title: 'Data Analytics & Visualization',
        description: 'Transforming complex datasets into clear, actionable intelligence through advanced analytics and compelling visualizations.',
        icon: FiPieChart,
        colorClass: 'from-teal-500 to-cyan-500',
        bgColor: 'from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20',
        role: ['engineer', 'analyst'],
        category: 'analytics',
        expertise: 'advanced',
        duration: '1-3 months',
        startingPrice: '$2,000',
        clientBenefits: [
            'Clear visualization of business performance metrics',
            'Identification of untapped growth opportunities',
            'Measurable ROI on marketing and operational spend',
            'Competitive insights from market data analysis',
            'Data-driven culture and decision-making processes'
        ],
        technologies: ['Python', 'R', 'Tableau', 'Power BI', 'SQL', 'Google Analytics'],
        deliveryMethods: ['Data Mining', 'Dashboard Development', 'Statistical Analysis', 'KPI Tracking'],
        features: [
            'Interactive Dashboards',
            'Real-time Analytics',
            'Custom Reporting',
            'Data Warehousing',
            'Performance Metrics',
            'Trend Analysis'
        ],
        caseStudy: 'Created analytics dashboard reducing reporting time from days to minutes',
        testimonials: ['Identified $500k in cost savings opportunities', 'Improved decision speed by 40%']
    },
    {
        id: uuidv4(),
        title: 'Digital Marketing Strategy',
        description: 'Comprehensive data-driven strategies to increase online visibility, engagement, and conversions across multiple digital channels.',
        icon: FiTrendingUp,
        colorClass: 'from-orange-500 to-amber-500',
        bgColor: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20',
        role: ['creator', 'marketer'],
        category: 'marketing',
        expertise: 'expert',
        duration: 'Ongoing',
        startingPrice: '$1,500/month',
        clientBenefits: [
            'Increased lead generation and conversion rates',
            'Higher brand awareness and market recognition',
            'Improved customer retention and loyalty',
            'Measurable campaign performance and ROI',
            'Competitive advantage in digital landscape'
        ],
        technologies: ['Google Ads', 'Meta Ads', 'Google Analytics', 'SEMrush', 'HubSpot'],
        deliveryMethods: ['SEO Optimization', 'Content Strategy', 'Social Media Management', 'Performance Analytics'],
        features: [
            'SEO Strategy',
            'Content Marketing',
            'Social Media Campaigns',
            'Email Marketing',
            'PPC Management',
            'Conversion Optimization'
        ],
        caseStudy: 'Grew startup from 0 to 10k monthly visitors in 6 months',
        testimonials: ['Increased organic traffic by 300%', 'Reduced CAC by 45% through optimized campaigns']
    },
    {
        id: uuidv4(),
        title: 'UI/UX Design & Branding',
        description: 'Visually compelling brand identities and intuitive user experiences that resonate with audiences and drive business results.',
        icon: FiPenTool,
        colorClass: 'from-pink-500 to-rose-500',
        bgColor: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
        role: ['designer', 'creator'],
        category: 'design',
        expertise: 'expert',
        duration: '1-3 months',
        startingPrice: '$1,800',
        clientBenefits: [
            'Stronger brand recognition and customer recall',
            'Higher engagement with compelling visual content',
            'Improved user satisfaction and retention rates',
            'Competitive differentiation in crowded markets',
            'Consistent brand experience across all touchpoints'
        ],
        technologies: ['Figma', 'Adobe Creative Suite', 'InVision', 'Sketch', 'Principle'],
        deliveryMethods: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Brand Guidelines'],
        features: [
            'User Research',
            'Wireframing & Prototyping',
            'Visual Design',
            'Design Systems',
            'Brand Identity',
            'Usability Testing'
        ],
        caseStudy: 'Redesigned SaaS platform increasing user engagement by 55%',
        testimonials: ['Improved conversion rate by 25%', 'Received industry design award']
    },
    {
        id: uuidv4(),
        title: 'E-Commerce Solutions',
        description: 'Complete online store development with seamless shopping experiences, secure payments, and scalable architecture.',
        icon: FiShoppingBag,
        colorClass: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
        role: ['engineer', 'designer'],
        category: 'ecommerce',
        expertise: 'advanced',
        duration: '2-5 months',
        startingPrice: '$3,500',
        clientBenefits: [
            '24/7 global sales capability',
            'Reduced operational costs compared to physical stores',
            'Scalable platform for business growth',
            'Integrated inventory and order management',
            'Multi-channel selling capabilities'
        ],
        technologies: ['Shopify', 'WooCommerce', 'React', 'Node.js', 'Stripe', 'PayPal'],
        deliveryMethods: ['Platform Selection', 'Custom Development', 'Payment Integration', 'Inventory Setup'],
        features: [
            'Product Catalogs',
            'Shopping Cart',
            'Payment Gateway',
            'Order Management',
            'Inventory Tracking',
            'Analytics Dashboard'
        ],
        caseStudy: 'Built custom e-commerce platform processing $2M+ in annual sales',
        testimonials: ['Increased average order value by 30%', 'Reduced cart abandonment by 40%']
    },
    {
        id: uuidv4(),
        title: 'Content Creation & Strategy',
        description: 'Strategic content development that engages audiences, builds authority, and drives measurable business growth.',
        icon: FiEdit,
        colorClass: 'from-purple-500 to-indigo-500',
        bgColor: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20',
        role: ['creator', 'marketer'],
        category: 'content',
        expertise: 'expert',
        duration: 'Ongoing',
        startingPrice: '$1,200/month',
        clientBenefits: [
            'Established thought leadership in your industry',
            'Increased organic traffic and search visibility',
            'Higher engagement and social sharing',
            'Improved lead generation and nurturing',
            'Sustainable long-term growth strategy'
        ],
        technologies: ['WordPress', 'Canva', 'Adobe Premiere', 'Google Docs', 'Social Media APIs'],
        deliveryMethods: ['Content Planning', 'Creation & Editing', 'Distribution Strategy', 'Performance Analysis'],
        features: [
            'Blog Content',
            'Social Media Posts',
            'Video Production',
            'Email Newsletters',
            'Case Studies',
            'Whitepapers'
        ],
        caseStudy: 'Developed content strategy generating 5k+ monthly organic visitors',
        testimonials: ['Tripled social media engagement', 'Generated 200+ qualified leads monthly']
    },
    {
        id: uuidv4(),
        title: 'Cloud Infrastructure & DevOps',
        description: 'Scalable cloud solutions and automated deployment pipelines for reliable, high-performance applications.',
        icon: FiCloud,
        colorClass: 'from-gray-600 to-blue-500',
        bgColor: 'from-gray-50 to-blue-50 dark:from-gray-900/20 dark:to-blue-900/20',
        role: ['engineer'],
        category: 'devops',
        expertise: 'advanced',
        duration: '1-4 months',
        startingPrice: '$2,800',
        clientBenefits: [
            'Improved application reliability and uptime',
            'Faster deployment cycles and time-to-market',
            'Scalable infrastructure for business growth',
            'Reduced operational costs through automation',
            'Enhanced security and compliance'
        ],
        technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'GitLab CI'],
        deliveryMethods: ['Infrastructure as Code', 'CI/CD Pipeline', 'Monitoring Setup', 'Security Hardening'],
        features: [
            'Containerization',
            'Auto-scaling',
            'Load Balancing',
            'Monitoring & Logging',
            'Disaster Recovery',
            'Security Compliance'
        ],
        caseStudy: 'Migrated legacy system to cloud, reducing costs by 60%',
        testimonials: ['Achieved 99.9% uptime', 'Reduced deployment time from hours to minutes']
    }
];

// Enhanced data structures for filtering and organization
export const serviceCategories = {
    'all': 'All Services',
    'development': 'Web Development',
    'mobile': 'Mobile Apps',
    'ai-ml': 'AI & Machine Learning',
    'analytics': 'Data Analytics',
    'marketing': 'Digital Marketing',
    'design': 'UI/UX Design',
    'ecommerce': 'E-Commerce',
    'content': 'Content Creation',
    'devops': 'Cloud & DevOps'
};

export const expertiseLevels = {
    'expert': { label: 'Expert', color: 'from-green-500 to-emerald-500', level: 4 },
    'advanced': { label: 'Advanced', color: 'from-blue-500 to-cyan-500', level: 3 },
    'intermediate': { label: 'Intermediate', color: 'from-yellow-500 to-orange-500', level: 2 },
    'beginner': { label: 'Beginner', color: 'from-gray-400 to-gray-600', level: 1 }
};

export const serviceRoles = {
    'engineer': { label: 'Engineering', icon: FiCode, color: 'from-indigo-500 to-purple-500' },
    'designer': { label: 'Design', icon: FiPenTool, color: 'from-pink-500 to-rose-500' },
    'creator': { label: 'Content Creation', icon: FiEdit, color: 'from-orange-500 to-amber-500' },
    'analyst': { label: 'Data Analysis', icon: FiPieChart, color: 'from-teal-500 to-cyan-500' },
    'marketer': { label: 'Marketing', icon: FiTrendingUp, color: 'from-green-500 to-emerald-500' }
};

// Helper functions
export const getServicesByCategory = (category = 'all') => {
    if (category === 'all') return servicesData;
    return servicesData.filter(service => service.category === category);
};

export const getServicesByRole = (role = 'all') => {
    if (role === 'all') return servicesData;
    return servicesData.filter(service => service.role.includes(role));
};

export const getServicesByExpertise = (expertise) => {
    return servicesData.filter(service => service.expertise === expertise);
};

export const getFeaturedServices = () => {
    return servicesData.filter(service => ['expert', 'advanced'].includes(service.expertise)).slice(0, 6);
};

// Service packages for different business needs
export const servicePackages = {
    startup: {
        name: 'Startup Package',
        description: 'Perfect for new businesses needing foundational digital presence',
        services: ['Full-Stack Development', 'UI/UX Design', 'Digital Marketing Strategy'],
        duration: '2-4 months',
        price: '$5,000 - $15,000'
    },
    growth: {
        name: 'Growth Package',
        description: 'For established businesses looking to scale and optimize',
        services: ['Data Analytics', 'E-Commerce Solutions', 'Content Strategy', 'AI Solutions'],
        duration: '3-6 months',
        price: '$15,000 - $40,000'
    },
    enterprise: {
        name: 'Enterprise Package',
        description: 'Comprehensive digital transformation for large organizations',
        services: ['Cloud Infrastructure', 'Custom AI Solutions', 'Advanced Analytics', 'Multi-platform Development'],
        duration: '6-12 months',
        price: '$50,000+'
    }
};

// Process workflow
export const serviceProcess = [{
        step: 1,
        title: 'Discovery & Planning',
        description: 'Understanding your business goals, target audience, and project requirements',
        icon: FiTarget,
        duration: '1-2 weeks'
    },
    {
        step: 2,
        title: 'Design & Strategy',
        description: 'Creating wireframes, prototypes, and detailed project roadmap',
        icon: FiPenTool,
        duration: '2-3 weeks'
    },
    {
        step: 3,
        title: 'Development & Implementation',
        description: 'Building your solution with regular updates and feedback sessions',
        icon: FiCode,
        duration: 'Project dependent'
    },
    {
        step: 4,
        title: 'Testing & Quality Assurance',
        description: 'Rigorous testing across devices and scenarios to ensure excellence',
        icon: FiCheckCircle,
        duration: '1-2 weeks'
    },
    {
        step: 5,
        title: 'Launch & Deployment',
        description: 'Going live with monitoring, analytics, and post-launch support',
        icon: FiZap,
        duration: '1 week'
    },
    {
        step: 6,
        title: 'Maintenance & Growth',
        description: 'Ongoing support, updates, and optimization for continued success',
        icon: FiTrendingUp,
        duration: 'Ongoing'
    }
];

export default servicesData;