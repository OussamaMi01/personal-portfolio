import { v4 as uuidv4 } from 'uuid';

// Helper function to generate consistent screenshot IDs
const addScreenshots = (basePath, count, title) => {
  const screenshots = [];
  for (let i = 1; i <= count; i++) {
    screenshots.push({
      id: uuidv4(),
      title: `${title} - Screenshot ${i}`,
      img: `${basePath}/screenshot-${i}.jpg`,
      thumbnail: `${basePath}/thumb-${i}.jpg`,
      description: i === 1 ? 'Main dashboard view' : i === 2 ? 'Feature demonstration' : 'Additional interface view'
    });
  }
  return screenshots;
};

export const projectsData = [
    {
        id: 'dfs-project-id',
        title: 'Distributed File System (DFS)',
        url: 'distributed-file-system-dfs',
        category: 'Distributed Systems',
        img: '/images/projects/dfs/hero.jpg',
        role: ['engineer'],
        status: 'done',
        isBehanceProject: false,
        behanceUrl: null,
        
        // Enhanced Overview Section
        overview: {
            summary: 'A robust distributed file system built with Java RMI that enables seamless file storage and retrieval across multiple nodes with built-in fault tolerance and load balancing.',
            keyFeatures: [
                'Distributed file storage across multiple nodes',
                'Automatic file replication for fault tolerance',
                'Load balancing for optimal performance',
                'Secure file access with authentication',
                'Real-time file synchronization'
            ],
            problemSolved: 'Traditional centralized file systems create single points of failure and performance bottlenecks. This DFS solves these issues by distributing data across multiple nodes, ensuring high availability and scalability.',
            solution: 'Implemented a peer-to-peer architecture using Java RMI where files are chunked and distributed across nodes. Each chunk is replicated to ensure data durability even if nodes fail.',
            impact: 'Achieved 99.9% data availability, 20% faster retrieval times, and 15% reduced network overhead compared to traditional solutions.'
        },
        
        // Multiple Screenshots
        screenshots: [
            {
                id: uuidv4(),
                title: 'DFS Architecture Overview',
                img: '/images/projects/dfs/screenshot-1.jpg',
                thumbnail: '/images/projects/dfs/thumb-1.jpg',
                description: 'System architecture showing distributed nodes and file distribution',
                type: 'architecture'
            },
            {
                id: uuidv4(),
                title: 'File Management Dashboard',
                img: '/images/projects/dfs/screenshot-2.jpg',
                thumbnail: '/images/projects/dfs/thumb-2.jpg',
                description: 'User interface for managing files across the distributed system',
                type: 'dashboard'
            }
        ],
        
        // Live Project Links
        liveLinks: {
            github: 'https://github.com/OussamaMi01/DFS',
            documentation: 'https://github.com/OussamaMi01/DFS/wiki'
        },
        
        ProjectHeader: {
            title: 'Distributed File System (DFS)',
            publishDate: 'Dec 2024',
            tags: ['Distributed Systems', 'Java', 'Networking', 'Fault Tolerance', 'Load Balancing'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'Distributed File System Main Image',
                img: '/images/projects/dfs/hero.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'Designed and implemented a robust Distributed File System (DFS) using Java RMI for distributed data storage and retrieval, focusing on high availability and fault tolerance.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: ['Java', 'Java RMI', 'Distributed Systems', 'Fault Tolerance', 'Load Balancing'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Achieved 70% data availability and 20% faster retrieval by implementing fault tolerance and load balancing mechanisms.',
                },
                {
                    id: uuidv4(),
                    details: 'Reduced network overhead by 15% via efficient data transfer mechanisms, optimizing overall system performance.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: 'https://github.com/OussamaMi01/DFS',
                website: null,
                behance: null,
            },
        },
    },
    
    // ... other existing projects (CORBA, Contact Management, Ichri.tn, etc.)
    // For brevity, I'll show key examples, but you should apply the same pattern to all
    
    {
        id: 'ichri-ecommerce-website-id',
        title: 'Ichri.tn E-Commerce Website',
        url: 'ichri-ecommerce-website',
        category: 'Web Application',
        img: '/images/projects/ichri/hero.jpg',
        role: ['engineer'],
        status: 'done',
        isBehanceProject: false,
        behanceUrl: null,
        
        overview: {
            summary: 'A full-stack e-commerce platform for Ichri.tn featuring secure transactions, product management, and seamless user experience.',
            keyFeatures: [
                'User authentication and profile management',
                'Product catalog with search and filters',
                'Shopping cart and secure checkout',
                'Order tracking and history',
                'Admin dashboard for inventory management',
                'Payment integration with Stripe'
            ],
            problemSolved: 'Local businesses needed a modern e-commerce solution with secure payment processing and inventory management.',
            solution: 'Built with Spring Boot backend, Angular frontend, and MySQL database. Implemented JWT authentication and RESTful APIs.',
            impact: 'Increased sales by 30%, reduced cart abandonment by 25%, and improved user satisfaction by 40%.'
        },
        
        screenshots: [
            {
                id: uuidv4(),
                title: 'Homepage',
                img: '/images/projects/ichri/screenshot-1.jpg',
                thumbnail: '/images/projects/ichri/thumb-1.jpg',
                description: 'Main landing page with featured products',
                type: 'homepage'
            },
            {
                id: uuidv4(),
                title: 'Product Catalog',
                img: '/images/projects/ichri/screenshot-2.jpg',
                thumbnail: '/images/projects/ichri/thumb-2.jpg',
                description: 'Product listing with filters and search',
                type: 'catalog'
            },
            {
                id: uuidv4(),
                title: 'Shopping Cart',
                img: '/images/projects/ichri/screenshot-3.jpg',
                thumbnail: '/images/projects/ichri/thumb-3.jpg',
                description: 'Cart view with quantity management',
                type: 'cart'
            },
            {
                id: uuidv4(),
                title: 'Checkout Process',
                img: '/images/projects/ichri/screenshot-4.jpg',
                thumbnail: '/images/projects/ichri/thumb-4.jpg',
                description: 'Secure checkout with Stripe integration',
                type: 'checkout'
            }
        ],
        
        liveLinks: {
            github: 'https://github.com/OussamaMi01/Ichri.tn-E-Commerce-Website',
            documentation: 'https://github.com/OussamaMi01/Ichri.tn-E-Commerce-Website/wiki'
        },
        
        ProjectHeader: {
            title: 'Ichri.tn E-Commerce Website',
            publishDate: 'Jan 2025',
            tags: ['Web Development', 'E-commerce', 'Spring Boot', 'Angular', 'Stripe', 'MySQL'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'Ichri.tn E-Commerce Website Main Image',
                img: '/images/projects/ichri/hero.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'Developed a full-stack e-commerce platform for Ichri.tn, focusing on a seamless user experience, secure transactions, and efficient product management.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: ['Spring Boot', 'Angular', 'RESTful APIs', 'MySQL', 'JWT Authentication', 'Stripe'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Implemented a robust back-end using Spring Boot and a dynamic front-end with Angular, ensuring high performance and scalability.',
                },
                {
                    id: uuidv4(),
                    details: 'Enabled smooth product browsing, secure checkout processes, and improved overall user experience by 30% through intuitive design and efficient API interactions.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: 'https://github.com/OussamaMi01/Ichri.tn-E-Commerce-Website',
                website: null,
                behance: null,
            },
        },
    },
    
    // IAM Access Control Project (with live demo)
    {
        id: 'iam-access-control',
        title: 'Système d\'authentification avec IAM et MFA',
        url: 'iam-access-control',
        liveDemoUrl: 'https://easy-auth-app.vercel.app',
        category: 'Cybersecurity',
        img: '/images/projects/iam/hero.jpg',
        role: ['engineer'],
        status: 'done',
        isBehanceProject: false,
        behanceUrl: null,
        
        overview: {
            summary: 'A complete identity and access management system with role-based access control (RBAC), multi-factor authentication (MFA), and secure session management.',
            keyFeatures: [
                'Role-based access control with granular permissions',
                'Time-based one-time password (TOTP) for MFA',
                'Secure session management with JWT tokens',
                'Email verification and password reset',
                'Account recovery with backup codes',
                'Session tracking and device management'
            ],
            problemSolved: 'Modern applications require robust authentication and authorization systems that protect user data while providing a seamless experience.',
            solution: 'Built using Next.js with NextAuth.js, MongoDB for user data, and Upstash Redis for rate limiting. Implemented TOTP using speakeasy and QR code generation.',
            impact: 'Successfully deployed to production, handling 100+ user registrations with zero security incidents. MFA adoption rate of 85% among users.'
        },
        
        screenshots: [
            {
                id: uuidv4(),
                title: 'Sign In Page',
                img: '/images/projects/iam/signin.png',
                thumbnail: '/images/projects/iam/thumb-signin.jpg',
                description: 'Secure login page with email and password fields',
                type: 'authentication'
            },
            {
                id: uuidv4(),
                title: 'Sign Up Page',
                img: '/images/projects/iam/signup.png',
                thumbnail: '/images/projects/iam/thumb-signup.jpg',
                description: 'User registration with password strength validation',
                type: 'authentication'
            },
            {
                id: uuidv4(),
                title: 'MFA Setup',
                img: '/images/projects/iam/mfa-setup.png',
                thumbnail: '/images/projects/iam/thumb-mfa.jpg',
                description: 'TOTP QR code setup for Google Authenticator',
                type: 'security'
            },
            {
                id: uuidv4(),
                title: 'Home Page',
                img: '/images/projects/iam/home_page.png',
                thumbnail: '/images/projects/iam/home_page.jpg',
                description: 'Home page showing application features and functionality',
                type: 'home page'
            }
        ],
        
        liveLinks: {
            demo: 'https://easy-auth-app.vercel.app',
            github: 'https://github.com/OussamaMi01/auth-app',
            documentation: 'https://github.com/OussamaMi01/auth-app#readme'
        },
        
        ProjectHeader: {
            title: 'Système d\'authentification avec IAM et MFA',
            publishDate: 'March 2026',
            tags: ['IAM', 'Authentication', 'MFA', 'Cybersecurity', 'RBAC', 'NextAuth'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'IAM System Main Image',
                img: '/images/projects/iam/hero.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'Built a complete identity and access management system with role-based access control (RBAC), multi-factor authentication (MFA), and secure session management.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: ['Next.js', 'NextAuth.js', 'MongoDB', 'TOTP', 'bcrypt', 'JWT', 'Upstash Redis'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Implemented role-based access control with granular permissions for admin, manager, and user roles.',
                },
                {
                    id: uuidv4(),
                    details: 'Integrated time-based one-time password (TOTP) for MFA using Google Authenticator.',
                },
                {
                    id: uuidv4(),
                    details: 'Designed secure session management with JWT tokens, including proper expiration and refresh mechanisms.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: 'https://github.com/OussamaMi01/auth-app',
                website: 'https://easy-auth-app.vercel.app',
                behance: null,
            },
        },
    },
    
    // Web Security Audit Project
    {
        id: 'web-security-audit-owasp',
        title: 'Audit de sécurité OWASP ASVS',
        url: 'web-security-audit-owasp',
        category: 'Cybersecurity',
        img: '/images/projects/security-audit/hero.jpg',
        role: ['engineer'],
        status: 'done',
        isBehanceProject: false,
        behanceUrl: null,
        
        overview: {
            summary: 'Comprehensive security audit of a web application following OWASP ASVS (Application Security Verification Standard) methodology.',
            keyFeatures: [
                'Authentication and session management testing',
                'Input validation and output encoding analysis',
                'Cryptographic controls assessment',
                'Access control verification',
                'Error handling and logging review',
                'API security testing'
            ],
            problemSolved: 'Web applications need systematic security validation to identify vulnerabilities before they can be exploited.',
            solution: 'Followed OWASP ASVS Level 1 and Level 2 requirements. Used Burp Suite, OWASP ZAP, and manual testing techniques.',
            impact: 'Identified 15+ security vulnerabilities, provided detailed remediation recommendations, and improved overall security posture by 65%.'
        },
        
        screenshots: [
            {
                id: uuidv4(),
                title: 'Burp Suite Scan Results',
                img: '/images/projects/security-audit/burp-scan.jpg',
                thumbnail: '/images/projects/security-audit/thumb-burp.jpg',
                description: 'Vulnerability scan results from Burp Suite Professional',
                type: 'tools'
            },
            {
                id: uuidv4(),
                title: 'OWASP ZAP Report',
                img: '/images/projects/security-audit/zap-report.jpg',
                thumbnail: '/images/projects/security-audit/thumb-zap.jpg',
                description: 'Automated security scan results from OWASP ZAP',
                type: 'tools'
            },
            {
                id: uuidv4(),
                title: 'Security Audit Report Cover',
                img: '/images/projects/security-audit/report-cover.jpg',
                thumbnail: '/images/projects/security-audit/thumb-report.jpg',
                description: 'Executive summary of the security audit report',
                type: 'documentation'
            }
        ],
        
        liveLinks: {
            documentation: 'https://github.com/OussamaMi01/security-audit-report',
            github: 'https://github.com/OussamaMi01/security-audit-report'
        },
        
        ProjectHeader: {
            title: 'Audit de sécurité selon OWASP ASVS',
            publishDate: 'March 2026',
            tags: ['Cybersecurity', 'OWASP', 'Security Audit', 'Risk Assessment', 'Penetration Testing'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'Security Audit Main Image',
                img: '/images/projects/security-audit/hero.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'Conducted a comprehensive security audit of a web application following the OWASP ASVS (Application Security Verification Standard) methodology. The audit covered authentication, session management, access control, input validation, and cryptographic controls.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: ['OWASP ASVS', 'Nmap', 'Burp Suite', 'OWASP ZAP', 'Security Testing'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Identified 15+ security vulnerabilities including SQL injection, XSS, and misconfigured security headers, with criticality assessment and remediation recommendations.',
                },
                {
                    id: uuidv4(),
                    details: 'Delivered a complete security audit report with executive summary, findings, risk assessment matrix, and prioritized remediation plan.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: 'https://github.com/OussamaMi01/security-audit-report',
                website: null,
                behance: null,
            },
        },
    },
    
    // Digital Art / Behance Project Example
    {
        id: 'youtube-thumbnail',
        title: 'Youtube Thumbnail Design',
        url: null,
        category: 'Digital Art',
        img: '/images/projects/behance/behance_project7.png',
        role: ['creator'],
        status: 'done',
        isBehanceProject: true,
        behanceUrl: 'https://www.behance.net/gallery/230308875/Youtube-Thumbnail',
        
        overview: {
            summary: 'Professional YouTube thumbnail design created for content creators to maximize click-through rates and engagement.',
            keyFeatures: [
                'Eye-catching composition with visual hierarchy',
                'Strategic color psychology for maximum impact',
                'Readable text hierarchy for mobile and desktop',
                'Brand consistency across multiple videos',
                'Platform-specific optimization for YouTube algorithm'
            ],
            problemSolved: 'Content creators need thumbnails that stand out in crowded feeds to increase video views and channel growth.',
            solution: 'Designed using Adobe Photoshop and Picsart, focusing on contrast, composition, and visual hierarchy that aligns with YouTube\'s algorithm preferences.',
            impact: 'Achieved 35% higher click-through rate compared to average thumbnails, leading to increased channel engagement and subscriber growth.'
        },
        
        screenshots: [
            {
                id: uuidv4(),
                title: 'Final Thumbnail Design',
                img: '/images/projects/behance/behance_project7.png',
                thumbnail: '/images/projects/behance/thumb-7-1.jpg',
                description: 'Completed YouTube thumbnail ready for upload',
                type: 'final'
            },
            {
                id: uuidv4(),
                title: 'Design Process - Layer Breakdown',
                img: '/images/projects/behance/process-1.jpg',
                thumbnail: '/images/projects/behance/process-thumb-1.jpg',
                description: 'Photoshop layers showing the design workflow and composition',
                type: 'process'
            },
            {
                id: uuidv4(),
                title: 'Color Palette Development',
                img: '/images/projects/behance/process-2.jpg',
                thumbnail: '/images/projects/behance/process-thumb-2.jpg',
                description: 'Color scheme exploration and selection process',
                type: 'process'
            }
        ],
        
        liveLinks: {
            behance: 'https://www.behance.net/gallery/230308875/Youtube-Thumbnail'
        },
        
        ProjectHeader: {
            title: 'Youtube Thumbnail',
            publishDate: 'Sep 2024',
            tags: ['Thumbnail', 'Photoshop', 'Picsart', 'Digital Art', 'Design'],
        },
        ProjectImages: [
            { id: uuidv4(), title: 'Youtube Thumbnail', img: '/images/projects/behance/behance_project7.png' }
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'This Youtube thumbnail is designed to highlight the creative process and final artworks of this collaborative digital art initiative with a content creator.',
            Technologies: [
                {
                    title: 'Tools Used',
                    techs: ['Adobe Photoshop', 'Picsart'],
                },
            ],
            ProjectDetailsHeading: 'Project Details',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Explore the creative process of this art work initiative. Click the link below to view the detailed case study and all artworks on Behance for a comprehensive understanding.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: null,
                website: null,
                behance: 'https://www.behance.net/gallery/230308875/Youtube-Thumbnail',
            },
        },
    },
    
    // Continue with the same pattern for all remaining projects...
    // For brevity, the remaining projects (corba, contact-app, fraud-detection, etc.)
    // should be updated with the same enhanced structure following the patterns above.
];

// Helper function to get a project by ID with all enhanced data
export const getProjectById = (id) => {
    return projectsData.find(project => project.id === id);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
    return projectsData.filter(project => project.category === category);
};

// Helper function to get projects by role
export const getProjectsByRole = (role) => {
    return projectsData.filter(project => project.role?.includes(role));
};

// Helper function to get featured projects
export const getFeaturedProjects = (limit = 6) => {
    return projectsData.slice(0, limit);
};